import React, { useState, useEffect, useRef, useCallback } from 'react';
import './TestimonialsLight.css';

const testimonials = [
  {
    id: 1,
    category: 'EXCEPTIONAL CLOUD INFRASTRUCTURE',
    quote: '“Working with Kloudstack Computes was a smooth experience from start to finish. They really took the time to understand our needs and made sure everything was secure and compliant.”',
    name: 'Mr. Sudarshan Pillai',
    title: 'VP IT, LIC Mutual Fund',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 2,
    category: 'TRUSTED HYBRID CLOUD PARTNER',
    quote: '“We consider Kloudstack Computes as an extension of our own team. Their work with Azure, AWS, and OpenShift has been consistently excellent.”',
    name: 'Mr. Senthil',
    title: 'Chairman & MD, Savic Technologies',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 3,
    category: 'ZERO-DOWNTIME RESILIENCE',
    quote: '“The project went off without a hitch... always keeping things running smoothly across our entire digital infrastructure estate.”',
    name: 'Mr. Anjan Deb',
    title: 'IT Head, Seven Islands Shipping Ltd',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 4,
    category: 'SEAMLESS ENTERPRISE MIGRATION',
    quote: '“When Kloudstack Computes set up Active Directory, Azure, and M365 for us, they made what could have been a complicated process feel straightforward.”',
    name: 'Mr. Vishal Sinha',
    title: 'Bajel Projects Limited',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
  },
];

const DIRECTIONS = { NEXT: 'next', PREV: 'prev' };
const AUTO_INTERVAL = 5000;

const TestimonialsLight = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(DIRECTIONS.NEXT);
  const [isPaused, setIsPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);
  const total = testimonials.length;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const navigate = useCallback(
    (dir) => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) =>
          dir === DIRECTIONS.NEXT
            ? (prev + 1) % total
            : (prev - 1 + total) % total
        );
        setAnimating(false);
      }, 450);
    },
    [animating, total]
  );

  const goNext = useCallback(() => navigate(DIRECTIONS.NEXT), [navigate]);
  const goPrev = useCallback(() => navigate(DIRECTIONS.PREV), [navigate]);

  useEffect(() => {
    if (isPaused || !inView) return;
    timerRef.current = setInterval(goNext, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [isPaused, inView, goNext]);

  const t = testimonials[current];

  // Dynamic animation class based on direction
  const slideClass = animating
    ? direction === DIRECTIONS.NEXT
      ? 'tv-light-slide--exit-left'
      : 'tv-light-slide--exit-right'
    : direction === DIRECTIONS.NEXT
      ? 'tv-light-slide--enter-next'
      : 'tv-light-slide--enter-prev';

  return (
    <section
      className={`tv-light-section ${inView ? 'tv-light-section--visible' : ''}`}
      ref={sectionRef}
      aria-label="Client Validations"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="tv-light-inner">
        
        {/* Stage Wrapper with Navigation Buttons */}
        <div className="tv-light-stage-wrap">
          {/* Previous Button */}
          <button
            className="tv-light-nav-btn tv-light-nav-prev"
            onClick={goPrev}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <polyline points="15 18 9 12 15 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Stage Slider */}
          <div className="tv-light-stage" aria-live="polite">
            <div className={`tv-light-slide ${slideClass}`} key={current} data-reveal-group>
              
              {/* Top Category Eyebrow */}
              <p className="tv-light-eyebrow gsap-reveal-eyebrow">
                {t.category}
              </p>

              {/* Large Quote Headline */}
              <h2 className="tv-light-quote gsap-reveal-title">
                {t.quote}
              </h2>

              {/* Author Block */}
              <div className="tv-light-author-block">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="tv-light-avatar"
                />
                <div className="tv-light-author-info">
                  <p className="tv-light-author-name">{t.name}</p>
                  <p className="tv-light-author-title">{t.title}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Next Button */}
          <button
            className="tv-light-nav-btn tv-light-nav-next"
            onClick={goNext}
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <polyline points="9 18 15 12 9 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="tv-light-controls">
          <div className="tv-light-dots" role="tablist" aria-label="Testimonials pagination">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`tv-light-dot ${i === current ? 'tv-light-dot--active' : ''}`}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => {
                  if (animating || i === current) return;
                  setDirection(i > current ? DIRECTIONS.NEXT : DIRECTIONS.PREV);
                  setAnimating(true);
                  setTimeout(() => {
                    setCurrent(i);
                    setAnimating(false);
                  }, 450);
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsLight;
