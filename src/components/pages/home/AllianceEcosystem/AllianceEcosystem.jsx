import React, { useState, useRef, useEffect } from 'react'
import './AllianceEcosystem.css'
import Azure from '/images/logos/azure-svgrepo-com.svg'
import AWS from '/images/logos/aws-svgrepo-com.svg'
import RedHat from '/images/logos/Red_Hat_Logo.svg'
import Ubuntu from '/images/logos/Ubuntu-logo.svg'
import SUSE from '/images/logos/suse.svg'
// import OpenShift from '/images/logos/red-hat-openshift-logo-svgrepo-com.svg'
// import OpenStack from '/images/logos/openstack-svgrepo-com.svg'
// import Kubernetes from '/images/logos/kubernetes-svgrepo-com.svg'
// import Ansible from '/images/logos/ansible-svgrepo-com.svg'
// import Terraform from '/images/logos/terraform-svgrepo-com.svg'
// import Dell from '/images/logos/dell-svgrepo-com.svg'
// import HPE from '/images/logos/hewlett-packard-enterprise-logo-svgrepo-com.svg'
// import Lenovo from '/images/logos/lenovo-svgrepo-com.svg'
// import Cisco from '/images/logos/cisco-svgrepo-com.svg'
// import Juniper from '/images/logos/juniper-networks-logo-svgrepo-com.svg'
// import VMware from '/images/logos/vmware-svgrepo-com.svg'
// import Citrix from '/images/logos/citrix-logo-svgrepo-com.svg'
// import Veeam from '/images/logos/veeam-svgrepo-com.svg'
// import Fortinet from '/images/logos/fortinet-logo-svgrepo-com.svg'
// import PaloAlto from '/images/logos/palo-alto-networks-logo-svgrepo-com.svg'
// import CheckPoint from '/images/logos/checkpoint-logo-svgrepo-com.svg'
// import F5 from '/images/logos/f5-networks-logo-svgrepo-com.svg'
// import Splunk from '/images/logos/splunk-logo-svgrepo-com.svg'
// import LogRhythm from '/images/logos/logrhythm-logo-svgrepo-com.svg'
// import ExaGrid from '/images/logos/exagrid-logo-svgrepo-com.svg'
// import Cohesity from '/images/logos/cohesity-logo-svgrepo-com.svg'
// import Rubrik from '/images/logos/rubrik-logo-svgrepo-com.svg'



const Logo = ({ viewBox = '0 0 100 40', children, style = {}, className = '' }) => (
    <svg viewBox={viewBox} className={`ae-logo-svg ${className}`} style={style} aria-hidden="true">
        {children}
    </svg>
)

const AzureLogo = () => (
    <img src={Azure} alt="Azure" className="ae-logo-svg" />
)

const AWSLogo = () => (
    <img src={AWS} alt="AWS" className="ae-logo-svg" />
)

const RedHatLogo = () => (
    <img src={RedHat} alt="Red Hat" className="ae-logo-svg" />
)

const UbuntuLogo = () => (
    <img src={Ubuntu} alt="Ubuntu" className="ae-logo-svg" />
)

const SUSELogo = () => (
    <img src={SUSE} alt="SUSE" className="ae-logo-svg" />
)

const OpenShiftLogo = () => (
    <svg viewBox="0 0 200 80" className="ae-logo-svg" aria-label="OpenShift">
        {/* Red circular mark */}
        <circle cx="36" cy="40" r="30" fill="none" stroke="#EE0000" strokeWidth="5" />
        <path d="M18 30 Q36 15 54 30" stroke="#EE0000" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M18 50 Q36 65 54 50" stroke="#EE0000" strokeWidth="5" fill="none" strokeLinecap="round" />
        <text x="76" y="30" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" fill="#EE0000">OPEN</text>
        <text x="76" y="52" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#EE0000">SHIFT</text>
    </svg>
)

const OpenStackLogo = () => (
    <svg viewBox="0 0 200 80" className="ae-logo-svg" aria-label="OpenStack">
        {/* Three stacked bars */}
        <rect x="8" y="12" width="50" height="14" rx="3" fill="#ED1944" />
        <rect x="8" y="33" width="50" height="14" rx="3" fill="#ED1944" />
        <rect x="8" y="54" width="50" height="14" rx="3" fill="#ED1944" />
        <text x="68" y="43" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="15" fill="#ED1944">openstack</text>
        <text x="68" y="60" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="10" fill="#ED1944" opacity="0.6">.</text>
    </svg>
)

