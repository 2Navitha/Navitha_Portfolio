// components/Hero.js
import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = ({ setActiveSection }) => {
  const heroRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('home');
        }
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, [setActiveSection]);

  // Function to handle resume download
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    
    // Path to your resume file in the public folder
    link.href = '/resume.pdf';
    
    // Set the download attribute with filename
    link.download = 'Navitha_J_Resume.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text" ref={textRef}>
            <div className="greeting">Hello, I'm</div>
            <h1 className="hero-name">
              <span className="name-gradient">Navitha J</span>
            </h1>
            <h2 className="hero-title">
              Java Full Stack <span className="highlight">Developer</span>
            </h2>
            <p className="hero-description">
              Passionate final-year Computer Science Engineering student specializing in 
              Java Full Stack Development. I create robust, scalable applications with 
              clean code and modern technologies.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">Certifications</div>
              </div>
              <div className="stat">
                <div className="stat-number">3</div>
                <div className="stat-label">Internships</div>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View My Work</span>
                <div className="btn-hover-effect"></div>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Get In Touch</span>
              </a>
              <button onClick={handleDownloadResume} className="btn btn-outline">
                <span>Download CV</span>
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-container">
              <div className="profile-card">
                <div className="profile-image">
                  {/* Replace with your actual profile photo path */}
                  <img 
                    src="/pic.jpg" 
                    alt="Navitha J - Java Full Stack Developer"
                    className="profile-photo"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="profile-placeholder">
                    <div className="placeholder-icon">NJ</div>
                  </div>
                  <div className="profile-glow"></div>
                </div>
                
                {/* Status indicator */}
                <div className="profile-status">
                  <div className="status-dot"></div>
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;