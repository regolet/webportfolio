import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [selectedGallery, setSelectedGallery] = useState(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  // Gallery data
  const galleries = {
    benafique: {
      title: "Benafique Portfolio Gallery",
      description: "A showcase of my digital portrait work created for Benafique platform, demonstrating various artistic styles and professional quality.",
      images: [
        { src: "/images/benafique/134666866_154818629756655_8162675739851721615_n.jpg", alt: "Benafique Portrait 1" },
        { src: "/images/benafique/134756959_154610896444095_8743057965242909823_n.jpg", alt: "Benafique Portrait 2" },
        { src: "/images/benafique/135179539_154818619756656_1347774845674547771_n.jpg", alt: "Benafique Portrait 3" },
        { src: "/images/benafique/135201875_154818656423319_7013189573141210360_n.jpg", alt: "Benafique Portrait 4" },
        { src: "/images/benafique/135307113_154818646423320_7022759632052491225_n.jpg", alt: "Benafique Portrait 5" },
        { src: "/images/benafique/136825798_162690138969504_1081430040988676386_n.jpg", alt: "Benafique Portrait 6" },
        { src: "/images/benafique/137535221_162696985635486_7530847570235496342_n.jpg", alt: "Benafique Portrait 7" },
        { src: "/images/benafique/138192697_164064458832072_4617485151502914369_n.jpg", alt: "Benafique Portrait 8" },
        { src: "/images/benafique/138825097_164060538832464_7100779006894881816_n.jpg", alt: "Benafique Portrait 9" },
        { src: "/images/benafique/139936781_166421318596386_8495543106502574344_n.jpg", alt: "Benafique Portrait 10" }
      ]
    },
    crownandpaw: {
      title: "Crown and Paw Portfolio Gallery",
      description: "A collection of custom pet portraits created for Crown and Paw, showcasing various themes, styles, and creative concepts that bring beloved pets to life as digital artwork.",
      images: [
        { src: "/images/crownandpaw/Renaissance_Collection_4_500x.webp", alt: "Renaissance Pet Portrait" },
        { src: "/images/crownandpaw/TheAristocrat2_8c8edd56-f1b4-46ed-9aba-547b4197dcda_375x.jpg", alt: "Aristocrat Pet Portrait" },
        { src: "/images/crownandpaw/pet_portrait_military_outfit_veteran_375x.webp", alt: "Military Pet Portrait" },
        { src: "/images/crownandpaw/atlas.aries.aussies_375x.webp", alt: "Australian Shepherd Portrait" },
        { src: "/images/crownandpaw/beatricemgolden_123721522_383477622844716_9103325890636000004_n_375x.jpg", alt: "Golden Retriever Portrait" },
        { src: "/images/crownandpaw/crownandpaw_109844584_1200002630342874_1492102714399702302_n_375x.jpg", alt: "Crown and Paw Featured Work" },
        { src: "/images/crownandpaw/iggy.coco_f01a3c16-73e3-4818-9a87-a0eb6a7fcfeb_375x.webp", alt: "Iggy Coco Pet Portrait" },
        { src: "/images/crownandpaw/talk_to_the_paw_98157855_566356017590475_725091166907302331_n_375x.webp", alt: "Talk to the Paw Design" },
        { src: "/images/crownandpaw/thegoldenlifeof2_375x.webp", alt: "Golden Life Pet Portrait" },
        { src: "/images/crownandpaw/KuboTheGeneral_375x.webp", alt: "Kubo The General Portrait" }
      ]
    },
    masterpieceme: {
      title: "Masterpiece Me Portfolio Gallery",
      description: "A collection of renaissance-style portraits and classical artwork created for Masterpiece Me, showcasing the fusion of classical art techniques with modern digital artistry.",
      images: [
        { src: "/images/masterpieceme/TheArcherBG3-CanvasonFloor_300x.avif", alt: "The Archer Renaissance Portrait" },
        { src: "/images/masterpieceme/TheDwarfBG4-CanvasonFloor_300x.avif", alt: "The Dwarf Classical Portrait" },
        { src: "/images/masterpieceme/TheSwordsmanBG4-CanvasonFloor_300x.avif", alt: "The Swordsman Renaissance Art" },
        { src: "/images/masterpieceme/TheWhiteSorcererBG1-CanvasonFloor_300x.avif", alt: "The White Sorcerer Portrait" },
        { src: "/images/masterpieceme/TheStepBrothersPosterMockUp_300x.avif", alt: "The Step Brothers Poster" },
        { src: "/images/masterpieceme/145563982_1152554785181571_5536826764487585550_n_300x.avif", alt: "Masterpiece Me Featured Work" },
        { src: "/images/masterpieceme/divineindc_118286570_335551904292831_2863370620445534766_n_300x.avif", alt: "Divine DC Renaissance Portrait" },
        { src: "/images/masterpieceme/homesweethazel_113058249_122380609250351_4347520818081672827_n_300x.avif", alt: "Home Sweet Hazel Portrait" },
        { src: "/images/masterpieceme/mar.torosian_118167732_228170102050720_7309799743468610605_n_300x.avif", alt: "Mar Torosian Classical Portrait" },
        { src: "/images/masterpieceme/sonia.zubareva_102812657_4460477710644608_8846720010770244238_n_300x.avif", alt: "Sonia Zubareva Renaissance Art" },
        { src: "/images/masterpieceme/therealmamaofstaten_island_123329599_405362310478938_6134187370111676335_n_300x.avif", alt: "Staten Island Mama Portrait" },
        { src: "/images/masterpieceme/varneyfamily_126463819_166871051760128_6891284726816486829_n_300x.avif", alt: "Varney Family Renaissance Portrait" }
      ]
    },
    tellmytale: {
      title: "Tell My Tale Portfolio Gallery",
      description: "A collection of story visualizations and book designs created for Tell My Tale platform, transforming personal stories into engaging visual narratives and children's book illustrations.",
      images: [
        { src: "/images/tellmytale/BookMockup_6-I.webp", alt: "Tell My Tale Book Mockup" },
        { src: "/images/tellmytale/Book_Mockup_3.2-AA_1.webp", alt: "Animal Adventure Book Design" },
        { src: "/images/tellmytale/TMT_anima_l_adventure_Boy.webp", alt: "Animal Adventure Character Design" },
        { src: "/images/tellmytale/Romy-AnimalAdventure.webp", alt: "Romy Animal Adventure Story" },
        { src: "/images/tellmytale/banner_2.webp", alt: "Tell My Tale Banner Design" },
        { src: "/images/tellmytale/2.webp", alt: "Tell My Tale Story Illustration" }
      ]
    },
    tailoredcanvases: {
      title: "Tailored Canvases Portfolio Gallery",
      description: "Custom canvas artwork and personalized designs that showcase artistic versatility and attention to detail in creating unique, tailored visual pieces.",
      images: [
        { src: "/images/tailoredcanvases/1_2_1_large.webp", alt: "Custom Canvas Design 1" },
        { src: "/images/tailoredcanvases/1_b85d7d2b-b968-42e3-adcd-231cfe8d244a_1_large.webp", alt: "Custom Canvas Design 2" },
        { src: "/images/tailoredcanvases/2_1778fabd-d109-45d2-b42c-0aaf0bd9ab51_1_large.webp", alt: "Custom Canvas Design 3" },
        { src: "/images/tailoredcanvases/v1_1_2a2e91c0-87e0-4c70-89c5-c117affbb5cd_large.webp", alt: "Tailored Canvas Artwork" }
      ]
    },
    wonderme: {
      title: "Wonder Me Portfolio Gallery",
      description: "Creative and personalized artwork created for Wonder Me platform, showcasing diverse artistic styles and custom design solutions that bring imagination to life.",
      images: [
        { src: "/images/wonderme/1_6.webp", alt: "Wonder Me Creative Design 1" },
        { src: "/images/wonderme/2_5.webp", alt: "Wonder Me Creative Design 2" },
        { src: "/images/wonderme/BatelAd-IMG1_aea88fbd-d8e6-4c84-96fe-06f15e71fc59.webp", alt: "Batel Advertisement Design 1" },
        { src: "/images/wonderme/BatelAd-IMG2_7fd04ff5-347f-4e0e-85dc-41fce4e8e627.webp", alt: "Batel Advertisement Design 2" },
        { src: "/images/wonderme/RachelEdel-IMG4.webp", alt: "Rachel Edel Custom Design" },
        { src: "/images/wonderme/TheMermaid_1.webp", alt: "The Mermaid Artwork 1" },
        { src: "/images/wonderme/TheMermaid_2.webp", alt: "The Mermaid Artwork 2" },
        { src: "/images/wonderme/WM-1004-A_35729df3-cff5-4b93-887b-ff513fc1d65b.webp", alt: "Wonder Me Design WM-1004-A" },
        { src: "/images/wonderme/WM-1004-B_5bbfa436-96a0-4f93-9558-87bc341f2426.webp", alt: "Wonder Me Design WM-1004-B" },
        { src: "/images/wonderme/WM-1011A.webp", alt: "Wonder Me Design WM-1011A" },
        { src: "/images/wonderme/WM-1011b.webp", alt: "Wonder Me Design WM-1011B" },
        { src: "/images/wonderme/Yana-IMG1_63b05456-a182-4bb1-b240-228f38906d9a.webp", alt: "Yana Custom Design" }
      ]
    }
  }

  const openGallery = (galleryType) => {
    setSelectedGallery(galleryType)
    setIsGalleryOpen(true)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
    setSelectedGallery(null)
  }
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
          <img 
            src="/images/profile/profile.jpg" 
            alt="Rego Kier Mongosera Profile" 
            className="hero-profile-image"
          />
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
          <div className="about-content-text-only">
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
            
            {/* Gallery Cards First - Priority */}
            <div className="portfolio-item" onClick={() => openGallery('benafique')} style={{cursor: 'pointer'}}>
              <img 
                src="/images/benafique/134666866_154818629756655_8162675739851721615_n.jpg" 
                alt="Minimalist Digital Portrait - Benafique" 
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
                <div className="view-gallery-btn">Click to View Gallery</div>
              </div>
            </div>

            <div className="portfolio-item" onClick={() => openGallery('crownandpaw')} style={{cursor: 'pointer'}}>
              <img 
                src="/images/crownandpaw/Renaissance_Collection_4_500x.webp" 
                alt="Custom Pet Portrait - Crown and Paw" 
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
                  <span className="tag">Crown and Paw</span>
                </div>
                <div className="view-gallery-btn">Click to View Gallery</div>
              </div>
            </div>

            <div className="portfolio-item" onClick={() => openGallery('masterpieceme')} style={{cursor: 'pointer'}}>
              <img 
                src="/images/masterpieceme/TheArcherBG3-CanvasonFloor_300x.avif" 
                alt="Renaissance Style Portrait - Masterpiece Me" 
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
                  <span className="tag">Masterpiece Me</span>
                </div>
                <div className="view-gallery-btn">Click to View Gallery</div>
              </div>
            </div>

            <div className="portfolio-item" onClick={() => openGallery('tellmytale')} style={{cursor: 'pointer'}}>
              <img 
                src="/images/tellmytale/BookMockup_6-I.webp" 
                alt="Tell My Tale - Story Visualizations" 
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
                  <span className="tag">Tell My Tale</span>
                </div>
                <div className="view-gallery-btn">Click to View Gallery</div>
              </div>
            </div>

            <div className="portfolio-item" onClick={() => openGallery('tailoredcanvases')} style={{cursor: 'pointer'}}>
              <img 
                src="/images/tailoredcanvases/1_2_1_large.webp" 
                alt="Tailored Canvases - Custom Artwork" 
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <h3 className="portfolio-title">Tailored Canvases - Custom Artwork</h3>
                <p className="portfolio-description">
                  Specialized custom canvas artwork and visual designs that capture unique artistic visions, 
                  creating personalized pieces that reflect individual creativity and artistic expression.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">Custom Canvases</span>
                  <span className="tag">Personalized Art</span>
                  <span className="tag">Creative Design</span>
                </div>
                <div className="view-gallery-btn">Click to View Gallery</div>
              </div>
            </div>

            <div className="portfolio-item" onClick={() => openGallery('wonderme')} style={{cursor: 'pointer'}}>
              <img 
                src="/images/wonderme/TheMermaid_1.webp" 
                alt="Wonder Me - Creative Artwork" 
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <h3 className="portfolio-title">Wonder Me - Creative Artwork</h3>
                <p className="portfolio-description">
                  Imaginative and personalized designs created for Wonder Me platform, featuring diverse artistic styles 
                  from fantasy themes to custom portraits that bring creative visions to life.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">Wonder Me</span>
                  <span className="tag">Creative Design</span>
                  <span className="tag">Fantasy Art</span>
                </div>
                <div className="view-gallery-btn">Click to View Gallery</div>
              </div>
            </div>

            {/* Additional Portfolio Items */}

            {/* Additional Portfolio Items */}
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
                src="/images/benafique/135593143_158934762678375_8701891166037523321_n.jpg" 
                alt="Creative Portrait Designs" 
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <h3 className="portfolio-title">Creative Portrait Designs</h3>
                <p className="portfolio-description">
                  Innovative and creative portrait designs showcasing artistic versatility 
                  and technical expertise in digital portrait creation for Benafique clients.
                </p>
                <div className="portfolio-tags">
                  <span className="tag">Creative Design</span>
                  <span className="tag">Artistic</span>
                  <span className="tag">Benafique</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {isGalleryOpen && selectedGallery && (
        <div className="gallery-modal-overlay" onClick={closeGallery}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-modal-header">
              <h2>{galleries[selectedGallery].title}</h2>
              <button className="close-button" onClick={closeGallery}>×</button>
            </div>
            <p className="gallery-modal-description">{galleries[selectedGallery].description}</p>
            <div className="gallery-modal-grid">
              {galleries[selectedGallery].images.map((image, index) => (
                <div key={index} className="gallery-modal-item">
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
