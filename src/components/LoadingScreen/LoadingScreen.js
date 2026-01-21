// components/LoadingScreen.js
import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-animation">
          <div className="code-bracket">{'{'}</div>
          <div className="loading-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="code-bracket">{'}'}</div>
        </div>
        <h2>Navitha J</h2>
        <p>Java Full Stack Developer</p>
      </div>
    </div>
  );
};

export default LoadingScreen;