const KubernetesLogo = () => (
    <svg viewBox="0 0 80 80" className="ae-logo-svg" aria-label="Kubernetes">
        <polygon points="40,4 72,22 72,58 40,76 8,58 8,22" fill="#326CE5" />
        <polygon points="40,14 62,26 62,54 40,66 18,54 18,26" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.3" />
        {/* Helm / wheel */}
        <circle cx="40" cy="40" r="10" fill="none" stroke="#ffffff" strokeWidth="3" />
        <line x1="40" y1="18" x2="40" y2="30" stroke="#ffffff" strokeWidth="3" />
        <line x1="40" y1="50" x2="40" y2="62" stroke="#ffffff" strokeWidth="3" />
        <line x1="18" y1="40" x2="30" y2="40" stroke="#ffffff" strokeWidth="3" />
        <line x1="50" y1="40" x2="62" y2="40" stroke="#ffffff" strokeWidth="3" />
        <line x1="24" y1="24" x2="33" y2="33" stroke="#ffffff" strokeWidth="3" />
        <line x1="47" y1="47" x2="56" y2="56" stroke="#ffffff" strokeWidth="3" />
        <line x1="56" y1="24" x2="47" y2="33" stroke="#ffffff" strokeWidth="3" />
        <line x1="33" y1="47" x2="24" y2="56" stroke="#ffffff" strokeWidth="3" />
    </svg>
)

const AnsibleLogo = () => (
    <svg viewBox="0 0 80 80" className="ae-logo-svg" aria-label="Ansible">
        <circle cx="40" cy="40" r="36" fill="#1A1918" />
        <text x="40" y="54" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="44" fill="#ffffff">A</text>
        <text x="28" y="40" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="11" fill="#ffffff" opacity="0.5">ANSIBLE</text>
    </svg>
)

const TerraformLogo = () => (
    <svg viewBox="0 0 220 80" className="ae-logo-svg" aria-label="Terraform">
        {/* HashiCorp Terraform diamond mark */}
        <polygon points="16,44 30,52 30,20 16,12" fill="#7B42BC" />
        <polygon points="32,20 32,52 46,44 46,12" fill="#7B42BC" opacity="0.75" />
        <polygon points="48,24 48,56 62,48 62,16" fill="#7B42BC" opacity="0.55" />
        <text x="76" y="30" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" fill="#7B42BC" letterSpacing="1">HashiCorp</text>
        <text x="76" y="54" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#7B42BC">Terraform</text>
    </svg>
)

/* ─── Server, Storage & Network ─── */
const DellLogo = () => (
    <svg viewBox="0 0 160 60" className="ae-logo-svg" aria-label="Dell">
        <text x="10" y="46" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="48" fill="#007DB8" letterSpacing="-2">Dell</text>
    </svg>
)

const HPELogo = () => (
    <svg viewBox="0 0 160 60" className="ae-logo-svg" aria-label="HPE">
        <circle cx="16" cy="30" r="14" fill="#01A982" />
        <text x="36" y="42" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="26" fill="#01A982">HPE</text>
    </svg>
)

const CiscoLogo = () => (
    <svg viewBox="0 0 200 60" className="ae-logo-svg" aria-label="Cisco">
        {/* Signal towers */}
        {[0, 14, 28, 42, 28, 14, 0].map((h, i) => (
            <rect key={i} x={10 + i * 10} y={30 - h} width="7" height={h * 2} rx="3" fill="#049FD9" />
        ))}
        <text x="88" y="42" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="30" fill="#049FD9">Cisco</text>
    </svg>
)

const PureStorageLogo = () => (
    <svg viewBox="0 0 200 60" className="ae-logo-svg" aria-label="Pure Storage">
        <circle cx="24" cy="30" r="20" fill="#FF6900" />
        <text x="3" y="36" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" fill="#ffffff">P</text>
        <text x="54" y="26" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" fill="#FF6900">Pure</text>
        <text x="54" y="44" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" fill="#FF6900">Storage</text>
    </svg>
)

const NutanixLogo = () => (
    <svg viewBox="0 0 200 60" className="ae-logo-svg" aria-label="Nutanix">
        <rect x="6" y="20" width="30" height="30" rx="4" fill="#024DA1" transform="rotate(-10 21 35)" />
        <text x="50" y="40" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="24" fill="#024DA1">Nutanix</text>
    </svg>
)

const JuniperLogo = () => (
    <svg viewBox="0 0 200 60" className="ae-logo-svg" aria-label="Juniper Networks">
        <circle cx="24" cy="30" r="20" fill="#84B135" />
        <circle cx="24" cy="30" r="12" fill="#ffffff" opacity="0.25" />
        <text x="52" y="26" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" fill="#84B135">Juniper</text>
        <text x="52" y="44" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="11" fill="#84B135" opacity="0.7">Networks</text>
    </svg>
)

