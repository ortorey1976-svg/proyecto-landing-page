# PRD - Landing Page Radiofrecuencia Articular

## Problem Statement Original
Landing page premium para consultorio en Mérida, Yucatán, bajo la marca **Radiofrecuencia Articular**. Imagen médica de alto nivel, moderna, limpia y confiable. Objetivo: captar pacientes y convertirlos en contacto por WhatsApp 999-635-9889 o citas agendadas por Google Calendar. Enfocado en rodilla, cadera y hombro.

## User Personas
- **Primario**: Pacientes 16+ con dolor, lesión o desgaste en rodilla, cadera, hombro
- **Secundario**: Familiares buscando atención para otros, personas buscando segunda opinión
- **Perfil**: Valora atención especializada, experiencia premium, rapidez para agendar

## Core Requirements (Static)
- Hero con CTAs de WhatsApp y Google Calendar
- Sección de problemas que atiende (rodilla, cadera, hombro)
- 8 servicios (Artroscopia, Radiofrecuencia, Reemplazo)
- Sección Sobre el Doctor con foto y credenciales
- Proceso de 3 pasos
- Ubicación y horarios (Torre Cenit Medical Center, Altabrisa)
- Formulario de contacto con checkbox de privacidad
- FAQ con accordion
- Footer con disclaimer médico
- Botón flotante de WhatsApp

## What's Been Implemented (Dec 2025)
- ✅ Landing page completa con todas las secciones
- ✅ Backend FastAPI con endpoint /api/contact
- ✅ Formulario de contacto almacena leads en MongoDB
- ✅ Navbar con navegación suave y CTAs
- ✅ Hero premium con imagen de fondo
- ✅ Sección de servicios en grid (Bento style)
- ✅ Sección del Doctor con foto del quirófano
- ✅ Ubicación con horarios dinámicos (marca día actual)
- ✅ FAQ con accordion de shadcn
- ✅ Footer con aviso de privacidad y disclaimer médico
- ✅ Botón flotante de WhatsApp
- ✅ Diseño responsive mobile-first

## Technical Stack
- Frontend: React + Tailwind + Shadcn UI
- Backend: FastAPI + MongoDB
- Fonts: Manrope (headings), Inter (body)
- Colors: Slate (#0F172A) + Teal (#0D9488)

## Integration Details
- WhatsApp: https://wa.me/529996359889
- Google Calendar: https://calendar.app.google/1UDSSAzi7LHhgGYHA
- Aviso de Privacidad: https://ortorey1976-svg.github.io/privacidad-datos/
- Email: citas@radiofrecuenciaarticular.com.mx

## Prioritized Backlog

### P0 - Completado ✅
- Landing page funcional
- Formulario de contacto
- Todas las secciones

### P1 - Próximas mejoras sugeridas
- Integración de Google Analytics 4 / GTM
- Meta Pixel para tracking de conversiones
- SEO on-page (meta tags, schema.org)
- Integración de email para notificación de leads

### P2 - Futuro
- Blog con contenido educativo
- Testimonios de pacientes
- Chat en vivo
- Portal de pacientes
