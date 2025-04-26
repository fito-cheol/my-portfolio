import { useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <nav className="navbar">
      <div className="nav-brand">Your Name</div>
      <div className="nav-links">
        <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')}>Home</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>About</a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setActiveSection('skills')}>Skills</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setActiveSection('projects')}>Projects</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar; 