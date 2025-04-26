import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
        <h2>Full Stack Developer</h2>
        <p>I build exceptional digital experiences</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 