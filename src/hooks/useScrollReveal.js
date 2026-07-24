import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook to add consistent GSAP scroll reveal text animations
 * to headings, eyebrows, and paragraphs inside target containers.
 */
export const useScrollReveal = (containerRef) => {
  useEffect(() => {
    const root = containerRef?.current || document;

    const ctx = gsap.context(() => {
      const groups = root.querySelectorAll('[data-reveal-group]');

      groups.forEach((group) => {
        const eyebrow = group.querySelector('.gsap-reveal-eyebrow, [data-reveal="eyebrow"]');
        const title = group.querySelector('.gsap-reveal-title, [data-reveal="title"]');
        const text = group.querySelector('.gsap-reveal-text, [data-reveal="text"]');

        const elementsToAnimate = [eyebrow, title, text].filter(Boolean);
        if (elementsToAnimate.length === 0) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: group,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        if (eyebrow) {
          tl.from(eyebrow, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power3.out',
          });
        }

        if (title) {
          tl.from(
            title,
            {
              opacity: 0,
              y: 35,
              skewY: 1.2,
              duration: 0.85,
              ease: 'power3.out',
            },
            eyebrow ? '-=0.35' : 0
          );
        }

        if (text) {
          tl.from(
            text,
            {
              opacity: 0,
              y: 25,
              duration: 0.75,
              ease: 'power3.out',
            },
            '-=0.55'
          );
        }
      });
    }, root);

    // Refresh ScrollTrigger so positions calculate correctly
    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, [containerRef]);
};

export default useScrollReveal;
