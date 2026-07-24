import React, { useRef, useEffect, useState, useCallback } from 'react';
import './OurServices.css';

const services = [
  {
    id: 1,
    image: '/images/cyber-security.png',
    title: 'Cybersecurity',
    description:
      'Pervasive End-to-End Security, Zero Trust Network Access (ZTNA), Vulnerability & Compliance Management, Web Application & API Protection (WAAP), Extended Detection & Response (XDR), and DPDPA, GDPR & HIPAA Compliance.',
  },
  {
    id: 2,
    image: '/images/cloud-2.png',
    title: 'Cloud & Hybrid Foundations',
    description:
      'Includes Cloud Migration (Assessment & Planning), Workload Migration, Infrastructure Modernization (Replatforming, Server & Storage Optimisation), Enterprise Networking, and Secure Application Delivery.',
  },
  {
    id: 3,
    image: '/images/modular.png',
    title: 'Modular Open-Source Stack',
    description:
      'Accelerating development via Build (Scalable App Frameworks, CI/CD, microservices), Test (Infrastructure as Code / IaC), and Deploy (Advanced Containerisation).',
  },
  {
    id: 4,
    image: '/images/operational_continuity-2.png',
    title: 'Operational Continuity',
    description:
      'Security Operations Centre (SOC), Network Operations Centre (NOC), and Complete Product Lifecycle Management.',
  },
  {
    id: 5,
    image: '/images/ai-and-security.png',
    title: 'AI & Security Intelligence',
    description:
      'End-to-end AI strategy, threat intelligence, zero-trust architecture, compliance automation, and intelligent SOC augmentation.',
  },
];

const GAP = 1; // px — the 1px divider gap between cards
const VISIBLE = 3;

// Extend to 3× so infinite loop never shows a blank
const extendedServices = [...services, ...services, ...services];

const OurServices = () => {
  const viewportRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const totalCards = services.length;

  // Measure card width from the live col-9 viewport width
  const measureCard = useCallback(() => {
    if (!viewportRef.current) return;
    const vw = viewportRef.current.offsetWidth;
    // 3 cards + 2 gaps visible at once
    setCardWidth((vw - GAP * (VISIBLE - 1)) / VISIBLE);
  }, []);

  useEffect(() => {
    measureCard();
    const ro = new ResizeObserver(measureCard);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, [measureCard]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
    }, 3500);
    return () => clearInterval(id);
  }, [isPaused, totalCards]);

  const translateX = cardWidth > 0 ? -(currentIndex * (cardWidth + GAP)) : 0;

  return (
    <section className="os-section">
      <div className="container-fluid os-container-fluid">
        <div className="row align-items-center g-0">

          {/* ── col-3 : Static heading block ── */}
          <div className="col-3">
            <div className="os-left">
              <p className="os-eyebrow">What We Do</p>
              <h2 className="os-headline section-heading text-start">
                CORE<br />
                TECHNOLOGY<br />
                OFFERINGS
              </h2>
              <p className="os-body">
                Beyond our strategic AI and Security imperatives, our holistic
                infrastructure practices ensure secure, highly available, and
                scalable operations across your entire digital estate.
              </p>
              <a href="#services" className="os-cta-btn">
                Explore All Services
              </a>
            </div>
          </div>

          {/* ── col-9 : Infinite carousel ── */}
          <div
            className="col-9"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="os-carousel-wrapper">
              {/* Carousel viewport — clips overflow */}
              <div className="os-carousel-viewport" ref={viewportRef}>
                <div
                  className="os-track"
                  style={{
                    transform: `translateX(${translateX}px)`,
                  }}
                >
                  {extendedServices.map((svc, idx) => (
                    <div
                      className="os-card"
                      key={`${svc.id}-${idx}`}
                      style={{ width: cardWidth > 0 ? `${cardWidth}px` : undefined }}
                    >
                      <div className="os-card-image-wrap">
                        <img
                          src={svc.image}
                          alt={svc.title}
                          className="os-card-img"
                        />
                        {/* <video className="os-card-img" playsInline muted loop autoPlay>
                          <source src={svc.image} type="video/mp4" />
                        </video> */}
                        </div>
                          <div className="os-card-body">
                            <h3 className="os-card-title">{svc.title}</h3>
                            <p className="os-card-desc">{svc.description}</p>
                          </div>
                          {/* 1px vertical divider rendered as right border */}
                          <div className="os-card-divider" />
                      </div>
                  ))}
                    </div>
              </div>

                {/* Nav buttons sit below the viewport, left & right */}
                <div className="os-nav-row">
                  <button
                    className="os-nav-btn"
                    onClick={handlePrev}
                    aria-label="Previous service"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    className="os-nav-btn"
                    onClick={handleNext}
                    aria-label="Next service"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
    </section>
  );
};

export default OurServices;
