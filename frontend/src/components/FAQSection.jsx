import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué problemas articulares atienden?",
    answer: "Nos especializamos en problemas de rodilla, cadera y hombro. Esto incluye lesiones deportivas, desgaste articular (artrosis), dolor crónico, fracturas, y condiciones que requieran artroscopia, radiofrecuencia o reemplazo articular."
  },
  {
    question: "¿Cómo puedo solicitar una cita?",
    answer: "Puedes agendar tu cita de tres formas: 1) Por WhatsApp al 999-635-9889, 2) Directamente en nuestro calendario en línea, o 3) Completando el formulario de contacto en esta página. Te confirmaremos tu cita a la brevedad."
  },
  {
    question: "¿Dónde está ubicado el consultorio?",
    answer: "Estamos en Torre Cenit Medical Center, Piso PH, Consultorio 1114, ubicado en C. 15 #501, Col. Altabrisa, 97130 Mérida, Yucatán. Es una zona de fácil acceso con estacionamiento disponible."
  },
  {
    question: "¿Cuáles son los horarios de atención?",
    answer: "Atendemos los lunes de 10:00 a 14:00 hrs, miércoles de 10:00 a 14:00 y de 16:00 a 18:40 hrs, y jueves de 10:00 a 14:00 y de 16:00 a 18:40 hrs. Para horarios especiales o urgencias, contáctanos por WhatsApp."
  },
  {
    question: "¿Atienden a menores de edad?",
    answer: "Sí, atendemos pacientes a partir de los 16 años de edad. Para menores de 18 años, es necesario que acudan acompañados de un padre o tutor legal."
  },
  {
    question: "¿Qué es la radiofrecuencia articular?",
    answer: "Es un procedimiento mínimamente invasivo que utiliza energía de radiofrecuencia para tratar el dolor articular crónico. Es una alternativa efectiva para pacientes que buscan alivio del dolor sin someterse a cirugías mayores."
  },
  {
    question: "¿Cuál es la diferencia entre artroscopia y reemplazo articular?",
    answer: "La artroscopia es un procedimiento mínimamente invasivo para reparar tejidos dañados (menisco, ligamentos, manguito rotador) conservando la articulación. El reemplazo articular se reserva para casos de desgaste severo donde se sustituye la articulación con un implante."
  },
  {
    question: "¿Aceptan seguros médicos?",
    answer: "Trabajamos con diversos seguros de gastos médicos mayores. Te recomendamos contactarnos con los datos de tu póliza para verificar la cobertura específica de tu plan antes de tu consulta."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-teal-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" data-testid="faq-title">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios y proceso de atención.
          </p>
        </div>

        {/* Accordion */}
        <Accordion 
          type="single" 
          collapsible 
          className="space-y-4"
          data-testid="faq-accordion"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl border border-slate-100 px-6 data-[state=open]:shadow-lg transition-all"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left text-slate-900 font-medium hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            ¿Tienes otra pregunta que no está aquí?
          </p>
          <a
            href="https://wa.me/529996359889?text=Hola,%20tengo%20una%20pregunta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
            data-testid="faq-whatsapp-link"
          >
            Escríbenos por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
