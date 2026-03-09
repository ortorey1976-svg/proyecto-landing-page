import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const problems = [
  {
    title: "Dolor persistente",
    description: "Molestias constantes en rodilla, cadera o hombro que limitan tu día a día y no mejoran con el tiempo.",
    areas: ["Rodilla", "Cadera", "Hombro"],
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="30" r="8" fill="#0d9488" opacity="0.3"/>
        <circle cx="50" cy="30" r="4" fill="#0d9488"/>
        <path d="M50 38 L50 55 M35 45 L65 45 M50 55 L40 75 M50 55 L60 75" stroke="#0d9488" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <circle cx="45" cy="50" r="6" fill="#ef4444" opacity="0.5"/>
        <circle cx="45" cy="50" r="3" fill="#ef4444"/>
      </svg>
    )
  },
  {
    title: "Lesiones o inflamación",
    description: "Daño por accidentes, desgaste deportivo o condiciones crónicas que requieren atención especializada.",
    areas: ["Menisco", "Ligamentos", "Manguito rotador"],
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <ellipse cx="50" cy="50" rx="25" ry="35" fill="none" stroke="#0d9488" strokeWidth="2"/>
        <ellipse cx="50" cy="50" rx="15" ry="20" fill="#0d9488" opacity="0.2"/>
        <path d="M35 45 Q50 35 65 45" stroke="#ef4444" strokeWidth="3" fill="none"/>
        <circle cx="50" cy="40" r="4" fill="#ef4444"/>
      </svg>
    )
  },
  {
    title: "Pérdida de movilidad",
    description: "Dificultad para caminar, subir escaleras, levantar objetos o realizar actividades cotidianas.",
    areas: ["Rigidez", "Debilidad", "Limitación funcional"],
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="25" r="10" fill="#0d9488" opacity="0.3"/>
        <path d="M50 35 L50 55" stroke="#0d9488" strokeWidth="3" fill="none"/>
        <path d="M35 42 L50 42 L65 42" stroke="#0d9488" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M50 55 L40 80" stroke="#0d9488" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M50 55 L60 80" stroke="#94a3b8" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="4 4"/>
        <path d="M55 70 L70 65" stroke="#94a3b8" strokeWidth="2" fill="none"/>
        <path d="M58 73 L73 68" stroke="#94a3b8" strokeWidth="2" fill="none"/>
      </svg>
    )
  }
];

const ProblemsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-50" data-testid="problems-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
            ¿Es esto para ti?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" data-testid="problems-title">
            Problemas que atendemos
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Si experimentas alguna de estas situaciones, podemos ayudarte a encontrar 
            una solución adecuada para tu caso.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="bg-white border-slate-100 hover:border-teal-100 hover:shadow-xl transition-all duration-300 group"
              data-testid={`problem-card-${index}`}
            >
              <CardContent className="p-6">
                {/* Anatomical Icon */}
                <div className="w-20 h-20 mx-auto mb-5 group-hover:scale-105 transition-transform">
                  {problem.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center">
                  {problem.title}
                </h3>
                <p className="text-slate-600 mb-5 leading-relaxed text-center">
                  {problem.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {problem.areas.map((area, areaIndex) => (
                    <span
                      key={areaIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 group/btn"
                    onClick={() => {
                      const element = document.querySelector("#servicios");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Ver tratamientos
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
