import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 