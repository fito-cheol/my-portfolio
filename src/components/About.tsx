import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/About.css';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
      className="about-section"
    >
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>I'm a passionate developer with expertise in building modern web applications. I love creating clean, efficient, and user-friendly solutions.</p>
          <p>With a strong foundation in both frontend and backend technologies, I bring ideas to life through code.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default About; 