import React from "react";
import { MessageCircle, FileText, Stethoscope } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Contáctanos",
    description: "Escríbenos por WhatsApp o agenda tu cita directamente en línea. Es rápido y sencillo."
  },
  {
    number: "02",
    icon: FileText,
    title: "Comparte tu caso",
    description: "Cuéntanos el motivo de tu consulta para preparar tu valoración de manera personalizada."
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "Recibe orientación",
    description: "Acude a tu valoración presencial donde evaluaremos tu caso y te presentaremos opciones de tratamiento."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white" data-testid="process-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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

        {/* Steps - Todos en color teal */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative text-center group"
              data-testid={`process-step-${index}`}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-teal-100" />
              )}

              {/* Step number */}
              <div className="relative inline-flex">
                <div className="w-32 h-32 rounded-3xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105 bg-teal-50 group-hover:bg-teal-100">
                  <step.icon className="w-12 h-12 text-teal-600" />
                </div>
                <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white bg-teal-600">
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