/* ─── Enterprise Cyber Security ─── */
const PaloAltoLogo = () => (
    <svg viewBox="0 0 200 60" className="ae-logo-svg" aria-label="Palo Alto Networks">
        {/* Concentric arcs */}
        <path d="M26 50 A22 22 0 0 1 4 28" stroke="#FA582D" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M34 50 A30 30 0 0 1 4 20" stroke="#FA582D" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M42 50 A38 38 0 0 1 4 12" stroke="#FA582D" strokeWidth="5" fill="none" strokeLinecap="round" />
        <text x="54" y="26" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" fill="#FA582D">Palo Alto</text>
        <text x="54" y="44" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" fill="#FA582D">Networks</text>
    </svg>
)

const CrowdStrikeLogo = () => (
    <svg viewBox="0 0 220 60" className="ae-logo-svg" aria-label="CrowdStrike">
        <polygon points="10,50 28,10 36,30 44,10 62,50" fill="none" stroke="#FF0000" strokeWidth="4" strokeLinejoin="round" />
        <text x="76" y="40" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="20" fill="#FF0000">CrowdStrike</text>
    </svg>
)

const SentinelOneLogo = () => (
    <svg viewBox="0 0 200 60" className="ae-logo-svg" aria-label="SentinelOne">
        <polygon points="24,8 42,18 42,42 24,52 6,42 6,18" fill="#6B2FD9" />
        <text x="52" y="26" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="12" fill="#6B2FD9">Sentinel</text>
        <text x="52" y="44" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="12" fill="#6B2FD9">One</text>
    </svg>
)

const FortinetLogo = () => (
    <svg viewBox="0 0 200 60" className="ae-logo-svg" aria-label="Fortinet">
        <rect x="6" y="10" width="16" height="40" rx="2" fill="#EE3124" />
        <rect x="26" y="18" width="16" height="24" rx="2" fill="#EE3124" />
        <rect x="46" y="10" width="16" height="40" rx="2" fill="#EE3124" />
        <text x="76" y="40" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#EE3124">Fortinet</text>
    </svg>
)

const QualysLogo = () => (
    <svg viewBox="0 0 180 60" className="ae-logo-svg" aria-label="Qualys">
        <circle cx="26" cy="28" r="20" fill="none" stroke="#ED2226" strokeWidth="5" />
        <line x1="40" y1="42" x2="52" y2="54" stroke="#ED2226" strokeWidth="5" strokeLinecap="round" />
        <text x="64" y="40" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="24" fill="#ED2226">Qualys</text>
    </svg>
)

const SplunkLogo = () => (
    <svg viewBox="0 0 180 60" className="ae-logo-svg" aria-label="Splunk">
        {/* Chevron mark */}
        <polyline points="6,48 22,12 32,36 42,12 58,48" fill="none" stroke="#65A637" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
        <text x="72" y="40" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#65A637">Splunk</text>
    </svg>
)

/* ─────────────────────────────────────────────────────────────
   Category data
   ───────────────────────────────────────────────────────────── */
