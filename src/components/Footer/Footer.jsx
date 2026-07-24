import React from 'react'
import './Footer.css'

/* ─────────────────────────────────────────────────────
   Social icons — inline SVG, no external dependency
   ───────────────────────────────────────────────────── */
const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
)

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
)

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
)

const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
)

const socialLinks = [
    { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedInIcon },
    { id: 'facebook', label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
    { id: 'instagram', label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
    { id: 'x', label: 'X (Twitter)', href: 'https://x.com', Icon: XIcon },
]

const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'Contacts', href: '#contacts' },
]

const Footer = ({ theme = 'light' }) => {
    const year = new Date().getFullYear()
    const isLight = theme === 'light'

    return (
        <footer className={`ft-footer container-fluid${isLight ? ' ft-footer-light' : ''}`} role="contentinfo">
            {/* ── Giant watermark wordmark ── */}
            <div className="ft-watermark" aria-hidden="true">KLOUDSTACK</div>

            <div className="ft-inner">
                {/* ── Four-column grid ── */}
                <div className="ft-grid">

                    {/* Col 1 — Brand */}
                    <div className="ft-col ft-col--brand">
                        <a href="/" className="ft-logo-link" aria-label="KloudStack home">
                            <img
                                src="/images/Kloudstack-Logo.svg"
                                alt="KloudStack"
                                className="ft-logo-img"
                            />
                        </a>
                        <p className="ft-brand-desc">
                            KloudStack's engineering depth and vendor-agnostic
                            alliance ecosystem deliver unmatched execution flexibility.
                            Our certified resources span every major platform.
                        </p>
                    </div>

                    {/* Col 2 — Contact */}
                    <div className="ft-col">
                        <h3 className="ft-col-heading">Contact</h3>
                        <ul className="ft-contact-list">
                            <li>
                                <a href="mailto:Info@kloudstack.com" className="ft-contact-link" id="ft-email">
                                    Info@kloudstack.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+912249785345" className="ft-contact-link" id="ft-phone">
                                    +91-22 49785345
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3 — Links */}
                    <div className="ft-col">
                        <h3 className="ft-col-heading">Links</h3>
                        <nav aria-label="Footer navigation">
                            <ul className="ft-nav-list">
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="ft-nav-link" id={`ft-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Col 4 — Social */}
                    <div className="ft-col">
                        <h3 className="ft-col-heading">Get in Touch</h3>
                        <div className="ft-social-row" role="list">
                            {socialLinks.map(({ id, label, href, Icon }) => (
                                <a
                                    key={id}
                                    href={href}
                                    className="ft-social-btn"
                                    aria-label={label}
                                    id={`ft-social-${id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    role="listitem"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* ── Divider ── */}
                <div className="ft-divider" aria-hidden="true" />

                {/* ── Bottom bar ── */}
                <div className="ft-bottom">
                    <p className="ft-copyright">© {year}. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
