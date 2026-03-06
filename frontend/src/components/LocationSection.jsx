import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, ExternalLink, ShieldCheck } from "lucide-react";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=21.0190163,-89.5859909";

const schedule = [
  { day: "Lunes", hours: "10:00 - 14:00" },
  { day: "Martes", hours: "Cerrado" },
  { day: "Miércoles", hours: "10:00 - 14:00 y 16:00 - 18:40" },
  { day: "Jueves", hours: "10:00 - 14:00 y 16:00 - 18:40" },
  { day: "Viernes", hours: "Cerrado" },
  { day: "Sábado", hours: "Cerrado" },
  { day: "Domingo", hours: "Cerrado" }
];

const insurances = ["GNP Seguros", "AXA Seguros", "MAPFRE", "Seguros Atlas", "MetLife México", "Zurich", "Allianz"];

const LocationSection = () => {
  const today = new Date().getDay();
  const dayIndex = today === 0 ? 6 : today - 1;

  return (
    <section id="ubicacion" className="py-16 lg:py-24 bg-slate-50" data-testid="location-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Encuéntranos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" data-testid="location-title">
            Ubicación y Horarios
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Consultorio premium en el corazón de Altabrisa, Mérida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Location Card with Map */}
          <Card className="overflow-hidden border-slate-100" data-testid="location-card">
            {/* Google Maps Embed */}
            <div className="relative h-64 bg-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8876!2d-89.5859909!3d21.0190163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5671c5d98e5c41%3A0x0!2sTorre%20Cenit%20Medical%20Center!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Torre Cenit Medical Center - Consultorio 1114"
                className="absolute inset-0"
              />
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Torre Cenit Medical Center</p>
                    <p className="text-slate-600 text-sm">
                      Piso PH, Consultorio 1114<br />
                      C. 15 #501, Col. Altabrisa<br />
                      97130 Mérida, Yucatán
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">WhatsApp</p>
                    <a 
                      href="tel:+529996359889" 
                      className="text-slate-600 text-sm hover:text-teal-600 transition-colors"
                    >
                      999-635-9889
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Correo</p>
                    <a 
                      href="mailto:citas@radiofrecuenciaarticular.com.mx" 
                      className="text-slate-600 text-sm hover:text-teal-600 transition-colors"
                    >
                      citas@radiofrecuenciaarticular.com.mx
                    </a>
                  </div>
                </div>

                {/* Maps Button */}
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-xl mt-2"
                  data-testid="maps-btn"
                >
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Abrir en Google Maps
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Schedule & Insurance Card */}
          <div className="space-y-6">
            {/* Schedule */}
            <Card className="border-slate-100" data-testid="schedule-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Horarios de Atención</h3>
                    <p className="text-sm text-slate-500">Consulta presencial con previa cita</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                        index === dayIndex
                          ? "bg-teal-50 border border-teal-100"
                          : "hover:bg-slate-50"
                      }`}
                      data-testid={`schedule-${item.day.toLowerCase()}`}
                    >
                      <span className={`font-medium text-sm ${
                        index === dayIndex ? "text-teal-700" : "text-slate-700"
                      }`}>
                        {item.day}
                        {index === dayIndex && (
                          <span className="ml-2 text-xs bg-teal-600 text-white px-2 py-0.5 rounded-full">
                            Hoy
                          </span>
                        )}
                      </span>
                      <span className={`text-sm ${
                        item.hours === "Cerrado" 
                          ? "text-slate-400" 
                          : index === dayIndex 
                            ? "text-teal-600 font-medium" 
                            : "text-slate-600"
                      }`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Note */}
                <div className="mt-4 p-3 bg-amber-50 rounded-xl">
                  <p className="text-sm text-amber-800">
                    <strong>Nota:</strong> Para fechas adicionales o urgencias, contáctanos por WhatsApp.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Insurance Card */}
            <Card className="border-slate-100" data-testid="insurance-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Seguros Médicos</h3>
                    <p className="text-sm text-slate-500">Aceptamos las principales aseguradoras</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {insurances.map((insurance, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                    >
                      {insurance}
                    </span>
                  ))}
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                    +5 más
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  La cobertura varía según tu póliza. Contáctanos con los datos de tu seguro para verificar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