const categories = [
    {
        id: 'cloud-os',
        label: 'Cloud, OS & Open Source',
        logos: [
            { id: 'azure', label: 'Microsoft Azure', render: () => <AzureLogo /> },
            { id: 'aws', label: 'AWS', render: () => <AWSLogo /> },
            { id: 'redhat', label: 'Red Hat', render: () => <RedHatLogo /> },
            { id: 'ubuntu', label: 'Ubuntu', render: () => <UbuntuLogo /> },
            { id: 'suse', label: 'SUSE', render: () => <SUSELogo /> },
            { id: 'openshift', label: 'OpenShift', render: () => <OpenShiftLogo /> },
            { id: 'openstack', label: 'OpenStack', render: () => <OpenStackLogo /> },
            { id: 'kubernetes', label: 'Kubernetes', render: () => <KubernetesLogo /> },
            { id: 'ansible', label: 'Ansible', render: () => <AnsibleLogo /> },
            { id: 'terraform', label: 'Terraform', render: () => <TerraformLogo /> },
        ],
    },
    {
        id: 'server-storage',
        label: 'Server, Storage & Network',
        logos: [
            { id: 'dell', label: 'Dell', render: () => <DellLogo /> },
            { id: 'hpe', label: 'HPE', render: () => <HPELogo /> },
            { id: 'cisco', label: 'Cisco', render: () => <CiscoLogo /> },
            { id: 'purestorage', label: 'Pure Storage', render: () => <PureStorageLogo /> },
            { id: 'nutanix', label: 'Nutanix', render: () => <NutanixLogo /> },
            { id: 'juniper', label: 'Juniper', render: () => <JuniperLogo /> },
        ],
    },
    {
        id: 'cyber-security',
        label: 'Enterprise Cyber Security',
        logos: [
            { id: 'paloalto', label: 'Palo Alto', render: () => <PaloAltoLogo /> },
            { id: 'crowdstrike', label: 'CrowdStrike', render: () => <CrowdStrikeLogo /> },
            { id: 'sentinelone', label: 'SentinelOne', render: () => <SentinelOneLogo /> },
            { id: 'fortinet', label: 'Fortinet', render: () => <FortinetLogo /> },
            { id: 'qualys', label: 'Qualys', render: () => <QualysLogo /> },
            { id: 'splunk', label: 'Splunk', render: () => <SplunkLogo /> },
        ],
    },

    {
        id: 'bcp',
        label: 'BCP & Enterprise Applications',
        logos: [
            { id: 'paloalto', label: 'Palo Alto', render: () => <PaloAltoLogo /> },
            { id: 'crowdstrike', label: 'CrowdStrike', render: () => <CrowdStrikeLogo /> },
            { id: 'sentinelone', label: 'SentinelOne', render: () => <SentinelOneLogo /> },
            { id: 'fortinet', label: 'Fortinet', render: () => <FortinetLogo /> },
            { id: 'qualys', label: 'Qualys', render: () => <QualysLogo /> },
            { id: 'splunk', label: 'Splunk', render: () => <SplunkLogo /> },
        ],
    },
]

/* ─────────────────────────────────────────────────────────────
   Accordion Item
   ───────────────────────────────────────────────────────────── */
function AccordionItem({ category, isOpen, onToggle, index, inView }) {
    const bodyRef = useRef(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (!bodyRef.current) return
        if (isOpen) {
            setHeight(bodyRef.current.scrollHeight)
        } else {
            setHeight(0)
        }
    }, [isOpen])

    return (
        <div
            className={`ae-accordion-item ${isOpen ? 'ae-accordion-item--open' : ''} ${inView ? 'ae-accordion-item--visible' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Header */}
            <button
                className="ae-accordion-header"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`ae-panel-${category.id}`}
                id={`ae-btn-${category.id}`}
            >
                <span className="ae-accordion-bar" aria-hidden="true" />
                <span className="ae-accordion-label">{category.label}</span>
                <span className="ae-accordion-icon" aria-hidden="true">
                    <span className="ae-icon-line ae-icon-h" />
                    <span className={`ae-icon-line ae-icon-v ${isOpen ? 'ae-icon-v--hidden' : ''}`} />
                </span>
            </button>

            {/* Body */}
            <div
                className="ae-accordion-body-wrap"
                id={`ae-panel-${category.id}`}
                role="region"
                aria-labelledby={`ae-btn-${category.id}`}
                style={{ height: `${height}px` }}
            >
                <div className="ae-accordion-body" ref={bodyRef}>
                    <div className="ae-logo-grid">
                        {category.logos.map((logo, i) => (
                            <div
                                key={logo.id}
                                className={`ae-logo-cell ${isOpen ? 'ae-logo-cell--visible' : ''}`}
                                style={{ transitionDelay: isOpen ? `${i * 45}ms` : '0ms' }}
                                title={logo.label}
                            >
                                {logo.render()}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

/* ─────────────────────────────────────────────────────────────
   Main Section
   ───────────────────────────────────────────────────────────── */
const AllianceEcosystem = () => {
    const [openId, setOpenId] = useState('cloud-os') // first open by default
    const sectionRef = useRef(null)
    const [inView, setInView] = useState(false)

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
            { threshold: 0.1 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

    return (
        <section className="ae-section" ref={sectionRef} aria-label="Vendor-Agnostic Alliance Ecosystem">
            <div className="ae-inner">
                {/* Heading */}
                <div className={`ae-heading-wrap ${inView ? 'ae-heading-wrap--visible' : ''}`} data-reveal-group>
                    <h2 className="ae-heading text-start gsap-reveal-title">
                        Vendor–Agnostic <span className='ae-heading-accent'>Alliance Ecosystem</span>
                    </h2>
                </div>

                {/* Accordion */}
                <div className="ae-accordion" role="list">
                    {categories.map((cat, i) => (
                        <AccordionItem
                            key={cat.id}
                            category={cat}
                            isOpen={openId === cat.id}
                            onToggle={() => toggle(cat.id)}
                            index={i}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>

            <div className="ae-divider" aria-hidden="true" />
        </section>
    )
}

export default AllianceEcosystem
