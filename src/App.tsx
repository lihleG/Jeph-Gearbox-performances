import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Only import Routes and Route
import './App.css';
import './index.css';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WarrantyPage from './pages/WarrantyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/warranty" element={<WarrantyPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} /> 
      {/* You can add more routes here as needed */}
    </Routes>
  );
}

export default App;