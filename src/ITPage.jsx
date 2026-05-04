import './App.css'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
)
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
)
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true)
        let startTime = null
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime
          const progress = Math.min((currentTime - startTime) / duration, 1)
          setCount(Math.floor(progress * end))
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
      }
    }, { threshold: 0.5 })
    if (countRef.current) observer.observe(countRef.current)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])
  return <span ref={countRef}>{count}{suffix}</span>
}

const SkillBar = ({ skill, level, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const barRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setTimeout(() => setIsVisible(true), delay)
    }, { threshold: 0.5 })
    if (barRef.current) observer.observe(barRef.current)
    return () => observer.disconnect()
  }, [delay])
  return (
    <div className="skill-bar-container" ref={barRef}>
      <div className="skill-bar-header">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div className="skill-bar-fill" style={{ width: isVisible ? `${level}%` : '0%' }} />
      </div>
    </div>
  )
}

function ITPage() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Make sections visible on scroll (same observer as main App)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.05 }
    )
    document.querySelectorAll('.section').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

  const skills = [
    { name: 'Network Administration', level: 90 },
    { name: 'ISP/WISP Operations', level: 90 },
    { name: 'Ubiquiti Products & Wireless Links', level: 92 },
    { name: 'Systems Support', level: 92 },
    { name: 'Firewall & Antivirus Administration', level: 85 },
    { name: 'Hardware Servicing & PC Repair', level: 90 },
    { name: 'User Account & Email Management', level: 88 },
    { name: 'Remote Troubleshooting', level: 90 },
    { name: 'Basic Linux & Cybersecurity Response', level: 78 },
    { name: 'IT Documentation & Reporting', level: 86 },
    { name: 'Basic HTML/Web Development', level: 75 },
    { name: 'Multimedia & Graphics Support', level: 82 },
  ]

  const experiences = [
    {
      role: 'Owner / ISP & WISP Operator',
      company: 'FRGS IT Solutions',
      period: '2021 - Present',
      location: 'Malita, Davao Occidental, Philippines',
      highlights: [
        'Operate and manage ISP/WISP services, including wireless network planning, installation, monitoring, and customer support.',
        'Deploy, configure, and troubleshoot Ubiquiti products for wireless links, access points, customer premises equipment, and network distribution.',
        'Maintain service reliability by diagnosing connectivity issues, optimizing signal quality, managing devices, and responding to outages.',
      ],
    },
    {
      role: 'IT Specialist / MIS',
      company: "Davao Famous Bakery Foods Inc. / Pizza Pedricos / Xantino's Pizza",
      period: 'June 2020 - Present',
      location: 'Davao Region, Philippines',
      highlights: [
        'Monitor and maintain CCTV, telephone systems, business networks, workstations, and internet-sharing performance.',
        'Install and configure operating systems, office applications, email browsers, peripherals, and workstation settings.',
        'Administer MIS operations, antivirus systems, user accounts, passwords, computer inventory, and audit reports.',
      ],
    },
    {
      role: 'IT Specialist / Staff',
      company: 'ASIAPRO Multi-Purpose Cooperative / TNALAK Labor Service Cooperative',
      period: 'January 2017 - March 2020',
      location: 'Davao Region, Philippines',
      highlights: [
        'Maintained computer systems, networks, firewall policies, backups, user access, and cooperative information systems.',
        'Supported IFOMS, data migration, active user reviews, workstation specifications, and technical service requests.',
        'Delivered remote and on-site branch support for departments and associate company locations.',
      ],
    },
    {
      role: 'IT / Encoder',
      company: 'San Miguel Consolidated Power Corporation',
      period: 'July 2016 - January 2017',
      location: 'Malita, Davao Occidental',
      highlights: [
        'Troubleshot printers, computers, and network issues for the main office while supporting ISO documentation.',
        'Created an ISO file management website and assisted departments with multimedia and document production.',
      ],
    },
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar glass-effect">
        <div className="nav-container">
          <div className="nav-brand">
            <Link to="/" className="logo it-back-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:'inline',marginRight:'6px',verticalAlign:'middle'}}>
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              Design Portfolio
            </Link>
            <span className="nav-badge"><span className="status-dot"></span>IT Professional</span>
          </div>
          <ul className="nav-links">
            <li><a href="#it-home">Home</a></li>
            <li><a href="#it-about">About</a></li>
            <li><a href="#it-experience">Experience</a></li>
            <li><a href="/Rego-Kier-Mongosera-IT-Network-Administrator-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume PDF</a></li>
            <li><a href="#it-contact">Contact</a></li>
            <li>
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
              </button>
            </li>
          </ul>
          <button className="theme-toggle mobile-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="it-home" className="hero hero-it">
        <div className="hero-bg-gradient"></div>
        <div className="hero-content">
          <img src="/images/profile/profile.jpg" alt="Rego Kier Mongosera" className="hero-profile-image" />
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name it-name">Rego Kier Mongosera</span>
          </h1>
          <p className="subtitle">IT Network Administrator · ISP/WISP Operator · Ubiquiti Specialist</p>
          <p className="description">
            IT professional with 8+ years of experience maintaining networks, computer systems, user accounts,
            endpoint security, CCTV, telephony, MIS operations, and wireless internet infrastructure.
          </p>
          <div className="social-links">
            <a href="mailto:mongosera@gmail.com" className="social-link" aria-label="Email"><EmailIcon /></a>
            <a href="https://www.linkedin.com/in/rego-kier-mongosera-426a6822b/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="https://fb.com/regolet" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><FacebookIcon /></a>
          </div>
          <div className="hero-cta">
            <a href="#it-experience" className="cta-button primary">View Experience</a>
            <a href="/Rego-Kier-Mongosera-IT-Network-Administrator-Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button secondary">Download Resume</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"><div className="wheel"></div></div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card glass-card"><div className="stat-number"><AnimatedCounter end={8} suffix="+" /></div><div className="stat-label">Years Experience</div></div>
            <div className="stat-card glass-card"><div className="stat-number"><AnimatedCounter end={4} suffix="+" /></div><div className="stat-label">Years ISP/WISP</div></div>
            <div className="stat-card glass-card"><div className="stat-number"><AnimatedCounter end={4} /></div><div className="stat-label">IT Organizations</div></div>
            <div className="stat-card glass-card"><div className="stat-number"><AnimatedCounter end={350} suffix="+" /></div><div className="stat-label">Training Hours</div></div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="it-about" className="section about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content-text-only">
            <div className="about-text">
              <p>
                I'm Rego Kier Mongosera, an IT specialist focused on keeping networks, workstations, user access,
                business systems, wireless internet services, and security tools available and performing reliably. I own
                FRGS IT Solutions, where I operate ISP/WISP services and work extensively with Ubiquiti products.
              </p>
              <p><strong>Professional focus areas:</strong></p>
              <div className="platform-cards">
                <div className="platform-card"><span className="platform-name">Network Operations</span><span className="platform-desc">LAN, internet sharing, firewall, CCTV, telephony</span></div>
                <div className="platform-card"><span className="platform-name">ISP/WISP Operations</span><span className="platform-desc">Wireless links, CPE, AP deployment, customer connectivity</span></div>
                <div className="platform-card"><span className="platform-name">Ubiquiti Expertise</span><span className="platform-desc">Device configuration, troubleshooting, monitoring, optimization</span></div>
                <div className="platform-card"><span className="platform-name">Systems Administration</span><span className="platform-desc">MIS, workstations, backups, accounts, email</span></div>
                <div className="platform-card"><span className="platform-name">End-User Support</span><span className="platform-desc">Remote helpdesk, repairs, installations, inventory</span></div>
                <div className="platform-card"><span className="platform-name">Security & Compliance</span><span className="platform-desc">Antivirus, USB scanning, user reviews, audit reports</span></div>
              </div>
              <div className="skills-section">
                <h4 className="skills-title">Skills & Expertise</h4>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill.name} level={skill.level} delay={index * 100} />
                  ))}
                </div>
              </div>
              <p>I bring a practical, service-oriented approach to IT: diagnose quickly, document clearly, protect systems, and keep users productive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="it-experience" className="section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-timeline">
            {experiences.map((exp) => (
              <article className="experience-card glass-card" key={`${exp.role}-${exp.period}`}>
                <div className="experience-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                    <p className="experience-location">{exp.location}</p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <ul className="experience-highlights">
                  {exp.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="resume-download-card glass-card">
            <div>
              <h3>Download the Full Resume</h3>
              <p>Includes detailed skills, education, certifications, training, and additional IT support experience.</p>
            </div>
            <a href="/Rego-Kier-Mongosera-IT-Network-Administrator-Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button primary">Open PDF</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="it-contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <div className="contact-item"><EmailIcon /><span>mongosera@gmail.com</span></div>
              <div className="contact-item"><span>Available for IT network administration, ISP/WISP, and systems support roles</span></div>
              <div className="contact-item"><span>Philippines</span></div>
              <div className="contact-item">
                <a href="/Rego-Kier-Mongosera-IT-Network-Administrator-Resume.pdf" target="_blank" rel="noopener noreferrer">View Resume PDF</a>
              </div>
              <div className="contact-specializations">
                <strong>Specializations:</strong>
                <ul>
                  <li>Network administration and maintenance</li>
                  <li>ISP/WISP operations and Ubiquiti products</li>
                  <li>Systems, hardware, and peripheral support</li>
                  <li>Firewall, antivirus, and backup administration</li>
                  <li>User account, email, and remote support</li>
                </ul>
              </div>
            </div>
            <form className="contact-form glass-card">
              <div className="form-group">
                <label htmlFor="it-name">Name</label>
                <input type="text" id="it-name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="it-email">Email</label>
                <input type="email" id="it-email" name="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="it-message">Message</label>
                <textarea id="it-message" name="message" rows="5" placeholder="Tell me about the role or IT support need..." required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Rego Kier Mongosera · IT Portfolio &nbsp;|&nbsp; <Link to="/" style={{color:'var(--color-primary)'}}>View Design Portfolio →</Link></p>
        </div>
      </footer>
    </div>
  )
}

export default ITPage
