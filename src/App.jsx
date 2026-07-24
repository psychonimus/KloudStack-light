import React, { useEffect, useState, useRef } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/home/Home'
import Footer from './components/Footer/Footer'
import BackToTop from './components/BackToTop/BackToTop'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true }
    );
    lenisRef.current = lenis;
    // Connect Lenis scroll events to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lenisRef = useRef(null);

  // Detect scroll to toggle back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const show = scrollY > document.body.scrollHeight * 0.2;
      setShowBackToTop(show);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <Navbar theme="light" />
      <Home />
      <Footer theme="light" />
    {showBackToTop && (
        <BackToTop lenisRef={lenisRef} />
      )}
    </>
  )
}

export default App