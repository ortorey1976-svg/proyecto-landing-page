from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# SMTP Configuration (Google Workspace Relay)
SMTP_HOST = os.environ.get('SMTP_HOST', 'smtp-relay.gmail.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))
SMTP_USER = os.environ.get('SMTP_USER', 'citas@radiofrecuenciaarticular.com.mx')
SMTP_PASSWORD = os.environ.get('SMTP_PASSWORD', '')  # Empty for IP-based relay
NOTIFICATION_EMAIL = os.environ.get('NOTIFICATION_EMAIL', 'citas@radiofrecuenciaarticular.com.mx')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

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

# Email notification function using SMTP
async def send_lead_notification(form_data: ContactFormCreate, contact_id: str):
    """
    Envía notificación por email cuando llega un nuevo lead usando SMTP Relay.
    """
    zona_emoji = {
        "rodilla": "🦵",
        "cadera": "🦴", 
        "hombro": "💪",
        "otra": "📋"
    }
    emoji = zona_emoji.get(form_data.zona_afectada.lower(), "📋")
    
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
    </head>
    <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background-color: white; border-radius: 12px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 20px;">
                <h1 style="color: #0d9488; margin: 0;">🔔 Nuevo Lead</h1>
                <p style="color: #64748b; margin-top: 5px;">Radiofrecuencia Articular</p>
            </div>
            
            <div style="background-color: #f0fdfa; border-left: 4px solid #0d9488; padding: 15px; margin-bottom: 20px; border-radius: 0 8px 8px 0;">
                <h2 style="margin: 0 0 10px 0; color: #0f172a; font-size: 18px;">
                    {emoji} Zona afectada: {form_data.zona_afectada.upper()}
                </h2>
                <p style="margin: 0; color: #475569;"><strong>Motivo:</strong> {form_data.motivo}</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                        <strong style="color: #64748b;">Nombre:</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">
                        {form_data.nombre}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                        <strong style="color: #64748b;">Teléfono:</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                        <a href="https://wa.me/52{form_data.telefono.replace('-', '').replace(' ', '')}" style="color: #0d9488; text-decoration: none; font-weight: bold;">
                            📱 {form_data.telefono}
                        </a>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                        <strong style="color: #64748b;">Email:</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                        <a href="mailto:{form_data.email}" style="color: #0d9488; text-decoration: none;">
                            {form_data.email}
                        </a>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                        <strong style="color: #64748b;">Ciudad:</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">
                        {form_data.ciudad}
                    </td>
                </tr>
            </table>
            
            {f'''
            <div style="margin-top: 20px; padding: 15px; background-color: #fefce8; border-radius: 8px;">
                <strong style="color: #854d0e;">💬 Mensaje adicional:</strong>
                <p style="color: #713f12; margin: 10px 0 0 0;">{form_data.mensaje}</p>
            </div>
            ''' if form_data.mensaje else ''}
            
            <div style="margin-top: 25px; text-align: center;">
                <a href="https://wa.me/52{form_data.telefono.replace('-', '').replace(' ', '')}?text=Hola%20{form_data.nombre.split()[0]},%20gracias%20por%20contactarnos.%20Recibimos%20tu%20solicitud%20para%20valoración%20de%20{form_data.zona_afectada}." 
                   style="display: inline-block; background-color: #25d366; color: white; padding: 12px 24px; border-radius: 50px; text-decoration: none; font-weight: bold;">
                    💬 Responder por WhatsApp
                </a>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 12px;">
                <p style="margin: 0;">ID del lead: {contact_id}</p>
                <p style="margin: 5px 0 0 0;">Este email fue generado automáticamente desde radiofrecuenciaarticular.com.mx</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    def send_email():
        """Función síncrona para enviar email via SMTP"""
        msg = MIMEMultipart('alternative')
        msg['From'] = SMTP_USER
        msg['To'] = NOTIFICATION_EMAIL
        msg['Subject'] = f"🔔 Nuevo Lead: {form_data.nombre} - {form_data.zona_afectada.upper()}"
        
        # Attach HTML content
        msg.attach(MIMEText(html_content, 'html', 'utf-8'))
        
        try:
            server = smtplib.SMTP(SMTP_HOST, SMTP_PORT)
            server.starttls()  # Enable TLS
            
            # Only login if password is provided
            if SMTP_PASSWORD:
                server.login(SMTP_USER, SMTP_PASSWORD)
            
            server.send_message(msg)
            server.quit()
            return {"success": True, "message": "Email sent successfully"}
        except Exception as e:
            raise e
    
    try:
        result = await asyncio.to_thread(send_email)
        logger.info(f"Email notification sent successfully to {NOTIFICATION_EMAIL}")
        return result
    except Exception as e:
        logger.error(f"Failed to send email notification: {str(e)}")
        return None

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
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Contact Form Endpoint
@api_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(form_data: ContactFormCreate):
    """
    Recibe formulario de contacto de la landing page.
    Almacena en MongoDB y envía notificación por email.
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
    logger.info(f"Nuevo lead recibido: {form_data.nombre} - {form_data.telefono} - {form_data.zona_afectada}")
    
    # Send email notification (non-blocking)
    asyncio.create_task(send_lead_notification(form_data, contact_id))
    
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

# Test email endpoint
@api_router.post("/test-email")
async def test_email():
    """
    Endpoint para probar el envío de correo SMTP.
    """
    test_data = ContactFormCreate(
        nombre="Prueba Sistema",
        telefono="9991234567",
        email="test@example.com",
        motivo="Prueba de envío de correo",
        zona_afectada="rodilla",
        ciudad="Mérida",
        mensaje="Este es un correo de prueba del sistema de notificaciones.",
        acepta_privacidad=True
    )
    
    try:
        result = await send_lead_notification(test_data, "test-" + str(uuid.uuid4())[:8])
        if result:
            return {
                "success": True, 
                "message": f"Correo de prueba enviado a {NOTIFICATION_EMAIL}",
                "smtp_config": {
                    "host": SMTP_HOST,
                    "port": SMTP_PORT,
                    "user": SMTP_USER,
                    "notification_email": NOTIFICATION_EMAIL
                }
            }
        else:
            return {
                "success": False,
                "message": "Error al enviar el correo. Revisa los logs del servidor."
            }
    except Exception as e:
        logger.error(f"Test email error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error al enviar correo: {str(e)}")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
