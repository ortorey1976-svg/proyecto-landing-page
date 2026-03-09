import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

// WhatsApp links específicos por área
const WHATSAPP_LINKS = {
  Rodilla: "https://wa.me/529996359889?text=Hola%2C+me+interesa+una+valoraci%C3%B3n+para+*rodilla*.+%C2%BFTienen+disponibilidad%3F",
  Cadera: "https://wa.me/529996359889?text=Hola%2C+me+interesa+una+valoraci%C3%B3n+para+*cadera*.+%C2%BFTienen+disponibilidad%3F",
  Hombro: "https://wa.me/529996359889?text=Hola%2C+me+interesa+una+valoraci%C3%B3n+para+*hombro*.+%C2%BFTienen+disponibilidad%3F"
};

const services = [
  {
    title: "Artroscopia de Rodilla",
    description: "Procedimiento mínimamente invasivo para tratar lesiones de menisco, ligamentos y cartílago.",
    problem: "Lesiones de menisco, ligamentos cruzados",
    area: "Rodilla",
    featured: true,
    benefits: ["Sin hospitalización", "Recuperación 2-4 semanas", "Ambulatorio"]
  },
  {
    title: "Artroscopia de Hombro",
    description: "Técnica avanzada para reparar el manguito rotador, inestabilidad y otras lesiones.",
    problem: "Manguito rotador, inestabilidad",
    area: "Hombro",
    featured: false,
    benefits: ["Mínima invasión", "Alta el mismo día", "Cicatrices pequeñas"]
  },
  {
    title: "Radiofrecuencia de Cadera",
    description: "Alternativa innovadora para control de dolor crónico sin cirugía mayor.",
    problem: "Dolor crónico, artrosis",
    area: "Cadera",
    featured: true,
    benefits: ["Sin hospitalización", "Resultado en 2-3 semanas", "Ambulatorio"]
  },
  {
    title: "Radiofrecuencia de Rodilla",
    description: "Tratamiento para dolor persistente que no ha respondido a otros tratamientos.",
    problem: "Dolor articular crónico",
    area: "Rodilla",
    featured: false,
    benefits: ["Sin cirugía mayor", "Alivio duradero", "Procedimiento rápido"]
  },
  {
    title: "Radiofrecuencia de Hombro",
    description: "Opción para pacientes con dolor crónico que buscan evitar cirugías mayores.",
    problem: "Dolor crónico de hombro",
    area: "Hombro",
    featured: false,
    benefits: ["Mínimamente invasivo", "Recuperación rápida", "Sin hospitalización"]
  },
  {
    title: "Reemplazo Total de Rodilla",
    description: "Implantes de alta tecnología para casos de desgaste severo, restaurando función y calidad de vida.",
    problem: "Artrosis avanzada, desgaste severo",
    area: "Rodilla",
    featured: true,
    benefits: ["Tecnología de punta", "Movilidad restaurada", "Implantes premium"]
  },
  {
    title: "Reemplazo Total de Cadera",
    description: "Cirugía de reemplazo articular con técnicas modernas para una recuperación óptima.",
    problem: "Desgaste severo, fracturas",
    area: "Cadera",
    featured: false,
    benefits: ["Técnicas modernas", "Rehabilitación guiada", "Alta calidad de vida"]
  },
  {
    title: "Reemplazo Parcial de Cadera",
    description: "Opción menos invasiva cuando solo parte de la articulación necesita ser reemplazada.",
    problem: "Desgaste parcial, fracturas específicas",
    area: "Cadera",
    featured: false,
    benefits: ["Menos invasivo", "Conserva tejido sano", "Recuperación más rápida"]
  }
];

const ServicesSection = () => {
  const getWhatsAppLink = (area) => {
    return WHATSAPP_LINKS[area] || WHATSAPP_LINKS.Rodilla;
  };

  return (
    <section id="servicios" className="py-16 lg:py-24 bg-white" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Servicios Especializados
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" data-testid="services-title">
            Tratamientos que ofrecemos
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Procedimientos avanzados para rodilla, cadera y hombro con enfoque 
            en resultados y recuperación del paciente.
          </p>
        </div>

        {/* Services Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group service-card border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 ${
                service.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
              data-testid={`service-card-${index}`}
            >
              <CardContent className="p-5 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    service.area === "Rodilla" ? "bg-blue-50 text-blue-700" :
                    service.area === "Cadera" ? "bg-purple-50 text-purple-700" :
                    "bg-amber-50 text-amber-700"
                  }`}>
                    {service.area}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-3 flex-grow leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {service.benefits.map((benefit, i) => (
                    <span key={i} className="text-xs text-teal-700 bg-teal-50 px-2 py-1 rounded">
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Problem solved */}
                <div className="mb-4 pb-3 border-b border-slate-100">
                  <span className="text-xs text-slate-500 block mb-1">Indicado para:</span>
                  <span className="text-sm text-slate-700 font-medium">{service.problem}</span>
                </div>

                {/* CTA - Botón más visible */}
                <Button
                  asChild
                  size="sm"
                  className="w-full justify-center bg-teal-600 hover:bg-teal-700 text-white rounded-lg mt-auto"
                  data-testid={`service-cta-${index}`}
                >
                  <a href={getWhatsAppLink(service.area)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Consultar por WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
