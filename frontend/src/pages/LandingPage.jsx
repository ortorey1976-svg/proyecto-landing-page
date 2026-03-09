import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProblemsSection from "../components/ProblemsSection";
import ServicesSection from "../components/ServicesSection";
import TransformationSection from "../components/TransformationSection";
import TestimonialsSection from "../components/TestimonialsSection";
import AboutDoctorSection from "../components/AboutDoctorSection";
import ProcessSection from "../components/ProcessSection";
import LocationSection from "../components/LocationSection";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import AppointmentModal from "../components/AppointmentModal";

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openAppointmentModal = () => setIsAppointmentModalOpen(true);
  const closeAppointmentModal = () => setIsAppointmentModalOpen(false);

  return (
    <div className="min-h-screen bg-white" data-testid="landing-page">
      <Navbar isScrolled={isScrolled} onOpenAppointment={openAppointmentModal} />
      <main>
        <HeroSection onOpenAppointment={openAppointmentModal} />
        <ProblemsSection />
        <ServicesSection />
        <TransformationSection />
        <TestimonialsSection />
        <AboutDoctorSection />
        <ProcessSection />
        <LocationSection />
        <ContactSection onOpenAppointment={openAppointmentModal} />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={closeAppointmentModal} 
      />
    </div>
  );
};

export default LandingPage;
