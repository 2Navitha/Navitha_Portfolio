// components/Projects.js
import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const Projects = ({ setActiveSection }) => {
  const projectsRef = useRef();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('projects');
        }
      },
      { threshold: 0.3 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, [setActiveSection]);

  const projects = [
    {
      id: 1,
      title: "Freelancer Marketplace",
      description: "A comprehensive full-stack platform connecting freelancers with clients, featuring project posting, bidding, and management systems.",
      fullDescription: "Developed a complete freelancer marketplace from scratch using Java Spring Boot for the backend and modern web technologies for the frontend. The platform includes user authentication, project management, bidding system, and real-time notifications. Implemented secure payment integration and an admin dashboard for monitoring platform activities.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML", "CSS", "JavaScript", "REST API"],
      category: "fullstack",
      features: [
        "User Registration & Authentication",
        "Project Posting & Management",
        "Bidding System",
        "Real-time Notifications",
        "Secure Payment Integration",
        "Admin Dashboard",
        "Rating & Review System"
      ],
      githubUrl: "https://github.com/2Navitha/Freelancer_Marketplace/tree/main",
      status: "Completed"
    },
    {
      id: 2,
      title: "Virtual Try-On Shopping Platform",
      description: "Web-based shopping platform with integrated TensorFlow.js for real-time virtual try-on experiences.",
      fullDescription: "Built an innovative e-commerce platform that allows users to virtually try on products using their webcam. Integrated TensorFlow.js for real-time computer vision and implemented secure user authentication with interactive product visualization. The system uses pose detection algorithms to overlay virtual products accurately on user's video feed.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Spring Boot", "TensorFlow.js", "JavaScript", "HTML5", "CSS3", "WebRTC"],
      category: "fullstack",
      features: [
        "Real-time Virtual Try-On",
        "Secure User Authentication",
        "Product Visualization",
        "Shopping Cart System",
        "Order Management Dashboard",
        "Webcam Integration"
      ],
      githubUrl: "https://github.com/2Navitha/Online-Virtual-Try-on-Shopping-Platform",
      status: "Completed"
    },
    {
      id: 3,
      title: "Personalized E-Learning Platform with GenAI",
      description: "AI-powered adaptive learning platform with personalized course recommendations and smart assessments.",
      fullDescription: "Developed an intelligent e-learning platform that uses Generative AI to create personalized learning paths. The system analyzes student performance and preferences to recommend tailored content, generate practice questions, and provide real-time feedback. Features include AI-powered tutoring, automated grading, and progress analytics.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "FastAPI", "React", "OpenAI API", "MongoDB", "Docker", "Redis", "WebSockets"],
      category: "ai",
      features: [
        "Personalized Learning Paths",
        "AI-Generated Content",
        "Real-time Progress Tracking",
        "Smart Assessments & Quizzes",
        "Adaptive Difficulty Adjustment",
        "Interactive AI Tutor",
        "Performance Analytics Dashboard"
      ],
      githubUrl: "https://github.com/2Navitha/Personalized_E-learning_Platform",
      status: "In Progress"
    },
    {
      id: 4,
      title: "Task Management System",
      description: "Enterprise-level task management application with team collaboration features and progress tracking.",
      fullDescription: "Designed and developed a comprehensive task management system for teams with features like task assignment, progress tracking, deadline management, and team collaboration tools. Includes real-time updates, file sharing capabilities, and integrated communication channels for seamless team coordination.",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "MongoDB", "Express.js", "React", "REST API", "JWT", "WebSockets"],
      category: "mern",
      features: [
        "Task Creation & Assignment",
        "Real-time Progress Tracking",
        "Team Collaboration Tools",
        "Deadline Management",
        "Reporting Dashboard",
        "File Sharing System",
        "Activity Timeline"
      ],
      githubUrl: "https://github.com/2Navitha/Task-Manager-App-MERN",
      status: "Completed"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mern', name: 'MERN Stack' },
    { id: 'ai', name: 'AI/ML' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">03.</span>
            Featured Projects
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 200}ms` }}
              data-category={project.category}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <div className="project-number">0{index + 1}</div>
                  <div className="project-category-badge">{project.category === 'fullstack' ? 'FULLSTACK' : 
                                                         project.category === 'mern' ? 'MERN' : 
                                                         project.category === 'ai' ? 'AI/ML' : project.category.toUpperCase()}</div>
                </div>
                <div className="project-overlay">
                  <div className="project-actions">
                    <button 
                      className="action-btn view-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </button>
                    {project.githubUrl !== "#" && (
                      <a href={project.githubUrl} className="action-btn github-btn" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> GitHub
                      </a>
                    )}
                  </div>
                </div>
                <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag more-tech">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in seeing more of my work?</p>
          <a href="#contact" className="btn btn-primary">
            Let's Discuss Your Project
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <span className={`project-status-badge ${selectedProject.status.toLowerCase().replace(' ', '-')}`}>
                {selectedProject.status}
              </span>
            </div>

            <div className="modal-body">
              <div className="modal-image">
                <div className="image-placeholder large">
                  <div className="modal-project-number">Project {selectedProject.id}</div>
                  <div className="modal-category-tag">{selectedProject.category === 'fullstack' ? 'FULLSTACK' : 
                                                      selectedProject.category === 'mern' ? 'MERN' : 
                                                      selectedProject.category === 'ai' ? 'AI/ML' : selectedProject.category.toUpperCase()}</div>
                </div>
              </div>

              <div className="modal-details">
                <div className="detail-section">
                  <h3>Project Overview</h3>
                  <p>{selectedProject.fullDescription}</p>
                </div>

                <div className="detail-section">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-section">
                  <h3>Technologies Used</h3>
                  <div className="technologies-grid">
                    {selectedProject.technologies.map((tech, index) => (
                      <div key={index} className="technology-item">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <a href={selectedProject.githubUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> View Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;