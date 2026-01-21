// App.js
import React, { useState, useEffect} from 'react';
import './App.css';

// Import components
import Header from './components/Header/Header.js';
import Hero from './components/Hero/Hero.js';
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import Projects from './components/Projects/Projects.js';
import Experience from './components/Experience/Experience.js';
import Education from './components/Education/Education.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import LoadingScreen from './components/LoadingScreen/LoadingScreen.js';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`app ${theme}`}>
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Hero setActiveSection={setActiveSection} />
      <About setActiveSection={setActiveSection} />
      <Skills setActiveSection={setActiveSection} />
      <Projects setActiveSection={setActiveSection} />
      <Experience setActiveSection={setActiveSection} />
      <Education setActiveSection={setActiveSection} />
      <Contact setActiveSection={setActiveSection} />
      <Footer />
    </div>
  );
};

export default App;