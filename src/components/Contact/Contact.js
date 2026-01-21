// components/Contact.js
import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = ({ setActiveSection }) => {
  const contactRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('contact');
        }
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, [setActiveSection]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'navithajaisankar2005@gmail.com',
      link: 'mailto:navithajaisankar2005@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 8825822479',
      link: 'tel:+918825822479'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Mayiladuthurai, Tamil Nadu',
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/navithaj',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">06.</span>
            Get In Touch
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Work Together</h3>
              <p>
                I'm currently looking for new opportunities as a Java Developer. 
                Whether you have a project in mind or just want to say hello, 
                I'd love to hear from you!
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link} 
                  className="contact-item"
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <span className="contact-title">{item.title}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="availability-status">
              <div className="status-indicator available"></div>
              <span>Available for internships and full-time opportunities</span>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="contact-cta">
          <div className="cta-content">
            <h3>Ready to start your project?</h3>
            <p>Let's discuss how I can help bring your ideas to life.</p>
            <div className="cta-buttons">
              <a href="mailto:navithajaisankar2005@gmail.com" className="btn btn-primary">
                Email Me
              </a>
              <a href="#projects" className="btn btn-outline">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;