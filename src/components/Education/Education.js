// components/Education.js
import React, { useEffect, useRef } from 'react';
import './Education.css';

const Education = ({ setActiveSection }) => {
  const educationRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('education');
        }
      },
      { threshold: 0.3 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, [setActiveSection]);

  const education = [
    {
      degree: "B.E - Computer Science and Engineering",
      institution: "Mahendra Engineering College",
      year: "2022 - 2026",
      score: "Pursuing",
      description: "Currently in final year with focus on software engineering, data structures, algorithms, and web technologies.",
      courses: ["Data Structures", "Algorithms", "Database Systems", "Web Technologies", "Software Engineering", "Computer Networks"],
      achievements: ["Active participant in coding competitions", "Project lead for multiple academic projects"]
    },
    {
      degree: "HSC",
      institution: "St. Paul's Girl's Higher Secondary School",
      year: "2022",
      score: "82%",
      description: "Completed with distinction in Mathematics and Biology.",
courses: ["Mathematics", "Biology", "Physics", "Chemistry"],
achievements: ["Active in extracurricular activities"],
    },
    {
      degree: "SSLC",
      institution: "St. Paul's Girl's Higher Secondary School",
      year: "2020",
      score: "80%",
      description: "Completed with outstanding academic performance.",
      courses: ["All Core Subjects"],
      achievements: ["Consistently ranked among top 5 in class", "Awarded for academic excellence"]
    }
  ];

  const certifications = [
    {
      title: "Java Foundation Certificate",
      issuer: "Infosys Springboard",
      date: "2023",
      description: "Proficiency in Core Java concepts including OOPs, data types, control structures, exception handling, and collections.",
      skills: ["Core Java", "OOP", "Data Structures", "Exception Handling"]
    },
    {
      title: "Java Backend Development Certification",
      issuer: "Login360 Institute",
      date: "2023",
      description: "Hands-on experience in Core Java, JDBC, Spring Boot, RESTful APIs, and database integration.",
      skills: ["Spring Boot", "JDBC", "REST APIs", "Database Integration"]
    },
    {
      title: "IBM Full-Stack Java Developer Professional Certificate",
      issuer: "Coursera",
      date: "2024",
      description: "Expertise in Java, Spring Boot, RESTful APIs, front-end technologies, database management, microservices, and cloud deployment.",
      skills: ["Full Stack Development", "Microservices", "Cloud Deployment", "Frontend Technologies"]
    },
    {
  title: "UiPath Certified Professional - Automation Developer Associate",
  issuer: "UiPath (Global Certification)",
  date: "October 2025",
  description: "Certified in Robotic Process Automation (RPA) development using UiPath platform, demonstrating expertise in designing, building, and managing automation workflows and solutions.",
  skills: ["Robotic Process Automation", "UiPath Studio", "Automation Workflows", "RPA Development", "Process Automation", "UiPath Orchestrator"]
},
    {
  title: "Networking Basics Certificate",
  issuer: "Cisco Networking Academy",
  date: "2025",
  description: "Fundamentals of computer networking, including network infrastructure, protocols, TCP/IP model, and basic network security concepts.",
  skills: ["Network Fundamentals", "TCP/IP Protocols", "Routing & Switching", "Network Security"]
}
  ];

  return (
    <section id="education" className="education" ref={educationRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">05.</span>
            Education & Certifications
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="education-content">
          <div className="education-section">
            <h3 className="section-subtitle">Academic Journey</h3>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <div className="education-header">
                    <h4>{edu.degree}</h4>
                    <span className="institution">{edu.institution}</span>
                    <div className="education-meta">
                      <span className="year">{edu.year}</span>
                      <span className="score">{edu.score}</span>
                    </div>
                  </div>
                  <p className="education-description">{edu.description}</p>
                  
                  <div className="education-details">
                    <div className="courses-section">
                      <strong>Relevant Courses:</strong>
                      <div className="courses-tags">
                        {edu.courses.map((course, idx) => (
                          <span key={idx} className="course-tag">{course}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="achievements-section">
                      <strong>Achievements:</strong>
                      <ul className="achievements-list">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="certifications-section">
            <h3 className="section-subtitle">Professional Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="certification-header">
                    <h4>{cert.title}</h4>
                    <span className="issuer">{cert.issuer}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  <p className="certification-description">{cert.description}</p>
                  <div className="certification-skills">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="additional-achievements">
          <h3>Additional Achievements</h3>
          <div className="achievement-highlight">
            <div className="achievement-icon">🏆</div>
            <div className="achievement-content">
              <h4>1st Prize - Play with Logic Competition</h4>
              <p>Secured 1st prize in the "Play with Logic" competition at Nehru Engineering College, Coimbatore, showcasing strong problem-solving and logical reasoning skills.</p>
              <span className="achievement-date">2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;