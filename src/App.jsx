import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Partners from './components/Partners';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Values from './components/Values';
import Contact from './components/Contact';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const Home = () => (
  <>
    <Hero />
    <Stats />
    <Partners />
    <Programs />
    <WhyChooseUs />
    <About />
    <Features />
    <Testimonials />
    <Team />
    <Values />
    <InstagramFeed />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-white text-brand-navy/90 font-sans min-h-screen relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Programs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
