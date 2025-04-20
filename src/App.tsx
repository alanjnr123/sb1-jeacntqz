import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyItMatters from './components/WhyItMatters';
import Testimonials from './components/Testimonials';
import ClientFit from './components/ClientFit';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Contact from './components/Contact';

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <WhyItMatters />
        <Testimonials />
        <ClientFit />
        <Process />
        <CTA />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="font-ibm">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;