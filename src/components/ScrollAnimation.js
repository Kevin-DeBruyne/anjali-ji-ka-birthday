import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ScrollAnimation.css';

const ScrollAnimation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animation pages with text and animations
  const pages = [
    {
      text: "Hi Anjali",
      animation: "fadeInUp",
      emoji: "👋"
    },
    {
      text: "Today is your special day",
      animation: "fadeInRight",
      emoji: "✨"
    },
    {
      text: "A day filled with joy and celebration",
      animation: "zoomIn",
      emoji: "🎉"
    },
    {
      text: "You make the world brighter",
      animation: "slideInLeft",
      emoji: "🌟"
    },
    {
      text: "Happy Birthday!",
      animation: "bounceIn",
      emoji: "🎂"
    }
  ];

  // Calculate opacity based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div className="scroll-container" ref={containerRef}>
      {pages.map((page, index) => (
        <motion.div 
          key={index} 
          className={`scroll-page ${page.animation}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="scroll-content">
            <motion.h2 
              className="scroll-text"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {page.text}
            </motion.h2>
            <motion.div 
              className="scroll-emoji"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {page.emoji}
            </motion.div>
          </div>
        </motion.div>
      ))}
      
      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        style={{ opacity }}
      >
        <div className="scroll-arrow">↓</div>
        <p>Scroll to continue</p>
      </motion.div>
    </div>
  );
};

export default ScrollAnimation; 