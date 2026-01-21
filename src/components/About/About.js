// components/About.js
import React, { useEffect, useRef } from 'react';
import './About.css';

const About = ({ setActiveSection }) => {
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('about');
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, [setActiveSection]);

  const achievements = [
    { 
      number: '1st', 
      title: 'Play with Logic Competition', 
      description: 'Nehru Engineering College, Coimbatore',
      icon: '🏆'
    },
    { 
      number: '10+', 
      title: 'Professional Certifications', 
      description: 'Java & Full Stack Development',
      icon: '📜'
    },
    { 
      number: '100%', 
      title: 'Project Completion', 
      description: 'Academic & Personal Projects',
      icon: '🚀'
    }
  ];

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">01.</span>
            About Me
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-main">
              <p className="lead">
                Hello! I'm <strong>Navitha J</strong>, a passionate and dedicated{' '}
                <strong>Java Full Stack Developer</strong> currently pursuing my final year in 
                Computer Science and Engineering at Mahendra Engineering College.
              </p>
              
              <p>
                My journey in software development began with a fascination for problem-solving 
                and a curiosity about how digital systems work. This passion led me to explore 
                various programming languages and technologies, eventually specializing in{' '}
                <strong>Java-based full-stack development</strong>.
              </p>

              <p>
                I have hands-on experience in building robust, scalable applications using 
                modern technologies. My expertise spans from designing efficient backend 
                systems with <strong>Spring Boot</strong> and <strong>Hibernate</strong> to 
                creating responsive frontend interfaces with <strong>React</strong> and 
                <strong> modern JavaScript</strong>.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🚀</div>
                  <div className="highlight-content">
                    <h4>Fast Learner & Adaptable</h4>
                    <p>Quick to master new technologies and frameworks with proven ability to adapt to evolving project requirements</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🔧</div>
                  <div className="highlight-content">
                    <h4>Problem Solver</h4>
                    <p>Strong analytical thinking with expertise in debugging complex issues and implementing efficient solutions</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🌟</div>
                  <div className="highlight-content">
                    <h4>Quality Focused</h4>
                    <p>Committed to writing clean, maintainable code following best practices and design patterns</p>
                  </div>
                </div>
              </div>

              <div className="passion-section">
                <h3>My Passion for Development</h3>
                <p>
                  What drives me is the ability to transform ideas into functional, user-friendly 
                  applications. I enjoy the entire development lifecycle - from conceptualization 
                  and design to implementation and deployment. Each project is an opportunity to 
                  learn, innovate, and create something meaningful.
                </p>
                <p>
                  I'm particularly passionate about <strong>backend architecture</strong> and 
                  <strong> system design</strong>, always striving to build applications that 
                  are not just functional but also scalable, secure, and efficient.
                </p>
              </div>

              <div className="learning-section">
                <h3>Continuous Learning</h3>
                <p>
                  I believe in staying updated with the latest industry trends and technologies. 
                  Currently, I'm exploring <strong>cloud technologies</strong> and 
                  <strong> advanced system design principles</strong> to enhance my skills 
                  and deliver even better solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="achievements-section">
              <h3 className="sidebar-title">Achievements & Milestones</h3>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-header">
                      <div className="achievement-icon">{achievement.icon}</div>
                      <div className="achievement-number">{achievement.number}</div>
                    </div>
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-desc">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="interests-section">
              <h3 className="sidebar-title">Beyond Coding</h3>
              <div className="interests-grid">
                <div className="interest-item">
                  <div className="interest-icon">📚</div>
                  <div className="interest-content">
                    <h4>Tech Reading</h4>
                    <p>Exploring latest tech blogs and documentation</p>
                  </div>
                </div>
                <div className="interest-item">
                  <div className="interest-icon">🧩</div>
                  <div className="interest-content">
                    <h4>Problem Solving</h4>
                    <p>Solving coding challenges and puzzles</p>
                  </div>
                </div>
                <div className="interest-item">
                  <div className="interest-icon">🌐</div>
                  <div className="interest-content">
                    <h4>Open Source</h4>
                    <p>Contributing to community projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;