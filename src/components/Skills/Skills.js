// components/Skills.js
import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import './Skills.css';

const Skills = ({ setActiveSection }) => {
  const skillsRef = useRef();
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [visibleCategories, setVisibleCategories] = useState([]);

  // Wrap skillsData in useMemo to prevent unnecessary re-renders
  const skillsData = useMemo(() => [
    { 
      category: "Backend Development",
      icon: "⚙️",
      color: "#3B82F6",
      skills: [
        { name: "Core Java", level: 90, icon: "☕", description: "Object-oriented programming, Collections, Multithreading" },
        { name: "Spring Boot", level: 85, icon: "🌱", description: "Dependency Injection, Auto-configuration, Microservices" },
        { name: "RESTful APIs", level: 88, icon: "🔗", description: "API design, HTTP methods, JSON processing" },
        { name: "Hibernate/JPA", level: 80, icon: "💾", description: "ORM, Entity mapping, Database operations" },
        { name: "JDBC", level: 82, icon: "🗄️", description: "Database connectivity, Connection pooling" },
        { name: "Microservices", level: 75, icon: "🏗️", description: "Distributed systems, Service communication" },
        { name: "Exception Handling", level: 85, icon: "⚠️", description: "Error management, Custom exceptions" },
        { name: "Java Annotations", level: 80, icon: "🏷️", description: "Custom annotations, Meta-programming" }
      ]
    },
    {
      category: "Frontend Development",
      icon: "🎨",
      color: "#8B5CF6",
      skills: [
        { name: "HTML5", level: 85, icon: "🌐", description: "Semantic markup, Forms, Accessibility" },
        { name: "CSS3", level: 80, icon: "🎨", description: "Flexbox, Grid, Animations, Responsive design" },
        { name: "JavaScript", level: 78, icon: "📜", description: "ES6+, DOM manipulation, Async programming" },
        { name: "React", level: 75, icon: "⚛️", description: "Components, Hooks, State management" },
        { name: "Bootstrap", level: 70, icon: "🅱️", description: "Responsive grid, Components, Utilities" }
      ]
    },
    {
      category: "Database & Tools",
      icon: "🔧",
      color: "#10B981",
      skills: [
        { name: "MySQL", level: 85, icon: "🐬", description: "Database design, Query optimization, Transactions" },
        { name: "PostgreSQL", level: 80, icon: "🐘", description: "Advanced SQL, JSON support, Performance" },
        { name: "Git/GitHub", level: 85, icon: "📚", description: "Version control, Collaboration, CI/CD" },
        { name: "Maven", level: 80, icon: "📦", description: "Dependency management, Build automation" },
        { name: "VS Code", level: 90, icon: "💻", description: "Extensions, Debugging, Integrated terminal" },
        { name: "Eclipse", level: 85, icon: "🔍", description: "Java development, Debugging, Plugins" },
        { name: "Postman", level: 80, icon: "📬", description: "API testing, Documentation, Automation" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: "📚",
      color: "#F59E0B",
      skills: [
        { name: "Spring Framework", level: 85, icon: "🍃", description: "Core Spring, MVC, Security, Data" },
        { name: "Spring Security", level: 75, icon: "🛡️", description: "Authentication, Authorization, JWT" },
        { name: "Spring Data JPA", level: 78, icon: "📊", description: "Repository pattern, Query methods" },
        { name: "Java Persistence API", level: 80, icon: "💿", description: "Entity management, JPQL" },
        { name: "TensorFlow.js", level: 65, icon: "🤖", description: "Machine learning, Neural networks" }
      ]
    },
    {
      category: "Concepts & Methods",
      icon: "💡",
      color: "#EF4444",
      skills: [
        { name: "Object-Oriented Programming", level: 90, icon: "🧩", description: "Encapsulation, Inheritance, Polymorphism" },
        { name: "REST Architecture", level: 85, icon: "🏛️", description: "REST principles, Stateless design" },
        { name: "Agile Methodology", level: 80, icon: "⚡", description: "Scrum, Sprint planning, User stories" },
        { name: "Problem Solving", level: 88, icon: "💡", description: "Algorithm design, Debugging, Optimization" },
        { name: "Data Structures", level: 85, icon: "📊", description: "Arrays, Lists, Trees, Hash tables" },
        { name: "Algorithms", level: 82, icon: "⚙️", description: "Sorting, Searching, Complexity analysis" }
      ]
    },
    {
      category: "Soft Skills",
      icon: "🌟",
      color: "#EC4899",
      skills: [
        { name: "Team Collaboration", level: 85, icon: "👥", description: "Teamwork, Communication, Code reviews" },
        { name: "Communication", level: 88, icon: "💬", description: "Technical documentation, Presentations" },
        { name: "Time Management", level: 85, icon: "⏰", description: "Task prioritization, Deadline management" },
        { name: "Adaptability", level: 90, icon: "🔄", description: "Learning new technologies, Flexibility" },
        { name: "Critical Thinking", level: 87, icon: "🎯", description: "Analytical thinking, Decision making" }
      ]
    }
  ], []); // Empty dependency array means this only gets created once

  // Wrap allSkills in useMemo since it depends on skillsData
  const allSkills = useMemo(() => 
    skillsData.flatMap(category => category.skills), 
    [skillsData]
  );

  // Get skills for active category
  const getSkillsForActiveCategory = useCallback(() => {
    if (activeCategory === 'All') {
      return skillsData;
    }
    return skillsData.filter(category => category.category === activeCategory);
  }, [activeCategory, skillsData]);

  // Get skill names for animation
  const getSkillNamesForCategory = useCallback((category) => {
    if (category === 'All') {
      return allSkills.map(skill => skill.name);
    }
    const cat = skillsData.find(c => c.category === category);
    return cat ? cat.skills.map(skill => skill.name) : [];
  }, [allSkills, skillsData]);

  // Handle mouse move for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('skills');
          
          // Animate skills when section comes into view
          const skillsToAnimate = getSkillNamesForCategory(activeCategory);
          setTimeout(() => {
            setAnimatedSkills(skillsToAnimate);
            
            // Set visible categories for "All" view
            if (activeCategory === 'All') {
              setVisibleCategories(skillsData.map(c => c.category));
            } else {
              setVisibleCategories([activeCategory]);
            }
            
            setIsInitialLoad(false);
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [setActiveSection, activeCategory, getSkillNamesForCategory, skillsData]);

  // Update animations when category changes
  useEffect(() => {
    if (!isInitialLoad) {
      const skillsToAnimate = getSkillNamesForCategory(activeCategory);
      setAnimatedSkills([]);
      
      setTimeout(() => {
        setAnimatedSkills(skillsToAnimate);
        
        // Update visible categories
        if (activeCategory === 'All') {
          setVisibleCategories(skillsData.map(c => c.category));
        } else {
          setVisibleCategories([activeCategory]);
        }
      }, 100);
    }
  }, [activeCategory, isInitialLoad, getSkillNamesForCategory, skillsData]);

  const totalSkills = allSkills.length;
  const averageProficiency = Math.round(allSkills.reduce((acc, skill) => acc + skill.level, 0) / totalSkills);
  const filteredSkills = getSkillsForActiveCategory();

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      {/* Animated Background Elements */}
      <div className="skills-background">
        <div 
          className="floating-orb orb-1" 
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
          }}
        ></div>
        <div 
          className="floating-orb orb-2" 
          style={{
            left: `${100 - mousePosition.x}%`,
            top: `${100 - mousePosition.y}%`,
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)'
          }}
        ></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">02.</span>
            Skills & Technologies
            <div className="title-sparkle">✨</div>
          </h2>
          <div className="section-line"></div>
        </div>

        {/* Skills Overview Cards */}
        <div className="skills-overview">
          <div className="overview-card">
            <div className="overview-icon">🚀</div>
            <div className="overview-content">
              <h3>{totalSkills}+</h3>
              <p>Technical Skills</p>
            </div>
            <div className="overview-glow"></div>
          </div>
          <div className="overview-card">
            <div className="overview-icon">📊</div>
            <div className="overview-content">
              <h3>{averageProficiency}%</h3>
              <p>Average Proficiency</p>
            </div>
            <div className="overview-glow"></div>
          </div>
          <div className="overview-card">
            <div className="overview-icon">🏆</div>
            <div className="overview-content">
              <h3>{skillsData.length}</h3>
              <p>Skill Categories</p>
            </div>
            <div className="overview-glow"></div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="skills-categories">
          <button 
            className={`category-filter ${activeCategory === 'All' ? 'active' : ''}`}
            onClick={() => setActiveCategory('All')}
          >
            <span className="filter-icon">🌟</span>
            All Skills
          </button>
          {skillsData.map((category, index) => (
            <button
              key={category.category}
              className={`category-filter ${activeCategory === category.category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.category)}
              style={{ '--category-color': category.color }}
            >
              <span className="filter-icon">{category.icon}</span>
              {category.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-content">
          {filteredSkills.map((category, categoryIndex) => (
            visibleCategories.includes(category.category) && (
              <div 
                key={category.category} 
                className="skill-category"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="category-header">
                  <h3 className="category-title">
                    <span className="category-icon">{category.icon}</span>
                    {category.category}
                  </h3>
                  <div 
                    className="category-progress" 
                    style={{ '--category-color': category.color }}
                  >
                    <div className="progress-fill"></div>
                  </div>
                </div>
                
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className={`skill-card ${animatedSkills.includes(skill.name) ? 'animated' : ''}`}
                      style={{ 
                        animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                        '--skill-level': `${skill.level}%`,
                        '--skill-color': category.color
                      }}
                    >
                      <div className="skill-card-inner">
                        <div className="skill-header">
                          <div className="skill-icon-wrapper">
                            <span className="skill-icon">{skill.icon}</span>
                            <div className="icon-glow"></div>
                          </div>
                          <div className="skill-info">
                            <h4 className="skill-name">{skill.name}</h4>
                            <span className="skill-percentage">{skill.level}%</span>
                          </div>
                        </div>
                        
                        <p className="skill-description">{skill.description}</p>
                        
                        <div className="skill-bar-container">
                          <div className="skill-bar">
                            <div 
                              className="skill-progress" 
                              style={{ 
                                width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%',
                                background: `linear-gradient(90deg, ${category.color}, ${category.color}99)`
                              }}
                            >
                              <div className="progress-sparkle"></div>
                            </div>
                          </div>
                          <div className="skill-level-indicator">
                            <span className="level-dot"></span>
                            <span className="level-text">
                              {skill.level >= 90 ? 'Expert' : 
                               skill.level >= 80 ? 'Advanced' : 
                               skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className="skill-card-hover"></div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        {/* Skills Legend */}
        <div className="skills-legend">
          <div className="legend-title">Proficiency Levels</div>
          <div className="legend-items">
            <div className="legend-item">
              <div className="legend-color beginner"></div>
              <div className="legend-info">
                <span className="legend-level">Beginner</span>
                <span className="legend-range">0-70%</span>
              </div>
            </div>
            <div className="legend-item">
              <div className="legend-color intermediate"></div>
              <div className="legend-info">
                <span className="legend-level">Intermediate</span>
                <span className="legend-range">70-85%</span>
              </div>
            </div>
            <div className="legend-item">
              <div className="legend-color advanced"></div>
              <div className="legend-info">
                <span className="legend-level">Advanced</span>
                <span className="legend-range">85-95%</span>
              </div>
            </div>
            <div className="legend-item">
              <div className="legend-color expert"></div>
              <div className="legend-info">
                <span className="legend-level">Expert</span>
                <span className="legend-range">95-100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;