import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";

const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Torre+Cenit+Medical+Center+Altabrisa+Merida";
const HOSPITAL_IMAGE = "https://images.pexels.com/photos/18435276/pexels-photo-18435276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const schedule = [
  { day: "Lunes", hours: "10:00 - 14:00" },
  { day: "Martes", hours: "Cerrado" },
  { day: "Miércoles", hours: "10:00 - 14:00 y 16:00 - 18:40" },
  { day: "Jueves", hours: "10:00 - 14:00 y 16:00 - 18:40" },
  { day: "Viernes", hours: "Cerrado" },
  { day: "Sábado", hours: "Cerrado" },
  { day: "Domingo", hours: "Cerrado" }
];

const LocationSection = () => {
  const today = new Date().getDay();
  const dayIndex = today === 0 ? 6 : today - 1; // Adjust for Sunday

  return (
    <section id="ubicacion" className="py-20 lg:py-28 bg-slate-50" data-testid="location-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
          {/* Location Card */}
          <Card className="overflow-hidden border-slate-100" data-testid="location-card">
            <div className="relative h-48">
              <img
                src={HOSPITAL_IMAGE}
                alt="Torre Cenit Medical Center"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg">Torre Cenit Medical Center</h3>
                <p className="text-white/80 text-sm">Altabrisa, Mérida</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Dirección</p>
                    <p className="text-slate-600 text-sm">
                      Piso PH, Consultorio 1114<br />
                      C. 15 #501, Col. Altabrisa<br />
                      97130 Mérida, Yucatán
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
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
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-purple-600" />
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
                  className="w-full rounded-xl mt-4"
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

          {/* Schedule Card */}
          <Card className="border-slate-100" data-testid="schedule-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Horarios de Atención</h3>
                  <p className="text-sm text-slate-500">Consulta presencial en Mérida</p>
                </div>
              </div>

              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                      index === dayIndex
                        ? "bg-teal-50 border border-teal-100"
                        : "hover:bg-slate-50"
                    }`}
                    data-testid={`schedule-${item.day.toLowerCase()}`}
                  >
                    <span className={`font-medium ${
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
              <div className="mt-6 p-4 bg-amber-50 rounded-xl">
                <p className="text-sm text-amber-800">
                  <strong>Nota:</strong> Para horarios fuera de agenda o urgencias, 
                  contáctanos por WhatsApp.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
