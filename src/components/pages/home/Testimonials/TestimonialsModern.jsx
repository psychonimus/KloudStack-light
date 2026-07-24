import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import './TestimonialsModern.css';

const testimonials = [
  {
    quote: "Working with Kloudstack Computes... was a smooth experience from start to finish. They really took the time to understand our needs and made sure everything was secure and compliant..",
    author: "Mr. Sudarshan Pillai",
    role: "VP IT",
    company: "LIC Mutual Fund",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote: "We consider Kloudstack Computes as an extension of our own team. Their work with Azure, AWS, and OpenShift has been consistently excellent.",
    author: "Mr. Senthil",
    role: "Chairman & MD",
    company: "Savic Technologies",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote: "The project went off without a hitch... always keeping things running smoothly.",
    author: "Mr. Anjan Deb",
    role: "IT Head",
    company: "Seven Islands Shipping Ltd",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote: "When Kloudstack Computes set up Active Directory, Azure, and M365 for us, they made what could have been a complicated process feel straightforward.",
    author: "Mr. Vishal Sinha",
    role: "",
    company: "Bajel Projects Limited",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
  },
];

function usePreloadImages(images) {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);
}

function SplitText({ text }) {
  const words = text.split(" ");

  return (
    <span className="tm-split-text-wrap">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="tm-word"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  usePreloadImages(testimonials.map((t) => t.avatar));

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  // Auto-advance every 10 seconds, pause on hover
  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(handleNext, 5000);
  }, [handleNext]);

  useEffect(() => {
    if (!isHovered) {
      startTimer();
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isHovered, startTimer]);

  const handleManualNext = useCallback(() => {
    handleNext();
    startTimer(); // Reset the 10s timer on manual click
  }, [handleNext, startTimer]);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="tm-section">

      <div className="container mb-4" data-reveal-group>
        <div className="os-light-header-left">
          <p className="os-light-eyebrow gsap-reveal-eyebrow">Our Client Stories</p>
          <h2 className="os-light-title gsap-reveal-title">
            Client{' '}
            <span className="os-light-title-accent">Testimonials</span>
          </h2>
          <p className="os-light-subtitle gsap-reveal-text">
            Senior IT leaders across financial services, manufacturing, logistics, and technology trust KloudStack to deliver strategic outcomes with operational excellence.
          </p>
        </div>
      </div>

      <div
        ref={containerRef}
        className="container tm-container"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleManualNext}
      >
        {/* Custom magnetic cursor */}
        <motion.div
          className="tm-cursor-wrapper"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <motion.div
            className="tm-cursor-bubble"
            animate={{
              width: isHovered ? 50 : 0,
              height: isHovered ? 50 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
          >
            <motion.span
              className="tm-cursor-text"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
            >
              Next
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Floating index indicator */}
        <motion.div
          className="tm-index-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            className="tm-index-active"
            key={activeIndex}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </motion.span>
          <span className="tm-index-divider">/</span>
          <span className="tm-index-total">{String(testimonials.length).padStart(2, "0")}</span>
        </motion.div>

        {/* Stacked avatar previews for other testimonials */}
        <motion.div
          className="tm-avatar-stack"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.6 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={`tm-avatar-mini-wrap ${i === activeIndex ? "tm-avatar-mini--active" : "tm-avatar-mini--idle"}`}
              whileHover={{ scale: 1.1, opacity: 1 }}
            >
              <img src={t.avatar || "/placeholder.svg"} alt={t.author} className="tm-avatar-mini" />
            </motion.div>
          ))}
        </motion.div>

        {/* Main content */}
        <div className="tm-content">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="tm-quote"
            >
              <SplitText text={currentTestimonial.quote} />
            </motion.blockquote>
          </AnimatePresence>

          {/* Author with reveal line */}
          <motion.div className="tm-author-wrapper" layout>
            <div className="tm-author-inner">
              {/* Avatar container with all images stacked */}
              <div className="tm-avatar-main-container">
                <motion.div
                  className="tm-avatar-ring"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                {testimonials.map((t, i) => (
                  <motion.img
                    key={t.avatar}
                    src={t.avatar}
                    alt={t.author}
                    className="tm-avatar-main-img"
                    animate={{
                      opacity: i === activeIndex ? 1 : 0,
                      zIndex: i === activeIndex ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                ))}
              </div>

              {/* Author info with accent line */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="tm-author-details"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="tm-accent-line"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originY: 0 }}
                  />
                  <span className="tm-author-name">
                    {currentTestimonial.author}
                  </span>
                  <span className="tm-author-meta">
                    {currentTestimonial.role} — {currentTestimonial.company}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="tm-progress-track">
            <motion.div
              className="tm-progress-bar"
              initial={{ width: "0%" }}
              animate={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        {/* Keyboard / Click hint */}
        {/* <motion.div
          className="tm-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.6 : 0.35 }}
          transition={{ duration: 0.3 }}
        >
          <span className="tm-hint-text">Click anywhere to next</span>
        </motion.div> */}
      </div>
    </section>
  );
}

export default Testimonial;
