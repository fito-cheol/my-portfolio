import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import winterDawn from '../assets/images/winter_dawn.jpg';
import winterBright from '../assets/images/winter_bright.jpg';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // 첫 번째 이미지: 0에서 200vw까지 오른쪽으로 이동
  const firstX = useTransform(scrollYProgress, [0, 1], ['0vw', '200vw']);
  // 두 번째 이미지: -100vw에서 100vw까지 오른쪽으로 이동
  const secondX = useTransform(scrollYProgress, [0, 1], ['-100vw', '100vw']);

  return (
    <section className="hero">
      <div className="image-container">
        <motion.img
          src={winterDawn}
          alt="Slide 1"
          className="hero-image"
          style={{ x: firstX }}
        />
        <motion.img
          src={winterBright}
          alt="Slide 2"
          className="hero-image"
          style={{ x: secondX }}
        />
      </div>
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Scroll down to explore</p>
      </div>
    </section>
  );
};

export default Hero; 