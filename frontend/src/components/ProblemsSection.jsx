import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Activity, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Dolor persistente",
    description: "Molestias constantes en rodilla, cadera o hombro que limitan tu día a día y no mejoran con el tiempo.",
    areas: ["Rodilla", "Cadera", "Hombro"]
  },
  {
    icon: Activity,
    title: "Lesiones o inflamación",
    description: "Daño por accidentes, desgaste deportivo o condiciones crónicas que requieren atención especializada.",
    areas: ["Menisco", "Ligamentos", "Manguito rotador"]
  },
  {
    icon: TrendingDown,
    title: "Pérdida de movilidad",
    description: "Dificultad para caminar, subir escaleras, levantar objetos o realizar actividades cotidianas.",
    areas: ["Rigidez", "Debilidad", "Limitación funcional"]
  }
];

const ProblemsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50" data-testid="problems-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="bg-white border-slate-100 hover:border-teal-100 hover:shadow-xl transition-all duration-300 group"
              data-testid={`problem-card-${index}`}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                  <problem.icon className="w-7 h-7 text-teal-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {problem.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {problem.areas.map((area, areaIndex) => (
                    <span
                      key={areaIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-2">
            Atención a pacientes de <span className="font-semibold text-slate-700">16 años en adelante</span>
          </p>
          <p className="text-slate-600">
            Valoramos cada caso de forma individual para ofrecerte el mejor plan de tratamiento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
