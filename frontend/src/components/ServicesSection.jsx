import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Zap, CircleDot, Replace } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/529996359889?text=Hola,%20quiero%20información%20sobre%20";

const services = [
  {
    icon: CircleDot,
    title: "Artroscopia de Rodilla",
    description: "Procedimiento mínimamente invasivo para tratar lesiones de menisco, ligamentos y cartílago con recuperación más rápida.",
    problem: "Lesiones de menisco, ligamentos cruzados",
    area: "Rodilla",
    featured: true
  },
  {
    icon: CircleDot,
    title: "Artroscopia de Hombro",
    description: "Técnica avanzada para reparar el manguito rotador, inestabilidad y otras lesiones del hombro.",
    problem: "Manguito rotador, inestabilidad",
    area: "Hombro",
    featured: false
  },
  {
    icon: Zap,
    title: "Radiofrecuencia de Cadera",
    description: "Alternativa innovadora para control de dolor crónico sin cirugía mayor, con mínima invasión.",
    problem: "Dolor crónico, artrosis",
    area: "Cadera",
    featured: true
  },
  {
    icon: Zap,
    title: "Radiofrecuencia de Rodilla",
    description: "Tratamiento para dolor persistente de rodilla que no ha respondido a otros tratamientos conservadores.",
    problem: "Dolor articular crónico",
    area: "Rodilla",
    featured: false
  },
  {
    icon: Zap,
    title: "Radiofrecuencia de Hombro",
    description: "Opción para pacientes con dolor de hombro crónico que buscan evitar cirugías mayores.",
    problem: "Dolor crónico de hombro",
    area: "Hombro",
    featured: false
  },
  {
    icon: Replace,
    title: "Reemplazo Total de Rodilla",
    description: "Implantes de alta tecnología para casos de desgaste severo, restaurando función y calidad de vida.",
    problem: "Artrosis avanzada, desgaste severo",
    area: "Rodilla",
    featured: true
  },
  {
    icon: Replace,
    title: "Reemplazo Total de Cadera",
    description: "Cirugía de reemplazo articular con técnicas modernas para una recuperación óptima.",
    problem: "Desgaste severo, fracturas",
    area: "Cadera",
    featured: false
  },
  {
    icon: Replace,
    title: "Reemplazo Parcial de Cadera",
    description: "Opción menos invasiva cuando solo parte de la articulación necesita ser reemplazada.",
    problem: "Desgaste parcial, fracturas específicas",
    area: "Cadera",
    featured: false
  }
];

const ServicesSection = () => {
  const getWhatsAppLink = (service) => {
    return `${WHATSAPP_URL}${encodeURIComponent(service.title)}`;
  };

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group service-card border-slate-100 hover:border-teal-100 ${
                service.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
              data-testid={`service-card-${index}`}
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all service-icon ${
                    service.area === "Rodilla" ? "bg-blue-50 text-blue-600" :
                    service.area === "Cadera" ? "bg-purple-50 text-purple-600" :
                    "bg-amber-50 text-amber-600"
                  }`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
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
                <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed">
                  {service.description}
                </p>

                {/* Problem solved */}
                <div className="mb-4">
                  <span className="text-xs text-slate-500 block mb-1">Indicado para:</span>
                  <span className="text-sm text-slate-700 font-medium">{service.problem}</span>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-center text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-xl mt-auto"
                  data-testid={`service-cta-${index}`}
                >
                  <a href={getWhatsAppLink(service)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Consultar
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
