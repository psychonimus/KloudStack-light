import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import './HeroLight.css'
import ButtonOne from '../../../ButtonOne/ButtonOne'
import ButtonThree from '../../../ButtonThree/ButtonThree'

gsap.registerPlugin(SplitText)

const HeroLight = () => {
    const contentRef = useRef(null)
    const containerRef = useRef(null)
    const titleRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const title = titleRef.current
        const content = contentRef.current
        if (!container || !title) return

        const subtitle = content.querySelector('.hero-light-subtitle')
        const actions = content.querySelector('.hero-light-actions')

        // Split heading into individual words
        const split = new SplitText(title.querySelectorAll('.hero-light-title-line'), {
            type: 'words',
            wordsClass: 'hero-light-word',
        })

        const tl = gsap.timeline({
            delay: 0.2,
            onComplete: () => {
                gsap.set([subtitle, actions, ...split.words], { clearProps: 'all' })
            }
        })

        // Each word slides up from below and fades in, staggered
        tl.from(split.words, {
            opacity: 0,
            y: 80,
            skewY: 4,
            duration: 0.9,
            ease: 'power4.out',
            stagger: 0.08,
        })
        // Subtitle fades up
        .from(subtitle, {
            opacity: 0,
            y: 24,
            duration: 0.7,
            ease: 'power3.out',
        }, '-=0.3')
        // Buttons fade in last
        .from(actions, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power3.out',
        }, '-=0.4')

        return () => {
            tl.kill()
            gsap.set([subtitle, actions], { clearProps: 'opacity,y,transform' })
            split.revert()
        }
    }, [])

    return (
        <div className="hero-light-wrapper" ref={containerRef}>

            {/* Video background */}
            <video
                className="hero-light-bg"
                src="/videos/light-bg.mov"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
            />

            {/* Gradient overlay for text legibility */}
            {/* <div className="hero-light-overlay" /> */}

            {/* Floating golden particles */}
            <div className="hero-light-particles" aria-hidden="true">
                {[
                    { top: '12%',  left: '6%',   size: 3, dur: 5.0, delay: 0.0 },
                    { top: '22%',  left: '78%',  size: 2, dur: 4.2, delay: 0.8 },
                    { top: '38%',  left: '91%',  size: 3, dur: 6.0, delay: 1.5 },
                    { top: '55%',  left: '4%',   size: 2, dur: 4.8, delay: 0.3 },
                    { top: '68%',  left: '82%',  size: 3, dur: 5.5, delay: 2.0 },
                    { top: '80%',  left: '14%',  size: 2, dur: 3.8, delay: 1.2 },
                    { top: '18%',  left: '45%',  size: 2, dur: 5.2, delay: 0.6 },
                    { top: '75%',  left: '58%',  size: 3, dur: 4.5, delay: 1.8 },
                    { top: '44%',  left: '67%',  size: 2, dur: 6.5, delay: 0.4 },
                    { top: '60%',  left: '38%',  size: 2, dur: 4.0, delay: 2.4 },
                    { top: '30%',  left: '22%',  size: 3, dur: 5.8, delay: 1.0 },
                    { top: '88%',  left: '70%',  size: 2, dur: 4.3, delay: 0.2 },
                ].map((p, i) => (
                    <span
                        key={i}
                        className="hero-light-particle"
                        style={{
                            top: p.top,
                            left: p.left,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            animationDuration: `${p.dur}s`,
                            animationDelay: `${p.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="hero-light-content" ref={contentRef}>
                <h1 className="hero-light-title" ref={titleRef}>
                    <span className="hero-light-title-line">SIMPLIFYING</span>
                    <span className="hero-light-title-line hero-light-title-bold">TECHNOLOGY</span>
                </h1>
                <p className="hero-light-subtitle">ACCELERATING ENTERPRISE SUCCESS</p>
                <div className="hero-light-actions">
                    <ButtonOne label="Book Consultation" />
                    <ButtonThree label="Explore Services" arrow="→" />
                </div>
            </div>

            {/* Bottom service strip */}
            <div className="hero-light-services">
                {[
                    'Cyber Security',
                    'Cloud Infrastructure',
                    'Artificial Intelligence',
                    'Managed Services',
                    'DevOps Services',
                    'Business Continuity',
                ].map((name, i) => (
                    <span key={i} className="hero-light-service-item">
                        {name}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default HeroLight
