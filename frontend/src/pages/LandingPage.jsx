import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProblemsSection from "../components/ProblemsSection";
import ServicesSection from "../components/ServicesSection";
import AboutDoctorSection from "../components/AboutDoctorSection";
import ProcessSection from "../components/ProcessSection";
import LocationSection from "../components/LocationSection";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white" data-testid="landing-page">
      <Navbar isScrolled={isScrolled} />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ServicesSection />
        <AboutDoctorSection />
        <ProcessSection />
        <LocationSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;
