import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import winterDawn from '../assets/images/winter_dawn.jpg';
import winterBright from '../assets/images/winter_bright.jpg';
import '../styles/Intro.css';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const Intro: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // 이미지 배열
  const images = [
    winterDawn,
    winterBright,
    // 추가 이미지가 있다면 여기에 추가
  ];

  useEffect(() => {
    const hero = heroRef.current;
    const imageContainer = imageContainerRef.current;
    const content = contentRef.current;

    if (!hero || !imageContainer || !content) return;

    // Hero 섹션 고정
    ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
    });

    // 이미지 슬라이드 애니메이션
    images.forEach((_, index) => {
      const image = imageContainer.children[index] as HTMLElement;
      const startX = index === 0 ? '0vw' : `${-100 * index}vw`;
      const endX = index === 0 ? '200vw' : `${200 - 100 * index}vw`;

      gsap.fromTo(
        image,
        { x: startX },
        {
          x: endX,
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: '+=100%',
            scrub: 1,
          },
        }
      );
    });

    // 콘텐츠 애니메이션
    gsap.fromTo(
      content,
      { y: 0 },
      {
        y: -window.innerHeight,
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '+=100%',
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="intro"
    >
      <div 
        ref={imageContainerRef}
        className="image-container"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="intro-image"
          />
        ))}
      </div>
      <div 
        ref={contentRef}
        className="intro-content"
      >
        <h1>Welcome to My Portfolio</h1>
        <p>Scroll down to explore</p>
      </div>
    </section>
  );
};

export default Intro; 