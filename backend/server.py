from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Model
class ContactFormCreate(BaseModel):
    nombre: str = Field(..., min_length=2, max_length=100)
    telefono: str = Field(..., min_length=10, max_length=20)
    email: EmailStr
    motivo: str = Field(..., min_length=2, max_length=200)
    zona_afectada: str = Field(..., description="rodilla, cadera, hombro, otra")
    ciudad: str = Field(..., min_length=2, max_length=100)
    mensaje: Optional[str] = Field(None, max_length=500)
    acepta_privacidad: bool = Field(..., description="Debe aceptar el aviso de privacidad")

class ContactFormResponse(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str
    nombre: str
    telefono: str
    email: str
    motivo: str
    zona_afectada: str
    ciudad: str
    mensaje: Optional[str]
    acepta_privacidad: bool
    created_at: str

# Routes
@api_router.get("/")
async def root():
    return {"message": "Radiofrecuencia Articular API - Landing Page Backend"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Contact Form Endpoint
@api_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(form_data: ContactFormCreate):
    """
    Recibe formulario de contacto de la landing page.
    Almacena en MongoDB para seguimiento de leads.
    """
    if not form_data.acepta_privacidad:
        raise HTTPException(
            status_code=400,
            detail="Debe aceptar el aviso de privacidad para continuar"
        )
    
    contact_id = str(uuid.uuid4())
    created_at = datetime.now(timezone.utc).isoformat()
    
    doc = {
        "id": contact_id,
        "nombre": form_data.nombre,
        "telefono": form_data.telefono,
        "email": form_data.email,
        "motivo": form_data.motivo,
        "zona_afectada": form_data.zona_afectada,
        "ciudad": form_data.ciudad,
        "mensaje": form_data.mensaje,
        "acepta_privacidad": form_data.acepta_privacidad,
        "created_at": created_at,
        "status": "nuevo"
    }
    
    await db.contact_leads.insert_one(doc)
    
    # Log the new lead
    logging.info(f"Nuevo lead recibido: {form_data.nombre} - {form_data.telefono} - {form_data.zona_afectada}")
    
    return ContactFormResponse(
        id=contact_id,
        nombre=form_data.nombre,
        telefono=form_data.telefono,
        email=form_data.email,
        motivo=form_data.motivo,
        zona_afectada=form_data.zona_afectada,
        ciudad=form_data.ciudad,
        mensaje=form_data.mensaje,
        acepta_privacidad=form_data.acepta_privacidad,
        created_at=created_at
    )

@api_router.get("/leads", response_model=List[ContactFormResponse])
async def get_contact_leads():
    """
    Obtiene todos los leads de contacto (para uso interno/admin).
    """
    leads = await db.contact_leads.find({}, {"_id": 0}).to_list(1000)
    return leads

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
