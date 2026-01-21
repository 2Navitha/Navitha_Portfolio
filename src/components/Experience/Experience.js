// components/Experience.js
import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = ({ setActiveSection }) => {
  const experienceRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('experience');
        }
      },
      { threshold: 0.3 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, [setActiveSection]);

  const experiences = [
    {
      id: 1,
      role: "Salesforce Developer Virtual Internship",
      company: "Smart Bridge & AICTE",
      period: "May 2024 - June 2024",
      duration: "2 months",
      location: "Remote",
      description: "Acquired comprehensive practical experience in Salesforce development ecosystem including Apex programming, Lightning Web Components, and process automation.",
      achievements: [
        "Achieved Salesforce Super Badges: Apex Specialist, Process Automation Specialist, and Developer Super Set",
        "Developed custom Salesforce applications using Apex and Lightning Web Components",
        "Implemented process automation solutions to streamline business operations",
        "Gained expertise in Salesforce security and debugging techniques"
      ],
      technologies: ["Salesforce", "Apex", "LWC", "Process Automation", "SOQL"],
      type: "internship"
    },
    {
      id: 2,
      role: "Java Developer Intern",
      company: "Spartton Tech Solution",
      period: "2023",
      duration: "3 months",
      location: "Remote",
      description: "Gained hands-on experience in enterprise Java development with focus on Spring Boot and database integration.",
      achievements: [
        "Developed and tested Spring Boot applications for back-end development",
        "Implemented database connectivity using JDBC and JPA",
        "Collaborated with team members on real-world projects",
        "Enhanced understanding of Java programming principles and best practices"
      ],
      technologies: ["Java", "Spring Boot", "JDBC", "MySQL", "Maven"],
      type: "internship"
    }
  ];

  return (
    <section id="experience" className="experience" ref={experienceRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">04.</span>
            Professional Experience
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < experiences.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title">
                      <h3>{exp.role}</h3>
                      <span className="company">{exp.company}</span>
                    </div>
                    <div className="experience-meta">
                      <span className="period">{exp.period}</span>
                      <span className="duration">{exp.duration}</span>
                      <span className="location">{exp.location}</span>
                      <span className={`type-badge ${exp.type}`}>
                        {exp.type === 'internship' ? 'Internship' : 'Full-time'}
                      </span>
                    </div>
                  </div>

                  <div className="experience-body">
                    <p className="experience-description">{exp.description}</p>
                    
                    <div className="achievements-section">
                      <h4>Key Achievements & Responsibilities:</h4>
                      <ul className="achievements-list">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="technologies-section">
                      <h4>Technologies Used:</h4>
                      <div className="technologies-tags">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-cta">
          <div className="cta-card">
            <h3>Ready for New Opportunities</h3>
            <p>I'm currently seeking internship and full-time opportunities as a Java Developer.</p>
            <a href="#contact" className="btn btn-primary">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;