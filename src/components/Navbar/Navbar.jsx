import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimate, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navItems = [
  { name: 'Home',      href: '#' },
  { name: 'About',     href: '#' },
  { name: 'Services',  href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Partners',  href: '#' },
  { name: 'Contact',   href: '#' },
];

const COLLAPSE_TRIGGER  = 150;
const EXPAND_THRESHOLD  = 80;

/* ── Desktop variant definitions ── */
const containerVariants = {
  expanded:  { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
  collapsed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const logoVariants = {
  expanded:  { opacity: 1, x: 0,   scale: 1,    transition: { type: 'spring', damping: 16, stiffness: 220 } },
  collapsed: { opacity: 0, x: -18, scale: 0.85, transition: { duration: 0.18 } },
};

const itemVariants = {
  expanded:  { opacity: 1, x: 0,   scale: 1,    transition: { type: 'spring', damping: 16 } },
  collapsed: { opacity: 0, x: -14, scale: 0.92, transition: { duration: 0.15 } },
};

const rightVariants = {
  expanded:  { opacity: 1, x: 0,  transition: { type: 'spring', damping: 18, delay: 0.08 } },
  collapsed: { opacity: 0, x: 18, transition: { duration: 0.15 } },
};

const menuIconVariants = {
  expanded:  { opacity: 0, scale: 0.5, transition: { duration: 0.12 } },
  collapsed: { opacity: 1, scale: 1,   transition: { type: 'spring', damping: 14, stiffness: 280, delay: 0.2 } },
};

/* ── Mobile drawer variants ── */
const drawerVariants = {
  hidden:  { opacity: 0, y: -16, scale: 0.97, transition: { duration: 0.22, ease: 'easeIn' } },
  visible: { opacity: 1, y: 0,   scale: 1,    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
};

const drawerItemVariants = {
  hidden:  { opacity: 0, x: -16 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06 + 0.1, type: 'spring', damping: 18, stiffness: 200 },
  }),
};

/* util */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const getRightX = () => window.innerWidth / 2 - 70;
const isMobile = () => window.innerWidth <= 768;

/* ─────────────────── COMPONENT ─────────────────── */
const Navbar = ({ theme = 'dark' }) => {
  const isLight = theme === 'light';
  const [scope, animate] = useAnimate();
  const [isExpanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isAnimating     = useRef(false);
  const isExpandedRef   = useRef(true);
  const lastScrollY     = useRef(0);
  const collapseScrollY = useRef(0);

  /* ── Entry: slide down on mount ── */
  useEffect(() => {
    animate(
      scope.current,
      { y: 0, opacity: 1 },
      { type: 'spring', damping: 20, stiffness: 200, delay: 0.25 }
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Close mobile drawer on resize to desktop ── */
  useEffect(() => {
    const onResize = () => { if (!isMobile()) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* ── Lock body scroll when mobile drawer is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* ── Collapse / Expand sequences (desktop only) ── */
  const doCollapse = async () => {
    if (isAnimating.current || isMobile()) return;
    isAnimating.current   = true;
    isExpandedRef.current = false;
    setExpanded(false);

    await sleep(160);
    await animate(scope.current, { width: '52px' }, { type: 'spring', damping: 30, stiffness: 320 });
    await animate(scope.current, { x: getRightX() }, { type: 'spring', damping: 22, stiffness: 180 });

    isAnimating.current = false;
  };

  const doExpand = async () => {
    if (isAnimating.current || isMobile()) return;
    isAnimating.current = true;

    await animate(scope.current, { x: 0 }, { type: 'spring', damping: 22, stiffness: 180 });

    isExpandedRef.current = true;
    setExpanded(true);

    await animate(scope.current, { width: '1020px' }, { type: 'spring', damping: 28, stiffness: 300 });

    isAnimating.current = false;
  };

  /* ── Scroll listener (desktop only) ── */
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (isMobile()) return;
    const previous = lastScrollY.current;

    if (isExpandedRef.current && !isAnimating.current && latest > previous && latest > COLLAPSE_TRIGGER) {
      collapseScrollY.current = latest;
      doCollapse();
    } else if (!isExpandedRef.current && !isAnimating.current && latest < previous && collapseScrollY.current - latest > EXPAND_THRESHOLD) {
      doExpand();
    }

    lastScrollY.current = latest;
  });

  /* ── Render ── */
  return (
    <>
      {/* ════════════════ DESKTOP NAV ════════════════ */}
      <div className={`navbar-outer navbar-desktop${isLight ? ' navbar-light' : ''}`}>
        <motion.nav
          ref={scope}
          className="animated-nav"
          initial={{ y: -80, opacity: 0, width: '1020px' }}
          animate={isExpanded ? 'expanded' : 'collapsed'}
          variants={containerVariants}
          whileHover={!isExpanded ? { scale: 1.08 } : {}}
          whileTap={!isExpanded   ? { scale: 0.94 } : {}}
          onClick={() => { if (!isExpanded && !isAnimating.current) doExpand(); }}
          style={{ cursor: isExpanded ? 'default' : 'pointer' }}
        >
          {/* Logo */}
          <motion.div className="nav-logo-wrap" variants={logoVariants}>
            <img src="/images/Kloudstack-Logo.svg" alt="KloudStack" className="nav-logo" />
          </motion.div>

          {/* Centre nav links */}
          <motion.div className="nav-links-wrap" style={{ pointerEvents: isExpanded ? 'auto' : 'none' }}>
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`nav-item-link${item.name === 'Home' ? ' active-link' : ''}`}
                variants={itemVariants}
                onClick={(e) => e.stopPropagation()}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Right: social icons + CTA */}
          <motion.div className="nav-right-wrap" variants={rightVariants} style={{ pointerEvents: isExpanded ? 'auto' : 'none' }}>
            <div className="social-icons">
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter-x"></i>
            </div>
            <button className="btn-contact">Get in Touch</button>
          </motion.div>

          {/* Collapsed icon */}
          <motion.div
            className="nav-collapsed-icon"
            variants={menuIconVariants}
            animate={isExpanded ? 'expanded' : 'collapsed'}
          >
            <i className="bi bi-list"></i>
          </motion.div>
        </motion.nav>
      </div>

      {/* ════════════════ MOBILE NAV ════════════════ */}
      <div className={`navbar-mobile${isLight ? ' navbar-light' : ''}`}>
        <div className="mobile-nav-bar">
          {/* Logo */}
          <img src="/images/Kloudstack-Logo.svg" alt="KloudStack" className="mobile-nav-logo" />

          {/* Hamburger / Close toggle */}
          <button
            className={`mobile-hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="ham-bar bar-top"></span>
            <span className="ham-bar bar-mid"></span>
            <span className="ham-bar bar-bot"></span>
          </button>
        </div>

        {/* Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMobileOpen(false)}
              />

              {/* Drawer panel */}
              <motion.div
                className="mobile-drawer"
                variants={drawerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {/* Nav links */}
                <nav className="mobile-drawer-links">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className={`mobile-nav-link${item.name === 'Home' ? ' active-link' : ''}`}
                      custom={i}
                      variants={drawerItemVariants}
                      initial="hidden"
                      animate="visible"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Divider */}
                <div className="mobile-drawer-divider" />

                {/* Social icons */}
                <motion.div
                  className="mobile-social-icons"
                  custom={navItems.length}
                  variants={drawerItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <i className="bi bi-linkedin"></i>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-twitter-x"></i>
                </motion.div>

                {/* CTA */}
                <motion.button
                  className="btn-contact mobile-cta"
                  custom={navItems.length + 1}
                  variants={drawerItemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => setMobileOpen(false)}
                >
                  Get in Touch
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;