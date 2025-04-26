import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Tools</h3>
          <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills; 