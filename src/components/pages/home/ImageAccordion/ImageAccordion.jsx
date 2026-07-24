import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './ImageAccordion.css'

import img1 from '/images/ms.png'
import img2 from '/images/ai.png'
import img3 from '/images/zts.png'
import img4 from '/images/multicloud.png'

const items = [
  {
    id: 0,
    img: img1,
    title: '24*7 Managed Services',
    subtitle: 'Develop unique, innovative solutions that foster differentiation.',
  },
  {
    id: 1,
    img: img2,
    title: 'AI Driven Infrastructure',
    subtitle: 'Develop unique, innovative solutions that foster differentiation.',
  },
  {
    id: 2,
    img: img3,
    title: 'Zero Trust Security',
    subtitle: 'Develop unique, innovative solutions that foster differentiation.',
  },
  {
    id: 3,
    img: img4,
    title: 'Multicloud Architecture',
    subtitle: 'Develop unique, innovative solutions that foster differentiation.',
  },
]

const ImageAccordion = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="ia-section" aria-label="Image Accordion">
      <div className="container mb-4" data-reveal-group>
        <div className="os-light-header-left">
            <p className="os-light-eyebrow gsap-reveal-eyebrow">Services Portfolio</p>
            <h2 className="os-light-title gsap-reveal-title">
              Why{' '}
              <span className="os-light-title-accent">Kloudstack</span>
            </h2>
            <p className="os-light-subtitle gsap-reveal-text">
              Our skilled solutions, from strategy to execution, are made to boost performance, spur growth, quantifiable value.
            </p>
          </div>
          
      </div>
      <div className="ia-wrapper">
        {items.map((item) => {
          const isActive = hovered === item.id
          const isIdle   = hovered !== null && hovered !== item.id

          return (
            <motion.div
              key={item.id}
              className={`ia-panel${isActive ? ' ia-panel--active' : ''}${isIdle ? ' ia-panel--idle' : ''}`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              animate={{
                flex: isActive ? 3.2 : isIdle ? 0.55 : 1,
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Background Image */}
              <motion.div
                className="ia-img-wrap"
                animate={{ scale: isActive ? 1 : 1 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <img src={item.img} alt={item.title} className="ia-img" />
              </motion.div>

              {/* Gradient overlay */}
              <div className="ia-overlay" />

              {/* Label — always visible but repositions on expand */}
              <div className="ia-label">
                {/* Vertical label shown when collapsed */}
                <motion.span
                  className="ia-label-vertical"
                  animate={{ opacity: isActive ? 0 : isIdle ? 0.7 : 1 }}
                  transition={{ duration: 0.35 }}
                >
                  {item.title}
                </motion.span>

                {/* Bottom label shown when expanded */}
                <motion.div
                  className="ia-label-bottom"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
                  transition={{ duration: 0.4, delay: isActive ? 0.2 : 0 }}
                >
                  <p className="ia-label-title">{item.title}</p>
                  <p className="ia-label-subtitle">{item.subtitle}</p>
                </motion.div>
              </div>

              {/* Corner number */}
              <motion.span
                className="ia-number"
                animate={{ opacity: isActive ? 1 : 0.35 }}
                transition={{ duration: 0.35 }}
              >
                {String(item.id + 1).padStart(2, '0')}
              </motion.span>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default ImageAccordion
