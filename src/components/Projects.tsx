import React from 'react';
import '../styles/Projects.css';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
}

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image"></div>
          <h3>Project 1</h3>
          <p>Description of your project goes here.</p>
          <div className="project-links">
            <a href="#" className="btn primary">View Demo</a>
            <a href="#" className="btn secondary">Source Code</a>
          </div>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects; 