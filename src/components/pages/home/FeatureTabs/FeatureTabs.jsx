import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FeatureTabs.css";

const TABS = [
  {
    id: "smart-response",
    label: "Pulse",
    heading: "AI-Powered Continuous Monitoring",
    description:
      "Pulse provides ongoing detection, anomaly tracking, and intelligent alerting.",
    img: "/images/tab1.png",
  },
  {
    id: "automation",
    label: "Fortress",
    heading: "Enterprise Cyber Risk Platform",
    description:
      "Fortress quantifies cyber threats, predicts potential attacks, and provides clear financial impact analysis, while supporting alignment with key cybersecurity and regulatory frameworks including SEBI CSF and DPDPA.",
    img: "/images/tab2.png",
  },
  {
    id: "security",
    label: "Compass",
    heading: "Cyber Risk Insights for Insurers & Brokers",
    description:
      "Compass transforms technical data into underwriting-ready intelligence.",
    img: "/images/tab3.png",
  },
  {
    id: "cloud",
    label: "Accord",
    heading: "AI Governance, Compliance & Insurability",
    description:
      "Accord simplifies responsible AI deployment and regulatory alignment.",
    img: "/images/tab4.png",
  },
];

const contentVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const imageVariants = {
  enter: {
    scale: 0.97,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.05 },
  },
  exit: {
    scale: 0.97,
    opacity: 0,
    transition: { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function FeatureTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleTabChange = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const activeTab = TABS[activeIndex];

  return (
    <section className="ft-section">
      <div className="container mb-4" data-reveal-group>
        <div className="os-light-header-left">
            <p className="os-light-eyebrow gsap-reveal-eyebrow">Our Productline</p>
            <h2 className="os-light-title gsap-reveal-title">
              Cyber risk solutions for every stage of your{' '}
              <span className="os-light-title-accent">security journey</span>
            </h2>
            {/* <p className="os-light-subtitle gsap-reveal-text">
              Our skilled solutions, from strategy to execution, are made to boost performance, spur growth, quantifiable value.
            </p> */}
          </div>
          
      </div>

      <div className="container ft-wrapper">
        {/* ── Tab Bar ── */}
        <div className="ft-tabbar" role="tablist">
          {TABS.map((tab, i) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={i === activeIndex}
              className={`ft-tab ${i === activeIndex ? "ft-tab--active" : ""}`}
              onClick={() => handleTabChange(i)}
            >
              {i === activeIndex && (
                <motion.span
                  className="ft-tab-bg"
                  layoutId="ft-active-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="ft-tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* ── Content Panel ── */}
        <div className="ft-panel">
          {/* Left: text */}
          <div className="ft-panel-left">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeTab.id}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="ft-content"
              >
                <h3 className="ft-heading">{activeTab.heading}</h3>
                <p className="ft-description">{activeTab.description}</p>
                <motion.a
                  href="#"
                  className="ft-cta"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  See Full Feature
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ft-cta-icon"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8l4 4-4 4M8 12h8" />
                  </svg>
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: image */}
          <div className="ft-panel-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id + "-img"}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="ft-img-wrapper"
              >
                <img
                  src={activeTab.img}
                  alt={activeTab.heading}
                  className="ft-img"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Progress dots ── */}
        <div className="ft-dots">
          {TABS.map((_, i) => (
            <button
              key={i}
              className={`ft-dot ${i === activeIndex ? "ft-dot--active" : ""}`}
              onClick={() => handleTabChange(i)}
              aria-label={`Go to tab ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
