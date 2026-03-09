import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, GraduationCap, Clock, Award, Heart, ShieldCheck } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/529996359889?text=Hola,%20quiero%20agendar%20una%20valoración";
const CALENDAR_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3cHH1hiYntiDQrby4vJLKpUAuFChAX5j-q4fL7VsoLRh1cJQqn4_KFAFZukXnU3PEoJ7KYpC2s";
const DOCTOR_IMAGE = "https://customer-assets.emergentagent.com/job_e25f4938-63ae-489b-883f-4f66aba6c472/artifacts/e78w837i_Quirofano.png";
const COLEGIO_LOGO = "https://customer-assets.emergentagent.com/job_joint-therapy-mx/artifacts/l3akv2mz_Colegio%20Mexicano%20de%20Ortopedia.jpg";
const CONSEJO_LOGO = "https://customer-assets.emergentagent.com/job_joint-therapy-mx/artifacts/c1weaudv_Consejo%20Mexicano%20Ortopedia%20Y%20Traumatologia.png";
const ESCUELA_MILITAR_LOGO = "https://customer-assets.emergentagent.com/job_joint-therapy-mx/artifacts/tqb661z9_Escuela_M%C3%A9dico_Militar.svg.png";

const credentials = [
  {
    icon: GraduationCap,
    title: "Escuela Médico Militar",
    description: "Formación de excelencia"
  },
  {
    icon: Clock,
    title: "Más de 20 años",
    description: "De experiencia clínica"
  },
  {
    icon: Award,
    title: "Cédula Prof. 2930543",
    description: "Especialidad 6075243"
  },
  {
    icon: Heart,
    title: "Enfoque humanizado",
    description: "Atención personalizada"
  }
];

const procedures = [
  "Artroscopia de rodilla y hombro",
  "Reemplazo de cadera y rodilla",
  "Radiofrecuencia articular"
];

const AboutDoctorSection = () => {
  return (
    <section id="doctor" className="py-20 lg:py-28 bg-slate-50" data-testid="about-doctor-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="doctor-photo-container">
              <img
                src={DOCTOR_IMAGE}
                alt="Dr. Armando Cárdenas en quirófano"
                className="w-full rounded-2xl shadow-2xl"
                data-testid="doctor-image"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 hidden sm:block" data-testid="doctor-stats-card">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center">
                  <span className="text-2xl font-bold text-teal-600">20+</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Años de experiencia</p>
                  <p className="text-sm text-slate-500">2,000+ procedimientos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <span className="text-teal-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Sobre el Doctor
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2" data-testid="doctor-title">
              Dr. Armando Cárdenas
            </h2>
            <p className="text-lg text-teal-600 font-medium mb-6">
              Cirujano Ortopedista especializado en cadera, rodilla y hombro
            </p>
            
            {/* Certifications Badges */}
            <div className="flex items-center gap-4 mb-6 p-4 bg-white rounded-xl border border-slate-100">
              <img 
                src={ESCUELA_MILITAR_LOGO} 
                alt="Escuela Médico Militar" 
                className="h-14 w-14 object-contain rounded-lg"
              />
              <img 
                src={COLEGIO_LOGO} 
                alt="Colegio Mexicano de Ortopedia y Traumatología" 
                className="h-14 w-auto object-contain"
              />
              <img 
                src={CONSEJO_LOGO} 
                alt="Consejo Mexicano de Ortopedia y Traumatología" 
                className="h-14 w-auto object-contain"
              />
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                <span>Médico Certificado</span>
              </div>
            </div>
            
            <div className="space-y-6 text-slate-600 leading-relaxed mb-8">
              <p>
                Con formación en la <strong className="text-slate-800">Escuela Médico Militar</strong> y 
                especialidad en Ortopedia y Traumatología en instituciones de alto nivel, 
                mi compromiso es ofrecer atención médica de excelencia.
              </p>
              <p>
                Mi filosofía se basa en <strong className="text-slate-800">escuchar y entender</strong> a 
                cada paciente, explicar todo con claridad y buscar siempre la opción con 
                menor impacto posible antes de considerar la cirugía.
              </p>
              <p>
                Cuando la intervención quirúrgica es necesaria, utilizo 
                <strong className="text-slate-800"> técnicas modernas</strong> para una 
                recuperación más rápida y menos dolorosa.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {credentials.map((cred, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100"
                  data-testid={`credential-${index}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <cred.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{cred.title}</p>
                    <p className="text-slate-500 text-xs">{cred.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Procedures */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-slate-700 mb-3">Procedimientos que realizo:</p>
              <div className="flex flex-wrap gap-2">
                {procedures.map((proc, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700"
                  >
                    {proc}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 bg-teal-600 hover:bg-teal-700 text-white shadow-lg"
                data-testid="doctor-calendar-btn"
              >
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Valoración
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-slate-200 hover:bg-slate-50"
                data-testid="doctor-whatsapp-btn"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctorSection;
