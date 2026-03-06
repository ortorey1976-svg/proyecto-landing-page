import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María Elena García",
    location: "Mérida, Yucatán",
    rating: 5,
    text: "Excelente atención del Dr. Cardenas. Me operó de la rodilla con artroscopia y en pocas semanas ya estaba caminando sin dolor. Muy profesional y humano.",
    procedure: "Artroscopia de Rodilla",
    date: "Hace 2 meses"
  },
  {
    name: "Roberto Martínez",
    location: "Cancún, Q. Roo",
    rating: 5,
    text: "Después de años con dolor de cadera, el tratamiento de radiofrecuencia me cambió la vida. El doctor explicó todo claramente y el procedimiento fue ambulatorio.",
    procedure: "Radiofrecuencia de Cadera",
    date: "Hace 3 meses"
  },
  {
    name: "Carmen Lucía Pérez",
    location: "Mérida, Yucatán",
    rating: 5,
    text: "Mi mamá de 68 años se hizo el reemplazo de rodilla. La atención fue excepcional desde la primera consulta. Ahora camina sin bastón. ¡Gracias Dr. Cardenas!",
    procedure: "Reemplazo de Rodilla",
    date: "Hace 1 mes"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" data-testid="testimonials-title">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            La satisfacción de nuestros pacientes es nuestra mejor carta de presentación.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
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
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-600 mb-6 leading-relaxed italic">
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

        {/* Google Reviews Link */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-2">
            ¿Ya nos visitaste? Comparte tu experiencia
          </p>
          <a
            href="https://g.page/r/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            Dejar una reseña en Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
