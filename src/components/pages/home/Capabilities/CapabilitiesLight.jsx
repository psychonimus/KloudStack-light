import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CapabilitiesLight.css';

gsap.registerPlugin(ScrollTrigger);

/* SVG Partner Logos for bottom row matching image style */
const LogoZenZap = () => (
  <span className="cap-light-logo-item">
    <svg className="cap-light-logo-icon" viewBox="0 0 24 24">
      <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
    </svg>
    ZenZap
  </span>
);

const LogoLaunchlane = () => (
  <span className="cap-light-logo-item">
    <svg className="cap-light-logo-icon" viewBox="0 0 24 24">
      <path d="M4 4H20V8H8V16H20V20H4V4Z" />
    </svg>
    LAUNCHLANE
  </span>
);

const LogoLumLabs = () => (
  <span className="cap-light-logo-item">
    <svg className="cap-light-logo-icon" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
    </svg>
    Lum Labs
  </span>
);

const LogoTechtide = () => (
  <span className="cap-light-logo-item">
    <svg className="cap-light-logo-icon" viewBox="0 0 24 24">
      <path d="M12 3L2 12L12 21L22 12L12 3Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
    techtide
  </span>
);

const LogoInnovio = () => (
  <span className="cap-light-logo-item">
    <svg className="cap-light-logo-icon" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
    innovio
  </span>
);

const CapabilitiesLight = () => {
  const statsGridRef = useRef(null);

  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  ];

  const stats = [
    { value: '100+', label: 'Years Combined Engineering Expertise' },
    { value: '50K+', label: 'Global Users Managed' },
    { value: '100%', label: 'Bespoke Solutions Architecture' },
    { value: '21', label: 'Certified Resources' },
  ];

  useEffect(() => {
    const grid = statsGridRef.current;
    if (!grid) return;

    const statElements = grid.querySelectorAll('.cap-light-stat-value');

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: grid,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      tl.from('.cap-light-stat-item', {
        opacity: 0,
        y: 35,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
      });

      statElements.forEach((el) => {
        const targetStr = el.getAttribute('data-target') || el.innerText;
        const targetNum = parseInt(targetStr.replace(/[^0-9]/g, ''), 10) || 0;
        const suffix = targetStr.replace(/[0-9]/g, '');

        const counterObj = { val: 0 };

        tl.to(
          counterObj,
          {
            val: targetNum,
            duration: 2.2,
            ease: 'power2.out',
            onUpdate: () => {
              el.innerText = `${Math.floor(counterObj.val)}${suffix}`;
            },
          },
          0
        );
      });
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cap-light-section" aria-label="Capabilities and Trust">
      <div className="cap-light-container">

        {/* ── Main 2-Column Content ── */}
        <div className="cap-light-main">

          {/* Left Block */}
          <div className="cap-light-left" data-reveal-group>
            {/* <p className="cap-light-eyebrow gsap-reveal-eyebrow">
              Valuable Customers
              <span className="cap-light-eyebrow-star">✳</span>
              KloudStack
            </p> */}

            <h2 className="cap-light-title gsap-reveal-title">
              Capabilities & <br />
              {' '}
              <span className="cap-light-title-accent">
                Alliance Ecosystem
              </span>
            </h2>
            <p className="gsap-reveal-text">KloudStack's engineering depth and vendor-agnostic alliance ecosystem deliver unmatched execution flexibility. Our certified resources span every major platform, enabling organizations to operate in the environment that best serves their strategic and operational requirements, without lock-in.</p>

            <div className="cap-light-rating-block mt-3">
              <div className="cap-light-avatars">
                {avatars.map((url, i) => (
                  <img key={i} src={url} alt="Customer avatar" className="cap-light-avatar" />
                ))}
              </div>
              <div className="cap-light-rating-info">
                <div className="cap-light-rating-score-row">
                  <span className="cap-light-rating-score">4.8</span>
                  <div className="cap-light-stars">
                    ★★★★★
                  </div>
                </div>
                <p className="cap-light-rating-text">Customer Rating of KloudStack</p>
              </div>
            </div>
          </div>

          {/* Right Block: 2x2 Stats Grid */}
          <div className="cap-light-stats-grid" ref={statsGridRef}>
            {stats.map((stat, i) => (
              <div key={i} className="cap-light-stat-item">
                <div className="cap-light-stat-value" data-target={stat.value}>
                  {stat.value}
                </div>
                <p className="cap-light-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>

        {/* ── Bottom Section: Dotted Line & Logos ── */}
        {/* <div className="cap-light-bottom">
          <div className="cap-light-logos-row">
            <LogoZenZap />
            <LogoLaunchlane />
            <LogoLumLabs />
            <LogoTechtide />
            <LogoInnovio />
            <LogoZenZap />
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default CapabilitiesLight;
