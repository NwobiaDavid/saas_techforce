// import { Button, Navbar } from "@material-tailwind/react";
import './App.css'
import Homepage from './components/Homepage'
import Nav from './components/Nav'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='font-poppins overflow-x-hidden'>
      <Nav/>
      <Homepage />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
