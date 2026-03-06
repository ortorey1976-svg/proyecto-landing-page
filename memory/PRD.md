# PRD - Landing Page Radiofrecuencia Articular

## Problem Statement Original
Landing page premium para consultorio en Mérida, Yucatán, bajo la marca **Radiofrecuencia Articular**. Imagen médica de alto nivel, moderna, limpia y confiable. Objetivo: captar pacientes y convertirlos en contacto por WhatsApp 999-635-9889 o citas agendadas por Google Calendar.

## User Personas
- **Primario**: Pacientes 16+ con dolor, lesión o desgaste en rodilla, cadera, hombro
- **Secundario**: Familiares buscando atención para otros, personas buscando segunda opinión

## What's Been Implemented (Dec 2025)

### Iteración 1 - MVP
- ✅ Landing page completa con todas las secciones base
- ✅ Backend FastAPI con endpoint /api/contact
- ✅ Formulario de contacto almacena leads en MongoDB

### Iteración 2 - Mejoras UX/Conversión (20 items)
- ✅ **Hero**: Foto real del Dr. Cardenas con equipo de radiofrecuencia
- ✅ **Trust indicators**: "20+ años · 2,000+ procedimientos · Especialista en Ortopedia y Traumatología"
- ✅ **Testimonios**: 3 reseñas de pacientes con estrellas y procedimientos
- ✅ **Doctor**: Nombre completo "Dr. Armando Cardenas"
- ✅ **Doctor**: Cédula Prof. 2930543, Especialidad 6075243
- ✅ **Doctor**: Logos del Colegio y Consejo Mexicano de Ortopedia
- ✅ **Servicios**: Botones teal "Consultar por WhatsApp"
- ✅ **Servicios**: Enlaces WhatsApp específicos por área (rodilla/cadera/hombro)
- ✅ **Servicios**: Tags de beneficios (Sin hospitalización, Ambulatorio, etc)
- ✅ **Proceso**: Colores uniformes en teal
- ✅ **Ubicación**: Mapa de Google Maps embebido
- ✅ **Formulario**: Título "Solicita tu valoración"
- ✅ **Formulario**: Botón teal activo
- ✅ **Footer**: Logo visible en fondo blanco
- ✅ **Footer**: Cédulas del doctor
- ✅ **SEO**: Title optimizado para búsquedas locales
- ✅ **SEO**: Meta description médica
- ✅ **SEO**: Schema.org MedicalBusiness + Physician
- ✅ **SEO**: Open Graph y Twitter Cards
- ✅ Espaciado vertical reducido entre secciones

## Technical Stack
- Frontend: React + Tailwind + Shadcn UI
- Backend: FastAPI + MongoDB
- Fonts: Manrope (headings), Inter (body)
- Colors: Slate (#0F172A) + Teal (#0D9488)

## Integration Details
- WhatsApp: https://wa.me/529996359889
- WhatsApp Rodilla: https://wa.me/529996359889?text=Hola%2C+me+interesa+una+valoraci%C3%B3n+para+*rodilla*
- WhatsApp Cadera: https://wa.me/529996359889?text=Hola%2C+me+interesa+una+valoraci%C3%B3n+para+*cadera*
- WhatsApp Hombro: https://wa.me/529996359889?text=Hola%2C+me+interesa+una+valoraci%C3%B3n+para+*hombro*
- Google Calendar: https://calendar.app.google/1UDSSAzi7LHhgGYHA
- Aviso de Privacidad: https://ortorey1976-svg.github.io/privacidad-datos/
- Email: citas@radiofrecuenciaarticular.com.mx

## Prioritized Backlog

### P0 - Completado ✅
Todo implementado

### P1 - Próximas mejoras sugeridas
- Integración de Google Analytics 4 / GTM para tracking
- Meta Pixel para campañas de publicidad
- Notificación por email cuando llegue nuevo lead
- Testimonios reales extraídos de Google Reviews

### P2 - Futuro
- Blog con contenido educativo
- Chat en vivo
- Portal de pacientes
