import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "./InteractiveLinks.css";

const INTERACTIVE_LINKS = [
  {
    heading: "Cybersecurity & ZTNA",
    subheading: "Pervasive End-to-End Security, Zero Trust Network Access, WAAP, Extended Detection & Response (XDR), and global compliance frameworks.",
    imgSrc: "/images/cyber-security-light.png",
    href: "#",
  },
  {
    heading: "Cloud & Hybrid Foundations",
    subheading: "Seamless workload migration, infrastructure modernization, high-availability enterprise networking, and cost-optimized delivery.",
    imgSrc: "/images/cloud-light.png",
    href: "#",
  },
  {
    heading: "Modular Open-Source Stack",
    subheading: "Accelerating modern app engineering via scalable microservices frameworks, IaC automated testing, and containerized deployment.",
    imgSrc: "/images/modular-light.png",
    href: "#",
  },
  {
    heading: "Operational Continuity",
    subheading: "Next-generation SOC & NOC intelligence centers ensuring zero-downtime resilience and complete product lifecycle management.",
    imgSrc: "/images/operational_continuity-light.png",
    href: "#",
  },
  {
    heading: "AI & Security Intelligence",
    subheading: "End-to-end artificial intelligence strategies, predictive threat intelligence, automated compliance, and intelligent SOC augmentation.",
    imgSrc: "./images/ai-and-security-light.png",
    href: "#",
  },
];

function HoverLink({ heading, imgSrc, subheading, href }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "40%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      initial="initial"
      whileHover="whileHover"
      className="il-link"
    >
      {/* Heading + subheading */}
      <div className="container il-text">
        <motion.span
          className="il-heading"
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{ type: "spring", staggerChildren: 0.075, delayChildren: 0.25 }}
        >
          {heading.split("").map((l, i) => (
            <motion.span
              key={i}
              className="il-letter"
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </motion.span>
        <span className="il-subheading">{subheading}</span>
      </div>

      {/* Floating image */}
      {/* <motion.img
        style={{ top, left, translateX: "50%", translateY: "-50%" }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        alt={`Image representing ${heading}`}
        className="il-img"
      /> */}

      {/* Arrow icon */}
      <div className="il-arrow-wrapper">
        <motion.div
          className="il-arrow"
          variants={{
            initial: { x: "100%", opacity: 0 },
            whileHover: { x: "0%", opacity: 1 },
          }}
          transition={{ type: "spring" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="il-arrow-icon"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.a>
  );
}

export default function InteractiveLinks() {
  return (
    <section className="il-section">
      <div className="container mb-4" data-reveal-group>
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
      </div>
      <div className="il-container">
        {INTERACTIVE_LINKS.map((link) => (
          <HoverLink key={link.heading} {...link} />
        ))}
      </div>
    </section>
  );
}
