import './App.css'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

// ── Icons ───────────────────────────────────────────────────────────────────
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
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

// ── Animated Counter ────────────────────────────────────────────────────────
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

// ── Design Skill Bar ────────────────────────────────────────────────────────
const SkillBar = ({ skill, level, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const barRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setTimeout(() => setIsVisible(true), delay)
    }, { threshold: 0.3 })
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

// ── Main App ────────────────────────────────────────────────────────────────
function App() {
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

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.section, .portfolio-item').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const designSkills = [
    { name: 'Adobe Photoshop', level: 88 },
    { name: 'Adobe Illustrator', level: 82 },
    { name: 'Adobe Lightroom', level: 85 },
    { name: 'Canva', level: 95 },
    { name: 'CapCut (Video Editing)', level: 80 },
    { name: 'SketchUp (3D / Layout)', level: 72 },
  ]

  const portfolioCategories = [
    {
      icon: '🎨',
      title: 'Logo & Brand Design',
      desc: 'Clean, memorable identities crafted in Illustrator & Photoshop — from concept to final vector.',
      tags: ['Illustrator', 'Photoshop', 'Branding'],
    },
    {
      icon: '📱',
      title: 'Social Media Graphics',
      desc: 'Eye-catching posts, stories, and banners optimized for Facebook, Instagram, and more.',
      tags: ['Canva', 'Photoshop', 'Content'],
    },
    {
      icon: '📸',
      title: 'Photo Editing & Retouching',
      desc: 'Professional color grading, skin retouching, and background compositing in Lightroom & Photoshop.',
      tags: ['Lightroom', 'Photoshop', 'Editing'],
    },
    {
      icon: '🎬',
      title: 'Video Thumbnails & Reels',
      desc: 'Engaging video covers and short-form content edits with motion graphics using CapCut.',
      tags: ['CapCut', 'Design', 'Video'],
    },
    {
      icon: '📄',
      title: 'Flyers & Print Materials',
      desc: 'Event flyers, menus, certificates, and promotional layouts ready for both print and digital use.',
      tags: ['Canva', 'Illustrator', 'Print'],
    },
    {
      icon: '🏗️',
      title: 'Layout & 3D Visualization',
      desc: 'Floor plan layouts and basic 3D space planning using SketchUp for project presentations.',
      tags: ['SketchUp', '3D', 'Layout'],
    },
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar glass-effect">
        <div className="nav-container">
          <div className="nav-brand">
            <a href="#home" className="logo">Rego Kier Mongosera</a>
            <span className="nav-badge"><span className="status-dot"></span>Open for Projects</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <Link to="/it" className="nav-it-link">IT Resume →</Link>
            </li>
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
      <section id="home" className="hero">
        <div className="hero-bg-gradient"></div>
        <div className="hero-content">
          <img src="/images/profile/profile.jpg" alt="Rego Kier Mongosera" className="hero-profile-image" />
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Rego Kier Mongosera</span>
          </h1>
          <p className="subtitle">Graphic Artist · Multimedia Designer · Visual Content Creator</p>
          <p className="description">
            Creative professional with a passion for visual storytelling — crafting logos, social graphics,
            photo edits, and multimedia content that communicate, captivate, and convert.
          </p>
          <div className="social-links">
            <a href="mailto:mongosera@gmail.com" className="social-link" aria-label="Email"><EmailIcon /></a>
            <a href="https://www.linkedin.com/in/rego-kier-mongosera-426a6822b/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="https://fb.com/regolet" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><FacebookIcon /></a>
            <a href="https://www.instagram.com/rkmongosera/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><InstagramIcon /></a>
          </div>
          <div className="hero-cta">
            <a href="#portfolio" className="cta-button primary">View My Work</a>
            <a href="#contact" className="cta-button secondary">Get in Touch</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"><div className="wheel"></div></div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* Tagline strip */}
      <section className="trusted-by-section">
        <div className="container">
          <p className="trusted-by-label">Photoshop · Illustrator · Lightroom · Canva · CapCut · SketchUp · Multimedia Production</p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card glass-card"><div className="stat-number"><AnimatedCounter end={8} suffix="+" /></div><div className="stat-label">Years Experience</div></div>
            <div className="stat-card glass-card"><div className="stat-number"><AnimatedCounter end={6} suffix="+" /></div><div className="stat-label">Design Tools</div></div>
            <div className="stat-card glass-card"><div className="stat-number"><AnimatedCounter end={4} /></div><div className="stat-label">Organizations Served</div></div>
            <div className="stat-card glass-card"><div className="stat-number"><AnimatedCounter end={100} suffix="+" /></div><div className="stat-label">Projects Completed</div></div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content-text-only">
            <div className="about-text">
              <p>
                I'm a graphic artist and multimedia designer based in the Philippines. Over the years I've supported
                organizations with everything from brand identity and social media graphics to photo retouching, video
                thumbnails, safety signage, and printed materials — always keeping the visual communication clear and compelling.
              </p>
              <p>
                My design work runs alongside my IT career, where I've served as IT Specialist and MIS for multiple
                organizations. This dual background means I understand both the technical constraints and the creative
                opportunities in digital media.
              </p>

              {/* Design Skills */}
              <div className="skills-section">
                <h4 className="skills-title">Design Skills</h4>
                <div className="skills-grid">
                  {designSkills.map((skill, i) => (
                    <SkillBar key={skill.name} skill={skill.name} level={skill.level} delay={i * 120} />
                  ))}
                </div>
              </div>

              {/* IT cross-link card */}
              <div className="it-crosslink-card glass-card">
                <div className="it-crosslink-icon">💻</div>
                <div className="it-crosslink-text">
                  <h4>Also an IT Professional</h4>
                  <p>8+ years as an IT Network Administrator, ISP/WISP Operator & Ubiquiti Specialist. View my full IT resume and tech experience.</p>
                </div>
                <Link to="/it" className="cta-button primary it-crosslink-btn">View IT Portfolio →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio" className="section">
        <div className="container">
          <h2 className="section-title">Portfolio Showcase</h2>
          <p className="section-subtitle">A sample of what I create — from brand visuals to multimedia content</p>

          {/* Banner image */}
          <div className="portfolio-banner-wrap">
            <img src="/images/design-banner.png" alt="Design portfolio showcase" className="portfolio-banner-img" />
          </div>

          {/* Category cards */}
          <div className="portfolio-grid">
            {portfolioCategories.map((cat) => (
              <div className="portfolio-card glass-card" key={cat.title}>
                <div className="portfolio-card-icon">{cat.icon}</div>
                <h3 className="portfolio-card-title">{cat.title}</h3>
                <p className="portfolio-card-desc">{cat.desc}</p>
                <div className="portfolio-card-tags">
                  {cat.tags.map(tag => <span key={tag} className="portfolio-tag">{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Work Together</h3>
              <div className="contact-item"><EmailIcon /><span>mongosera@gmail.com</span></div>
              <div className="contact-item"><span>Available for graphic design, multimedia, and visual content projects</span></div>
              <div className="contact-item"><span>Philippines</span></div>
              <div className="contact-specializations">
                <strong>Services offered:</strong>
                <ul>
                  <li>Logo & brand identity design</li>
                  <li>Social media graphics & content</li>
                  <li>Photo editing & retouching</li>
                  <li>Video thumbnails & short edits</li>
                  <li>Flyers, posters & print materials</li>
                </ul>
              </div>
              <div className="contact-item" style={{marginTop:'1.5rem'}}>
                <Link to="/it" style={{color:'var(--color-primary)', fontWeight:600}}>Also looking for IT services? View IT Portfolio →</Link>
              </div>
            </div>
            <form className="contact-form glass-card">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Rego Kier Mongosera · Graphic Artist &nbsp;|&nbsp; <Link to="/it" style={{color:'var(--color-primary)'}}>IT Portfolio →</Link></p>
        </div>
      </footer>
    </div>
  )
}

export default App
