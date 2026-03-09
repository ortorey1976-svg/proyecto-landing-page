import React from "react";
import { ArrowRight, Frown, Smile } from "lucide-react";

const TransformationSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-teal-600 to-teal-700" data-testid="transformation-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Imagina tu vida sin dolor
          </h2>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Muchos pacientes llegan con meses o años de molestias. 
            Así es como podría verse tu transformación:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Before */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <Frown className="w-6 h-6 text-red-300" />
              </div>
              <h3 className="text-white font-semibold text-lg">Hoy</h3>
            </div>
            <ul className="space-y-3 text-teal-100">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✕</span>
                <span>Dolor constante al caminar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✕</span>
                <span>Dificultad para subir escaleras</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✕</span>
                <span>Noches sin descansar bien</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✕</span>
                <span>Limitación en actividades</span>
              </li>
            </ul>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex justify-center">
            <div className="bg-white/20 rounded-full p-4">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* After */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Smile className="w-6 h-6 text-green-300" />
              </div>
              <h3 className="text-white font-semibold text-lg">En 4-6 semanas</h3>
            </div>
            <ul className="space-y-3 text-teal-100">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Caminar sin molestias</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Subir escaleras con normalidad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Dormir sin despertarte por dolor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Volver a tus actividades favoritas</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-teal-200 text-sm mt-8 max-w-lg mx-auto">
          *Los resultados varían según cada paciente y tipo de tratamiento. 
          La valoración médica determinará el plan adecuado para tu caso.
        </p>
      </div>
    </section>
  );
};

export default TransformationSection;
