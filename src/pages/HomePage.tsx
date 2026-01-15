import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WarrantySection from '../components/WarrantySection';
import ContactSection from '../components/ContactSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <WarrantySection />
      <ContactSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default HomePage;