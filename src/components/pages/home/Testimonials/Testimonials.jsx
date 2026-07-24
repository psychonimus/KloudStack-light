import React, { useState, useEffect, useRef, useCallback } from 'react'
import './Testimonials.css'

/* ─────────────────────────────────────────────────────────────
   Testimonial data
   ───────────────────────────────────────────────────────────── */
const testimonials = [
    {
        id: 1,
        quote:
            'Working with Kloudstack Computes was a smooth experience from start to finish. They really took the time to understand our needs and made sure everything was secure and compliant...',
        name: 'Mr. Sudarshan Pillai',
        title: 'VP IT, LIC Mutual Fund',
        avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Sudarshan&backgroundColor=b6e3f4',
    },
    {
        id: 2,
        quote:
            'We consider Kloudstack Computes as an extension of our own team. Their work with Azure, AWS, and OpenShift has been consistently excellent.',
        name: 'Mr. Senthil',
        title: 'Chairman & MD, Savic Technologies',
        avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Priya&backgroundColor=ffd5dc',
    },
    {
        id: 3,
        quote:
            'The project went off without a hitch... always keeping things running smoothly.',
        name: 'Mr. Anjan Deb',
        title: 'IT Head, Seven Islands Shipping Ltd',
        avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Rajiv&backgroundColor=c0aede',
    },
    {
        id: 4,
        quote:
            'When Kloudstack Computes set up Microsoft Active Directory, Azure, and Microsoft 365 for us, they made what could have been a complicated process feel straightforward...',
        name: 'Mr. Vishal Sinha',
        title: 'Bajel Projects Limited',
        avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Arjun&backgroundColor=d1f4cc',
    },
]

/* ─────────────────────────────────────────────────────────────
   Direction constants for slide animation
   ───────────────────────────────────────────────────────────── */
const DIRECTIONS = { NEXT: 'next', PREV: 'prev' }
const AUTO_INTERVAL = 5000

const Testimonials = () => {
    const [current, setCurrent] = useState(0)
    const [animating, setAnimating] = useState(false)
    const [direction, setDirection] = useState(DIRECTIONS.NEXT)
    const [isPaused, setIsPaused] = useState(false)
    const [inView, setInView] = useState(false)
    const sectionRef = useRef(null)
    const timerRef = useRef(null)
    const total = testimonials.length

    /* Intersection observer for entrance */
    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    /* Navigate with direction tracking + animation lock */
    const navigate = useCallback(
        (dir) => {
            if (animating) return
            setDirection(dir)
            setAnimating(true)
            setTimeout(() => {
                setCurrent((prev) =>
                    dir === DIRECTIONS.NEXT
                        ? (prev + 1) % total
                        : (prev - 1 + total) % total
                )
                setAnimating(false)
            }, 480)
        },
        [animating, total]
    )

    const goNext = useCallback(() => navigate(DIRECTIONS.NEXT), [navigate])
    const goPrev = useCallback(() => navigate(DIRECTIONS.PREV), [navigate])

    /* Auto-play */
    useEffect(() => {
        if (isPaused || !inView) return
        timerRef.current = setInterval(goNext, AUTO_INTERVAL)
        return () => clearInterval(timerRef.current)
    }, [isPaused, inView, goNext])

    const t = testimonials[current]

    /* Animation class */
    const slideClass = animating
        ? direction === DIRECTIONS.NEXT
            ? 'tv-slide--exit-left'
            : 'tv-slide--exit-right'
        : 'tv-slide--active'

    return (
        <section
            className={`tv-section ${inView ? 'tv-section--visible' : ''}`}
            ref={sectionRef}
            aria-label="Client Validations"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Subtle background glow */}
            <div className="tv-bg-glow" aria-hidden="true" />

            <div className="tv-inner">
                {/* ── Heading ── */}
                <h2 className="section-heading mb-4">
                    Client Validations
                </h2>

                {/* ── Slide ── */}
                <div className="tv-stage" aria-live="polite" aria-atomic="true">
                    <div className={`tv-slide ${slideClass}`} key={current}>
                        {/* Quote text */}
                        <blockquote className="tv-quote">
                            {/* <span className="tv-quote-mark" aria-hidden="true">"</span> */}
                            {t.quote}
                        </blockquote>

                        {/* Author row */}
                        <div className="tv-author-row">
                            {/* Prev button */}
                            <button
                                className="tv-nav-btn"
                                onClick={goPrev}
                                aria-label="Previous testimonial"
                                id="tv-btn-prev"
                            >
                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <polyline points="15 18 9 12 15 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {/* Avatar + name */}
                            <div className="tv-author">
                                <div className="tv-avatar-ring">
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="tv-avatar"
                                        width="64"
                                        height="64"
                                    />
                                </div>
                                <p className="tv-author-name">{t.name}</p>
                                <p className="tv-author-title">{t.title}</p>
                            </div>

                            {/* Next button */}
                            <button
                                className="tv-nav-btn"
                                onClick={goNext}
                                aria-label="Next testimonial"
                                id="tv-btn-next"
                            >
                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <polyline points="9 18 15 12 9 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Dot indicators ── */}
                <div className="tv-dots" role="tablist" aria-label="Testimonial navigation">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className={`tv-dot ${i === current ? 'tv-dot--active' : ''}`}
                            role="tab"
                            aria-selected={i === current}
                            aria-label={`Go to testimonial ${i + 1}`}
                            onClick={() => {
                                if (animating || i === current) return
                                setDirection(i > current ? DIRECTIONS.NEXT : DIRECTIONS.PREV)
                                setAnimating(true)
                                setTimeout(() => {
                                    setCurrent(i)
                                    setAnimating(false)
                                }, 480)
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="tv-divider" aria-hidden="true" />
        </section>
    )
}

export default Testimonials
