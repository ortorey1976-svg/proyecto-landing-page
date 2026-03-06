import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, ChevronDown } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/529996359889?text=Hola,%20quiero%20información%20sobre%20una%20consulta";
const CALENDAR_URL = "https://calendar.app.google/1UDSSAzi7LHhgGYHA";
const HERO_IMAGE = "https://customer-assets.emergentagent.com/job_joint-therapy-mx/artifacts/ksgdkdi3_Equipo%20de%20radiofrecuencia.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Dr. Armando Cardenas con equipo de radiofrecuencia"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/30 mb-8 animate-fade-in-up"
            data-testid="hero-badge"
          >
            <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse" />
            <span className="text-teal-300 text-sm font-medium">
              Consultorio Premium en Mérida, Yucatán
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up animate-delay-100"
            data-testid="hero-headline"
          >
            Atención especializada en{" "}
            <span className="text-teal-400">rodilla, cadera y hombro</span>{" "}
            en Mérida
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl animate-fade-in-up animate-delay-200"
            data-testid="hero-subheadline"
          >
            Consulta ortopédica con enfoque en radiofrecuencia articular, 
            artroscopia y reemplazo articular, en un consultorio premium 
            con atención personalizada.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300"
            data-testid="hero-ctas"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-base bg-teal-600 hover:bg-teal-700 text-white shadow-xl shadow-teal-600/30 transition-all hover:translate-y-[-2px] btn-shine"
              data-testid="hero-whatsapp-btn"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Enviar WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-base border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:translate-y-[-2px]"
              data-testid="hero-calendar-btn"
            >
              <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Cita
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div 
            className="mt-12 flex flex-wrap gap-6 text-slate-400 text-sm animate-fade-in-up animate-delay-400"
            data-testid="hero-trust"
          >
            <div className="flex items-center">
              <span className="text-3xl font-bold text-white mr-2">20+</span>
              años de experiencia
            </div>
            <div className="flex items-center">
              <span className="text-3xl font-bold text-white mr-2">2,000+</span>
              procedimientos
            </div>
            <div className="flex items-center">
              <span className="text-white">Especialista en Ortopedia y Traumatología</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContact}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
        data-testid="scroll-indicator"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
