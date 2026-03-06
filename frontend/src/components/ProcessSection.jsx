import React from "react";
import { MessageCircle, FileText, Stethoscope } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Contáctanos",
    description: "Escríbenos por WhatsApp o agenda tu cita directamente en línea. Es rápido y sencillo.",
    color: "teal"
  },
  {
    number: "02",
    icon: FileText,
    title: "Comparte tu caso",
    description: "Cuéntanos el motivo de tu consulta para preparar tu valoración de manera personalizada.",
    color: "blue"
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "Recibe orientación",
    description: "Acude a tu valoración presencial donde evaluaremos tu caso y te presentaremos opciones de tratamiento.",
    color: "purple"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white" data-testid="process-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Proceso Simple
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" data-testid="process-title">
            ¿Cómo agendar tu cita?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Tres pasos sencillos para comenzar tu camino hacia una mejor calidad de vida.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative text-center group"
              data-testid={`process-step-${index}`}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-slate-200" />
              )}

              {/* Step number */}
              <div className="relative inline-flex">
                <div className={`w-32 h-32 rounded-3xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105 ${
                  step.color === "teal" ? "bg-teal-50 group-hover:bg-teal-100" :
                  step.color === "blue" ? "bg-blue-50 group-hover:bg-blue-100" :
                  "bg-purple-50 group-hover:bg-purple-100"
                }`}>
                  <step.icon className={`w-12 h-12 ${
                    step.color === "teal" ? "text-teal-600" :
                    step.color === "blue" ? "text-blue-600" :
                    "text-purple-600"
                  }`} />
                </div>
                <span className={`absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                  step.color === "teal" ? "bg-teal-600" :
                  step.color === "blue" ? "bg-blue-600" :
                  "bg-purple-600"
                }`}>
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
