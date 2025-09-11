import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe sections and portfolio items
    const sections = document.querySelectorAll('.section')
    const portfolioItems = document.querySelectorAll('.portfolio-item')
    
    sections.forEach(section => observer.observe(section))
    portfolioItems.forEach(item => observer.observe(item))

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a')
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = link.getAttribute('href')
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })

    // Cleanup
    return () => {
      sections.forEach(section => observer.unobserve(section))
      portfolioItems.forEach(item => observer.unobserve(item))
    }
  }, [])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">Rego Mongosera</a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Rego Kier Mongosera</h1>
          <p className="subtitle">Professional Graphic Artist & Digital Portrait Specialist</p>
          <p className="description">
            With 8 years of experience in graphic design, I specialize in creating stunning digital portraits, 
            custom pet portraits, and renaissance-style artwork. I'm passionate about bringing creative visions to life 
            through expert photo editing and cutting-edge AI image generation.
          </p>
          <a href="#portfolio" className="cta-button">Explore My Work</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
              alt="Profile" 
              className="about-image"
            />
            <div className="about-text">
              <p>
                I'm Rego Kier Mongosera, a dedicated graphic artist with 8 years of professional experience 
                specializing in digital portraits and photo manipulation. I've had the privilege of working with 
                multiple leading online portrait companies, creating thousands of custom artworks for clients worldwide.
              </p>
              <p>
                <strong>Platforms I've worked with:</strong>
              </p>
              <ul style={{marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8'}}>
                <li><strong>Benafique.com</strong> - Minimalist digital portraits</li>
                <li><strong>CrownandPaw.com</strong> - Custom pet portraits</li>
                <li><strong>MasterpieceMe.co</strong> - Renaissance portraits</li>
                <li><strong>TellMyTale.com</strong> - Story visualizations</li>
                <li><strong>WonderMe.com</strong> - Custom artwork</li>
              </ul>
              <p>
                I'm proficient in the complete Adobe Creative Suite including Photoshop, Illustrator, Lightroom, 
                as well as modern design tools like CapCut for video editing and Canva for quick design solutions, 
                plus 3D modeling with SketchUp.
              </p>
              
              <div style={{marginTop: '2rem'}}>
                <h4 style={{marginBottom: '1rem', color: '#333'}}>Skills & Expertise</h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '400px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: '500'}}>Adobe Photoshop</span>
                    <div style={{display: 'flex', gap: '2px'}}>
                      <span style={{color: '#fbbf24', fontSize: '1.2rem'}}>★★★★★★★★★</span>
                      <span style={{color: '#d1d5db', fontSize: '1.2rem'}}>★</span>
                      <span style={{marginLeft: '0.5rem', fontSize: '0.9rem', color: '#666'}}>9/10</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: '500'}}>Adobe Illustrator</span>
                    <div style={{display: 'flex', gap: '2px'}}>
                      <span style={{color: '#fbbf24', fontSize: '1.2rem'}}>★★★★★★★★</span>
                      <span style={{color: '#d1d5db', fontSize: '1.2rem'}}>★★</span>
                      <span style={{marginLeft: '0.5rem', fontSize: '0.9rem', color: '#666'}}>8/10</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: '500'}}>Adobe Lightroom</span>
                    <div style={{display: 'flex', gap: '2px'}}>
                      <span style={{color: '#fbbf24', fontSize: '1.2rem'}}>★★★★★★★</span>
                      <span style={{color: '#d1d5db', fontSize: '1.2rem'}}>★★★</span>
                      <span style={{marginLeft: '0.5rem', fontSize: '0.9rem', color: '#666'}}>7/10</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: '500'}}>CapCut Video Editing</span>
                    <div style={{display: 'flex', gap: '2px'}}>
                      <span style={{color: '#fbbf24', fontSize: '1.2rem'}}>★★★★★★★★</span>
                      <span style={{color: '#d1d5db', fontSize: '1.2rem'}}>★★</span>
                      <span style={{marginLeft: '0.5rem', fontSize: '0.9rem', color: '#666'}}>8/10</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: '500'}}>Canva Design</span>
                    <div style={{display: 'flex', gap: '2px'}}>
                      <span style={{color: '#fbbf24', fontSize: '1.2rem'}}>★★★★★★★★★</span>
                      <span style={{color: '#d1d5db', fontSize: '1.2rem'}}>★</span>
                      <span style={{marginLeft: '0.5rem', fontSize: '0.9rem', color: '#666'}}>9/10</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: '500'}}>SketchUp 3D Modeling</span>
                    <div style={{display: 'flex', gap: '2px'}}>
                      <span style={{color: '#fbbf24', fontSize: '1.2rem'}}>★★★★★★★</span>
                      <span style={{color: '#d1d5db', fontSize: '1.2rem'}}>★★★</span>
                      <span style={{marginLeft: '0.5rem', fontSize: '0.9rem', color: '#666'}}>7/10</span>
                    </div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: '500'}}>AI Image Generation</span>
                    <div style={{display: 'flex', gap: '2px'}}>
                      <span style={{color: '#fbbf24', fontSize: '1.2rem'}}>★★★★★★★★</span>
                      <span style={{color: '#d1d5db', fontSize: '1.2rem'}}>★★</span>
                      <span style={{marginLeft: '0.5rem', fontSize: '0.9rem', color: '#666'}}>8/10</span>
                    </div>
                  </div>
                </div>
                
                <div style={{marginTop: '1.5rem'}}>
                  <h5 style={{marginBottom: '0.8rem', color: '#333', fontSize: '1rem'}}>Additional Tools & Platforms</h5>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '0.3rem', maxWidth: '400px'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <span style={{fontWeight: '500', color: '#666'}}>• Microsoft Office</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <span style={{fontWeight: '500', color: '#666'}}>• Notion</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <span style={{fontWeight: '500', color: '#666'}}>• Hubstaff</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <span style={{fontWeight: '500', color: '#666'}}>• Slack</span>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                I pride myself on delivering high-quality services with keen attention to detail, consistently 
                earning 5-star ratings from clients. My goal is to utilize my skills in a full-time position 
                where I can continue growing as a graphic artist while contributing to innovative digital projects 
                across diverse creative platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <div className="container">
          <h2 className="section-title">My Portfolio</h2>
          <div className="portfolio-grid">
            
            <div className="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop" 
                alt="Digital Portrait" 
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <h3 className="portfolio-title">Minimalist Digital Portraits</h3>
                <p className="portfolio-description">
                  Custom minimalist digital portraits created for Benafique, one of the best-selling 
                  digital portrait platforms online. Each piece is crafted with precision using Photoshop and Illustrator.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">Digital Portraits</span>
                  <span className="tag">Minimalist Style</span>
                  <span className="tag">Photoshop</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop" 
                alt="Pet Portrait" 
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <h3 className="portfolio-title">Custom Pet Portraits</h3>
                <p className="portfolio-description">
                  Professional pet portrait artwork created for Crown and Paw, transforming beloved 
                  pets into stunning digital art pieces using advanced photo manipulation techniques.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">Pet Portraits</span>
                  <span className="tag">Photo Editing</span>
                  <span className="tag">Digital Art</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop" 
                alt="Renaissance Portrait" 
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <h3 className="portfolio-title">Renaissance Style Portraits</h3>
                <p className="portfolio-description">
                  Elegant renaissance-style portraits created for Masterpiece Me, combining classical 
                  art aesthetics with modern digital techniques to create timeless masterpieces.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">Renaissance Art</span>
                  <span className="tag">Classical Style</span>
                  <span className="tag">Photo Manipulation</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop" 
                alt="3D Modeling" 
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <h3 className="portfolio-title">3D Modeling & Design</h3>
                <p className="portfolio-description">
                  Architectural and product visualizations created using SketchUp, showcasing 
                  technical precision and creative design solutions for various client projects.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">3D Modeling</span>
                  <span className="tag">SketchUp</span>
                  <span className="tag">Visualization</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&h=400&fit=crop" 
                alt="Photo Manipulation" 
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <h3 className="portfolio-title">Advanced Photo Manipulation</h3>
                <p className="portfolio-description">
                  Complex photo editing and manipulation projects demonstrating expertise in 
                  color correction, compositing, and creative digital enhancement techniques.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">Photo Editing</span>
                  <span className="tag">Manipulation</span>
                  <span className="tag">Color Grading</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop" 
                alt="Canva Design" 
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <h3 className="portfolio-title">Quick Design Solutions with Canva</h3>
                <p className="portfolio-description">
                  Efficient and creative design solutions using Canva for social media graphics, 
                  marketing materials, and quick turnaround projects with professional results.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">Canva Design</span>
                  <span className="tag">Quick Solutions</span>
                  <span className="tag">Social Media</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop" 
                alt="Video Editing" 
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <h3 className="portfolio-title">Video Production & Editing</h3>
                <p className="portfolio-description">
                  Creative video editing and motion graphics projects utilizing CapCut for dynamic 
                  video content creation and engaging multimedia presentations with professional quality.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">Video Editing</span>
                  <span className="tag">CapCut</span>
                  <span className="tag">Motion Graphics</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=600&h=400&fit=crop" 
                alt="Tell My Tale" 
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <h3 className="portfolio-title">Tell My Tale - Story Visualizations</h3>
                <p className="portfolio-description">
                  Creative visual storytelling and graphic design work for Tell My Tale platform, 
                  bringing personal stories to life through compelling visual narratives and artistic interpretation.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">Story Visualization</span>
                  <span className="tag">Creative Design</span>
                  <span className="tag">Visual Storytelling</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop" 
                alt="Wonder Me" 
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <h3 className="portfolio-title">Wonder Me - Custom Artwork</h3>
                <p className="portfolio-description">
                  Specialized graphic design services for Wonder Me platform, creating unique 
                  custom artwork and visual designs that capture the essence of individual creativity and wonder.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">Custom Artwork</span>
                  <span className="tag">Creative Design</span>
                  <span className="tag">Digital Art</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop" 
                alt="AI Image Generation" 
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <h3 className="portfolio-title">AI Image Generation & Enhancement</h3>
                <p className="portfolio-description">
                  Cutting-edge AI-powered image generation and enhancement services, creating unique 
                  artwork and improving existing images using advanced artificial intelligence tools and techniques.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">AI Generation</span>
                  <span className="tag">Image Enhancement</span>
                  <span className="tag">Innovation</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <div className="contact-item">
                <span>regomongosera@gmail.com</span>
              </div>
              <div className="contact-item">
                <span>Available for freelance projects</span>
              </div>
              <div className="contact-item">
                <span>Philippines</span>
              </div>
              <div className="contact-item">
                <span>
                  <a href="https://drive.google.com/drive/folders/1JxCWQT6oNLnxweHTFq0q7Jx3-1adSB87?usp=sharing" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     style={{color: '#60a5fa', textDecoration: 'none'}}>
                    View Portfolio Drive
                  </a>
                </span>
              </div>
              <div className="contact-item" style={{marginTop: '1.5rem'}}>
                <strong>Specializations:</strong>
              </div>
              <div style={{marginLeft: '1rem', fontSize: '0.9rem'}}>
                <div>• Digital Portraits & Illustrations</div>
                <div>• Photo Editing & Manipulation</div>
                <div>• Adobe Creative Suite (Photoshop, Illustrator, Lightroom)</div>
                <div>• CapCut Video Editing & Canva Design</div>
                <div>• 3D Modeling (SketchUp)</div>
                <div>• AI Image Generation & Enhancement</div>
                <div>• Project Management (Notion, Hubstaff, Slack)</div>
              </div>
            </div>
            
            <form className="contact-form">
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
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
