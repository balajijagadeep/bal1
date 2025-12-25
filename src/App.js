import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Equipment from './pages/Equipment';
import Diet from './pages/Diet';
import Workout from './pages/Workout';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from './components/ui/sonner';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}
