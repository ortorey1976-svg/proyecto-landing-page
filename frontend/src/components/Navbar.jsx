import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/529996359889?text=Hola,%20quiero%20información%20sobre%20una%20consulta";
const LOGO_URL = "https://customer-assets.emergentagent.com/job_joint-therapy-mx/artifacts/nfygiawx_Logo%20sencillo%20pro%20%20autorizado.png";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#doctor", label: "Doctor" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = ({ isScrolled, onOpenAppointment }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#inicio" 
            onClick={(e) => scrollToSection(e, "#inicio")}
            className="flex-shrink-0"
            data-testid="navbar-logo"
          >
            <img
              src={LOGO_URL}
              alt="Radiofrecuencia Articular"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isScrolled
                    ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              className={`rounded-full px-5 transition-all ${
                isScrolled
                  ? "border-slate-200 text-slate-700 hover:bg-slate-50"
                  : "border-white/30 text-white bg-white/10 hover:bg-white/20"
              }`}
              data-testid="nav-calendar-btn"
              onClick={onOpenAppointment}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Cita
            </Button>
            <Button
              asChild
              className="rounded-full px-5 bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20"
              data-testid="nav-whatsapp-btn"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-slate-600 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden bg-white rounded-2xl shadow-xl mt-2 p-4 animate-fade-in-up"
            data-testid="mobile-menu"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl font-medium transition-colors"
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
              <Button
                variant="outline"
                className="w-full rounded-xl justify-center"
                data-testid="mobile-calendar-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAppointment();
                }}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Cita
              </Button>
              <Button
                asChild
                className="w-full rounded-xl justify-center bg-teal-600 hover:bg-teal-700"
                data-testid="mobile-whatsapp-btn"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Enviar WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
