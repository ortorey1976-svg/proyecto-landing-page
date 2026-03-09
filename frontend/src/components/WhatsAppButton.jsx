import React from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/529996359889?text=Hola,%20quiero%20información%20sobre%20una%20consulta";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Contactar por WhatsApp"
      data-testid="whatsapp-float-btn"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
          ¿Tienes dudas? Escríbenos
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-slate-900" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
