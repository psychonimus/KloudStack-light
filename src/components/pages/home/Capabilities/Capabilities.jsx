import React, { useEffect, useRef, useState } from 'react'
import './Capabilities.css'
import Counter from '../../../Counter/Counter'

const stats = [
    {
        value: 100,
        places: [100, 10, 1],
        suffix: '+',
        label: 'Years Combined\nEngineering Expertise',
    },
    {
        value: 50,
        places: [10, 1],
        suffix: 'K+',
        label: 'Global Users\nManaged',
    },
    {
        value: 100,
        places: [100, 10, 1],
        suffix: '%',
        label: 'Bespoke Solutions\nArchitecture',
    },
    {
        value: 21,
        places: [10, 1],
        suffix: '',
        label: 'Certified Resources Red Hat,\nAzure, AWS, ITIL, SUSE, Linux',
    },
]

function StatCard({ value, places, suffix, label, started }) {
    const displayValue = started ? value : 0
    const lines = label.split('\n')

    return (
        <div className="cap-stat">
            <div className="cap-stat-number">
                <Counter
                    value={displayValue}
                    places={places}
                    fontSize={58}
                    padding={24}
                    gap={0}
                    horizontalPadding={0}
                    borderRadius={0}
                    textColor="#ffffff"
                    fontWeight={500}
                    gradientFrom="#0a0a0a"
                    gradientHeight={12}
                    counterStyle={{ fontFamily: "'Plus Jakarta Sans', 'DM Sans', sans-serif", letterSpacing: '-0.03em' }}
                />
                <span className="cap-stat-suffix">{suffix}</span>
            </div>
            <p className="cap-stat-label">
                {lines.map((line, i) => (
                    <React.Fragment key={i}>
                        {line}
                        {i < lines.length - 1 && <br />}
                    </React.Fragment>
                ))}
            </p>
        </div>
    )
}

const Capabilities = () => {
    const sectionRef = useRef(null)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.25 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="cap-section" ref={sectionRef} aria-label="Capabilities and Alliance Ecosystem">
            <div className="cap-inner">
                {/* Left — heading + description */}
                <div className="cap-left">
                    <h2 className="section-heading text-start cap-heading mb-3">
                        Capabilities

                        Alliance Ecosystem
                    </h2>
                    <p className="cap-description">
                        KloudStack's engineering depth and vendor-agnostic alliance ecosystem deliver
                        unmatched execution flexibility. Our certified resources span every major
                        platform—enabling organizations to operate in the environment that best serves
                        their strategic and operational requirements, without lock-in.
                    </p>
                </div>

                {/* Right — stats grid */}
                <div className="cap-stats mt-5">
                    {stats.map((stat, i) => (
                        <StatCard key={i} started={started} {...stat} />
                    ))}
                </div>
            </div>

            {/* Subtle divider line */}
            <div className="cap-divider" aria-hidden="true" />
        </section>
    )
}

export default Capabilities
