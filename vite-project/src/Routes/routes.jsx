import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/Contact'; 

// Importe o componente App corretamente
import App from '../App'; 

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} /> 
    </Routes>
  );
}

export default AppRoutes;
