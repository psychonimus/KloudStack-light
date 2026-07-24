import React, { useState, useRef, useEffect } from 'react';
import './OurServicesLight.css';

const servicesData = [
  {
    id: '01',
    badge: 'Enterprise Security',
    image: '/images/cyber-security-light.png',
    title: 'Cybersecurity & ZTNA',
    description:
      'Pervasive End-to-End Security, Zero Trust Network Access, WAAP, Extended Detection & Response (XDR), and global compliance frameworks.',
  },
  {
    id: '02',
    badge: 'Cloud Engineering',
    image: '/images/cloud-light.png',
    title: 'Cloud & Hybrid Foundations',
    description:
      'Seamless workload migration, infrastructure modernization, high-availability enterprise networking, and cost-optimized delivery.',
  },
  {
    id: '03',
    badge: 'App Development',
    image: '/images/modular-light.png',
    title: 'Modular Open-Source Stack',
    description:
      'Accelerating modern app engineering via scalable microservices frameworks, IaC automated testing, and containerized deployment.',
  },
  {
    id: '04',
    badge: '24/7 Operations',
    image: '/images/operational_continuity-light.png',
    title: 'Operational Continuity',
    description:
      'Next-generation SOC & NOC intelligence centers ensuring zero-downtime resilience and complete product lifecycle management.',
  },
  {
    id: '05',
    badge: 'AI Solutions',
    image: '/images/ai-and-security-light.png',
    title: 'AI & Security Intelligence',
    description:
      'End-to-end artificial intelligence strategies, predictive threat intelligence, automated compliance, and intelligent SOC augmentation.',
  },
];

const OurServicesLight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const viewportRef = useRef(null);

  // Update visible items count based on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, servicesData.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Calculate translation percentage or pixel displacement
  // Card width is (100% - gap*(visible-1)) / visible, plus 24px gap
  const stepPercent = 100 / itemsPerPage;
  // Account for gap of 24px
  const translateX = `calc(-${currentIndex * stepPercent}% - ${currentIndex * (24 / itemsPerPage)}px)`;

  return (
    <section className="os-light-section pt-5" aria-label="Our Core Services">
      <div className="os-light-container">

        {/* ── Header ── */}
        <div className="os-light-header" data-reveal-group>
          <div className="os-light-header-left">
            <p className="os-light-eyebrow gsap-reveal-eyebrow">Services Portfolio</p>
            <h2 className="os-light-title gsap-reveal-title">
              Engineered for Enterprise.{' '}
              <span className="os-light-title-accent">Built for Scale.</span>
            </h2>
            <p className="os-light-subtitle gsap-reveal-text">
              Comprehensive digital infrastructure and security capabilities designed to power high-growth enterprises with uncompromised performance.
            </p>
          </div>

          <div className="os-light-header-right">
            <button
              className="os-light-nav-btn"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous service slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className="os-light-nav-btn"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next service slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Carousel Viewport ── */}
        <div className="os-light-viewport" ref={viewportRef}>
          <div
            className="os-light-track"
            style={{ transform: `translateX(${translateX})` }}
          >
            {servicesData.map((svc) => (
              <div className="os-light-card" key={svc.id}>
                <div className="os-light-card-img-wrap">
                  <img src={svc.image} alt={svc.title} className="os-light-card-img" />
                  <span className="os-light-card-badge">{svc.badge}</span>
                </div>
                <div className="os-light-card-body">
                  <h3 className="os-light-card-title">{svc.title}</h3>
                  <p className="os-light-card-desc">{svc.description}</p>
                  <div className="os-light-card-footer">
                    <span>Learn more</span>
                    <span className="os-light-card-arrow">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Bar: Indicators & CTA ── */}
        <div className="os-light-bottom-bar">
          <div className="os-light-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                className={`os-light-dot${currentIndex === idx ? ' active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* <a href="#services" className="os-light-all-cta">
            <span>Explore All Capabilities</span>
            <span className="cta-arrow">→</span>
          </a> */}
        </div>

      </div>
    </section>
  );
};

export default OurServicesLight;
