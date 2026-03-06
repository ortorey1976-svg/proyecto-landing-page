import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/529996359889?text=Hola,%20quiero%20información%20sobre%20";

const services = [
  {
    title: "Artroscopia de Rodilla",
    description: "Procedimiento mínimamente invasivo para tratar lesiones de menisco, ligamentos y cartílago con recuperación más rápida.",
    problem: "Lesiones de menisco, ligamentos cruzados",
    area: "Rodilla",
    featured: true,
    image: "https://images.unsplash.com/photo-1643834534240-75aee14ecdc8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxrbmVlJTIwYXJ0aHJvc2NvcHklMjBzdXJnZXJ5JTIwbWVkaWNhbHxlbnwwfHx8fDE3NzI4MjE0MTl8MA&ixlib=rb-4.1.0&q=85&w=400"
  },
  {
    title: "Artroscopia de Hombro",
    description: "Técnica avanzada para reparar el manguito rotador, inestabilidad y otras lesiones del hombro.",
    problem: "Manguito rotador, inestabilidad",
    area: "Hombro",
    featured: false,
    image: "https://images.unsplash.com/photo-1762237798212-bcc000c00891?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwxfHxvcnRob3BlZGljJTIwc3VyZ2VvbiUyMGRvY3RvciUyMGNvbnN1bHRhdGlvbnxlbnwwfHx8fDE3NzI4MjE0MzB8MA&ixlib=rb-4.1.0&q=85&w=400"
  },
  {
    title: "Radiofrecuencia de Cadera",
    description: "Alternativa innovadora para control de dolor crónico sin cirugía mayor, con mínima invasión.",
    problem: "Dolor crónico, artrosis",
    area: "Cadera",
    featured: true,
    image: "https://images.unsplash.com/photo-1763198302745-57cb94135f11?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBib25lJTIwYW5hdG9teSUyMG1lZGljYWx8ZW58MHx8fHwxNzcyODIxNDI5fDA&ixlib=rb-4.1.0&q=85&w=400"
  },
  {
    title: "Radiofrecuencia de Rodilla",
    description: "Tratamiento para dolor persistente de rodilla que no ha respondido a otros tratamientos conservadores.",
    problem: "Dolor articular crónico",
    area: "Rodilla",
    featured: false,
    image: "https://images.unsplash.com/photo-1746806942507-a7e93fdd6dd4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxrbmVlJTIwcGFpbiUyMGV4YW1pbmF0aW9uJTIwZG9jdG9yJTIwcGF0aWVudHxlbnwwfHx8fDE3NzI4MjE0Mzd8MA&ixlib=rb-4.1.0&q=85&w=400"
  },
  {
    title: "Radiofrecuencia de Hombro",
    description: "Opción para pacientes con dolor de hombro crónico que buscan evitar cirugías mayores.",
    problem: "Dolor crónico de hombro",
    area: "Hombro",
    featured: false,
    image: "https://images.unsplash.com/photo-1570174006382-148305ce4972?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjByZWhhYmlsaXRhdGlvbiUyMGV4ZXJjaXNlfGVufDB8fHx8MTc3MjgyMTQzOHww&ixlib=rb-4.1.0&q=85&w=400"
  },
  {
    title: "Reemplazo Total de Rodilla",
    description: "Implantes de alta tecnología para casos de desgaste severo, restaurando función y calidad de vida.",
    problem: "Artrosis avanzada, desgaste severo",
    area: "Rodilla",
    featured: true,
    image: "https://images.unsplash.com/photo-1715531785980-ce9b3bf1c38d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwyfHxrbmVlJTIwam9pbnQlMjBhbmF0b215JTIwb3J0aG9wZWRpY3xlbnwwfHx8fDE3NzI4MjE0Mjh8MA&ixlib=rb-4.1.0&q=85&w=400"
  },
  {
    title: "Reemplazo Total de Cadera",
    description: "Cirugía de reemplazo articular con técnicas modernas para una recuperación óptima.",
    problem: "Desgaste severo, fracturas",
    area: "Cadera",
    featured: false,
    image: "https://images.unsplash.com/photo-1758206523735-079e56f2faf7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxoaXAlMjB4cmF5JTIwcHJvc3RoZXNpcyUyMGltcGxhbnR8ZW58MHx8fHwxNzcyODIxNDM5fDA&ixlib=rb-4.1.0&q=85&w=400"
  },
  {
    title: "Reemplazo Parcial de Cadera",
    description: "Opción menos invasiva cuando solo parte de la articulación necesita ser reemplazada.",
    problem: "Desgaste parcial, fracturas específicas",
    area: "Cadera",
    featured: false,
    image: "https://images.unsplash.com/photo-1762237798221-a298c91e18a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwyfHxvcnRob3BlZGljJTIwc3VyZ2VvbiUyMGRvY3RvciUyMGNvbnN1bHRhdGlvbnxlbnwwfHx8fDE3NzI4MjE0MzB8MA&ixlib=rb-4.1.0&q=85&w=400"
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
              className={`group service-card border-slate-100 hover:border-teal-100 overflow-hidden ${
                service.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
              data-testid={`service-card-${index}`}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <span className={`absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm ${
                  service.area === "Rodilla" ? "bg-blue-500/80 text-white" :
                  service.area === "Cadera" ? "bg-purple-500/80 text-white" :
                  "bg-amber-500/80 text-white"
                }`}>
                  {service.area}
                </span>
              </div>

              <CardContent className="p-5 flex flex-col">
                {/* Content */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Problem solved */}
                <div className="mb-4 pb-4 border-b border-slate-100">
                  <span className="text-xs text-slate-500 block mb-1">Indicado para:</span>
                  <span className="text-sm text-slate-700 font-medium">{service.problem}</span>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-center text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-xl"
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
