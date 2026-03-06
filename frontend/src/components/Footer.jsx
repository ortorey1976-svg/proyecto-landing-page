import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, MapPin, Clock, Mail, Phone, ExternalLink } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/529996359889?text=Hola,%20quiero%20información%20sobre%20una%20consulta";
const CALENDAR_URL = "https://calendar.app.google/1UDSSAzi7LHhgGYHA";
const PRIVACY_URL = "https://ortorey1976-svg.github.io/privacidad-datos/";
const LOGO_URL = "https://customer-assets.emergentagent.com/job_e25f4938-63ae-489b-883f-4f66aba6c472/artifacts/mep23d7b_Logo%20autorizado%20perfil.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-white" data-testid="footer">
      {/* CTA Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Da el siguiente paso para valorar tu caso
            </h2>
            <p className="text-slate-400 mb-8">
              Escríbenos por WhatsApp o agenda tu cita en línea. Estamos aquí para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 bg-teal-600 hover:bg-teal-700 text-white"
                data-testid="footer-whatsapp-btn"
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
                className="rounded-full px-8 border-slate-600 text-white hover:bg-slate-800"
                data-testid="footer-calendar-btn"
              >
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Cita
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column - Logo visible */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-3 inline-block mb-4">
              <img
                src={LOGO_URL}
                alt="Radiofrecuencia Articular"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Atención ortopédica especializada en rodilla, cadera y hombro 
              en Mérida, Yucatán.
            </p>
            <p className="text-slate-500 text-xs">
              Dr. Armando Cardenas<br />
              Cédula Prof. 2930543<br />
              Especialidad 6075243
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Servicios", href: "#servicios" },
                { label: "Sobre el Doctor", href: "#doctor" },
                { label: "Ubicación", href: "#ubicacion" },
                { label: "Contacto", href: "#contacto" },
                { label: "FAQ", href: "#faq" }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                <a 
                  href="tel:+529996359889" 
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  999-635-9889
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:citas@radiofrecuenciaarticular.com.mx" 
                  className="text-slate-400 hover:text-white transition-colors text-sm break-all"
                >
                  citas@radiofrecuenciaarticular.com.mx
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  Torre Cenit Medical Center<br />
                  Piso PH, Consultorio 1114<br />
                  Altabrisa, Mérida, Yucatán
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white mb-4">Horarios</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-500" />
                <span className="text-slate-400">Lunes: 10:00 - 14:00</span>
              </li>
              <li className="text-slate-400 pl-6">
                Miércoles: 10:00 - 14:00 y 16:00 - 18:40
              </li>
              <li className="text-slate-400 pl-6">
                Jueves: 10:00 - 14:00 y 16:00 - 18:40
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {currentYear} Radiofrecuencia Articular. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a
                href={PRIVACY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors text-sm flex items-center gap-1"
                data-testid="footer-privacy-link"
              >
                Aviso de Privacidad
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <p className="text-slate-600 text-xs text-center leading-relaxed max-w-4xl mx-auto">
              <strong>Aviso médico:</strong> La información contenida en este sitio es informativa 
              y no sustituye una valoración médica presencial. El diagnóstico y tratamiento 
              definitivo requieren consulta médica. Consulta a un profesional de la salud 
              para cualquier condición médica.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
