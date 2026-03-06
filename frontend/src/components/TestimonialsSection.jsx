import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Rosío Valle",
    location: "Mérida, Yucatán",
    rating: 5,
    text: "Excelente trato y explicación, se tomó el tiempo de analizar y dar sugerencias de tratamiento, así como uso de diversos gráficos para ejemplificar y comparar parámetros.",
    procedure: "Consulta de valoración",
    date: "Agosto 2024",
    verified: true
  },
  {
    name: "L. Pliego",
    location: "Mérida, Yucatán",
    rating: 5,
    text: "Me pareció muy buena forma de hacer el diagnóstico puesto que primero hizo preguntas y después leyó el que traía la resonancia y el reporte de la terapia.",
    procedure: "Diagnóstico",
    date: "Mayo 2024",
    verified: true
  },
  {
    name: "Cesar Espadas",
    location: "Mérida, Yucatán",
    rating: 5,
    text: "La valoración para identificar la zona exacta afectada es muy buena. Opiniones muy puntuales y sólidas respecto al padecimiento. Excelente conocimiento y diagnóstico.",
    procedure: "Valoración",
    date: "Abril 2024",
    verified: true
  },
  {
    name: "Michael Zangrillo",
    location: "Mérida, Yucatán",
    rating: 5,
    text: "Dr. Rey was very thorough in his examination and took his time explaining his diagnoses and the various potential methods of treatment. I was very happy with the visit and he receives my highest recommendation.",
    procedure: "Consulta de valoración",
    date: "Febrero 2026",
    verified: true
  },
  {
    name: "Juan Alberto Herrera",
    location: "Mérida, Yucatán",
    rating: 5,
    text: "Atención muy buena, mucha empatía y muy buena explicación.",
    procedure: "Consulta",
    date: "Diciembre 2025",
    verified: true
  },
  {
    name: "Rosa María Romero",
    location: "Mérida, Yucatán",
    rating: 5,
    text: "Excelente doctor. Nos explicó todo muy bien, nos dio opciones de tratamiento.",
    procedure: "Consulta",
    date: "Noviembre 2025",
    verified: true
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Testimonios Verificados
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" data-testid="testimonials-title">
            Lo que dicen nuestros pacientes
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-slate-700 font-semibold">682 opiniones</span>
            <span className="text-slate-500">en Doctoralia</span>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            La satisfacción de nuestros pacientes es nuestra mejor carta de presentación.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-slate-100 hover:border-teal-100 hover:shadow-xl transition-all duration-300 group"
              data-testid={`testimonial-card-${index}`}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-teal-100 fill-teal-100" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      ✓ Verificado
                    </span>
                  )}
                </div>

                {/* Text */}
                <p className="text-slate-600 mb-5 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>

                {/* Procedure Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full">
                    {testimonial.procedure}
                  </span>
                </div>

                {/* Author */}
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.location} · {testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Doctoralia Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.doctoralia.com.mx/rey-armando-cardenas-acuna/ortopedista-traumatologo/merida"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-full font-medium transition-colors"
            data-testid="doctoralia-link"
          >
            Ver todas las opiniones en Doctoralia
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
