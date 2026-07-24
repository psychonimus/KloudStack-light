import React from 'react'
import './WhyKloudstackLight.css'

/* ── Inline SVG icons — thin geometric wireframe style ── */

const IconCloud = () => (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stylised Z / sigma shape made of geometric segments */}
        <polyline
            points="8,14 44,14 20,26 44,38 8,38"
            stroke="#aaa"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
        <line x1="8" y1="14" x2="8" y2="38" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
)

const IconApp = () => (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Three-loop / trefoil knot shape */}
        <path
            d="M26 10
               C32 10 38 15 36 22
               C40 20 46 24 44 30
               C42 36 35 38 30 34
               C32 40 28 46 22 44
               C16 42 14 35 18 30
               C12 32 6 28 8 22
               C10 16 18 12 24 16
               C22 10 26 10 26 10Z"
            stroke="#aaa"
            strokeWidth="1.8"
            strokeLinejoin="round"
            fill="none"
        />
        <path
            d="M26 18 C30 18 34 21 32 26 C36 24 40 27 38 32 C36 37 30 38 26 34 C22 38 16 37 14 32 C12 27 16 24 20 26 C18 21 22 18 26 18Z"
            stroke="#aaa"
            strokeWidth="1.4"
            fill="none"
            opacity="0.5"
        />
    </svg>
)

const IconUX = () => (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Concentric ring — circle within circle */}
        <circle cx="26" cy="26" r="18" stroke="#aaa" strokeWidth="1.8" />
        <circle cx="26" cy="26" r="10" stroke="#aaa" strokeWidth="1.8" />
        <circle cx="26" cy="26" r="3"  stroke="#aaa" strokeWidth="1.4" />
        {/* Cross-hairs */}
        <line x1="26" y1="6"  x2="26" y2="14" stroke="#aaa" strokeWidth="1.4" />
        <line x1="26" y1="38" x2="26" y2="46" stroke="#aaa" strokeWidth="1.4" />
        <line x1="6"  y1="26" x2="14" y2="26" stroke="#aaa" strokeWidth="1.4" />
        <line x1="38" y1="26" x2="46" y2="26" stroke="#aaa" strokeWidth="1.4" />
    </svg>
)

const IconStrategy = () => (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Penrose-style impossible triangle outline */}
        <polygon
            points="26,8 46,42 6,42"
            stroke="#aaa"
            strokeWidth="1.8"
            strokeLinejoin="round"
            fill="none"
        />
        <polygon
            points="26,18 38,38 14,38"
            stroke="#aaa"
            strokeWidth="1.4"
            strokeLinejoin="round"
            fill="none"
            opacity="0.55"
        />
    </svg>
)

/* ── Arrow icon for the button ── */
const ArrowIcon = () => (
    <svg viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 11 L11 2 M11 2 H5 M11 2 V8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
)

/* ── Data ── */
const services = [
    {
        icon: <IconCloud />,
        title: '24*7 Managed Services',
        desc: 'Develop unique, innovative solutions that foster differentiation.',
    },
    {
        icon: <IconApp />,
        title: 'AI Driven Infrastructure',
        desc: 'Develop unique, innovative solutions that foster differentiation.',
    },
    {
        icon: <IconUX />,
        title: 'Zero Trust Security',
        desc: 'Develop unique, innovative solutions that foster differentiation.',
    },
    {
        icon: <IconStrategy />,
        title: 'Multicloud Architecture',
        desc: 'Develop unique, innovative solutions that foster differentiation.',
    },
]

/* ── Component ── */
const WhyKloudstackLight = () => {
    return (
        <section className="wks-light-section" aria-label="Core Services">

            {/* Header */}
            <div className="wks-light-header" data-reveal-group>
                <div className="wks-light-header-left">
                    {/* <p className="wks-light-label gsap-reveal-eyebrow">
                        Why Kloudstack
                    </p> */}
                    <h2 className="wks-light-heading gsap-reveal-title">
                        Why
                        <span className="wks-light-heading-accent">
                            KloudStack<span className="wks-light-heading-arrow">▸</span>
                        </span>
                    </h2>
                </div>
                <p className="wks-light-header-desc gsap-reveal-text">
                    Our skilled solutions, from strategy to execution, are made to boost
                    performance, spur growth, quantifiable value.
                </p>
            </div>

            {/* Cards */}
            <div className="wks-light-cards">
                {services.map((svc, i) => (
                    <div key={i} className="wks-light-card">
                        <div className="wks-light-icon">{svc.icon}</div>
                        <h3 className="wks-light-card-title">{svc.title}</h3>
                        <p className="wks-light-card-desc">{svc.desc}</p>
                        <button className="wks-light-arrow-btn" aria-label={`Learn more about ${svc.title}`}>
                            <ArrowIcon />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyKloudstackLight
