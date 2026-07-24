import React, { useRef, useEffect, useState } from 'react'
import './WhyKloudStack.css'

const features = [
    {
        id: 'managed-services',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Person silhouette with circular arrows — 24*7 Managed Services */}
                <circle cx="32" cy="16" r="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 52c0-11.046 8.954-20 20-20s20 8.954 20 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                {/* Refresh arrows around the figure */}
                <path d="M6 32 C6 20 18 10 32 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" markerEnd="url(#arrow)" />
                <path d="M58 32 C58 44 46 54 32 54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <polyline points="4,28 6,32 10,30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="60,36 58,32 54,34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: '24*7 Managed\nServices',
        description: 'Develop unique, innovative solutions that foster differentiation.',
    },
    {
        id: 'ai-infrastructure',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Sparkle / AI stars */}
                <path d="M32 8 L34 22 L48 24 L34 26 L32 40 L30 26 L16 24 L30 22 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
                <path d="M50 10 L51 16 L57 17 L51 18 L50 24 L49 18 L43 17 L49 16 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
                <path d="M14 44 L15 48 L19 49 L15 50 L14 54 L13 50 L9 49 L13 48 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
            </svg>
        ),
        title: 'AI Driven\nInfrastructure',
        description: 'Develop unique, innovative solutions that foster differentiation.',
    },
    {
        id: 'zero-trust',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Shield with lock */}
                <path d="M32 6 L54 16 L54 34 C54 46 44 56 32 60 C20 56 10 46 10 34 L10 16 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="32" cy="30" r="5" stroke="currentColor" strokeWidth="2.2" />
                <path d="M28 30 L28 38 L36 38 L36 30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                {/* Circular orbit ring */}
                <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.5" />
                <circle cx="50" cy="32" r="3" fill="currentColor" opacity="0.7" />
            </svg>
        ),
        title: 'Zero Trust\nSecurity',
        description: 'Develop unique, innovative solutions that foster differentiation.',
    },
    {
        id: 'multicloud',
        icon: (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Multi-cloud with data nodes */}
                <path d="M20 36 C14 36 8 31 8 24 C8 17 14 12 20 12 C21 8 26 4 32 4 C38 4 44 8 46 14 C50 14 56 18 56 24 C56 30 51 36 46 36 Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="20" cy="50" r="5" stroke="currentColor" strokeWidth="2" />
                <circle cx="44" cy="50" r="5" stroke="currentColor" strokeWidth="2" />
                <circle cx="32" cy="56" r="5" stroke="currentColor" strokeWidth="2" />
                <line x1="20" y1="36" x2="20" y2="45" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="44" y1="36" x2="44" y2="45" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="32" y1="36" x2="32" y2="51" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="20" y1="50" x2="32" y2="56" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
                <line x1="44" y1="50" x2="32" y2="56" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
            </svg>
        ),
        title: 'Multicloud\nArchitecture',
        description: 'Develop unique, innovative solutions that foster differentiation.',
    },
]

const WhyKloudStack = () => {
    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.15 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="wk-section" ref={sectionRef} aria-label="Why KloudStack">
            <div className="wk-inner">

                {/* ── Left: heading + logo ── */}
                <div className={`wk-left ${visible ? 'wk-fade-in' : ''}`}>
                    <h2 className='section-heading text-start mt-5'>Why Kloudstack</h2>
                    <div className="wk-logo-wrap">
                        <video className="wk-logo" playsInline loop muted autoPlay>
                            <source src="/videos/ks-logo-animation-2.mp4" type="video/mp4" />
                        </video>
                        {/* Subtle glow behind the logo */}
                        <div className="wk-logo-glow" aria-hidden="true" />
                    </div>
                </div>

                {/* ── Right: 2×2 feature grid ── */}
                <div className="wk-grid" role="list">
                    {features.map((feat, i) => {
                        const lines = feat.title.split('\n')
                        return (
                            <article
                                key={feat.id}
                                className={`wk-card ${visible ? 'wk-card--visible' : ''}`}
                                style={{ transitionDelay: `${i * 80}ms` }}
                                role="listitem"
                            >
                                <div className="wk-card-icon" aria-hidden="true">
                                    {feat.icon}
                                    <div className="wk-icon-glow" />
                                </div>
                                <h3 className="wk-card-title">
                                    {lines.map((line, j) => (
                                        <React.Fragment key={j}>
                                            {line}
                                            {j < lines.length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </h3>
                                <p className="wk-card-desc">{feat.description}</p>

                                {/* Gold corner accent on hover */}
                                <span className="wk-card-corner" aria-hidden="true" />
                            </article>
                        )
                    })}
                </div>

            </div>

            {/* Bottom divider */}
            <div className="wk-divider" aria-hidden="true" />
        </section>
    )
}

export default WhyKloudStack
