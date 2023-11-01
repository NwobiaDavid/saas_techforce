// import { Button, Navbar } from "@material-tailwind/react";
import './App.css'
import Homepage from './components/Homepage'
import Nav from './components/Nav'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Features from './components/Testimonials';
import Testimonials from './components/Testimonials';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Nav/>
      <Homepage />
      <Testimonials />
    </div>
  )
}

export default App
