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

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='font-poppins'>
      <Nav/>
      <Homepage />
      <Features />
      <Testimonials />
      <Pricing />
    </div>
  )
}

export default App
