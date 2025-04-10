import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './IntroSequence.css';
import ParticleBackground from './ParticleBackground';

const IntroSequence = ({ onComplete }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  
  const pages = [
    { 
      text: "Hi Anjali...👋", 
      color: "#FF1493", // Deep pink
      bgColor: "#E6F7FF", // Light blue
      animation: "wave",
      emoji: "✨",
      decorations: ["🌸", "💖", "✨", "🌟", "💫", "⭐", "🌺", "🌹", "🌷", "🌼", "🌻", "🍀"]
    },
    { 
      text: "It's your Birthday!!! :D", 
      color: "#8B0000", // Dark red
      bgColor: "#FFF8DC", // Cream
      animation: "bounce",
      emoji: "🎂",
      decorations: ["🎈", "🎉", "🎊", "🎀", "🎁", "🎆", "🎇", "🎆", "🎊", "🎉", "🎈", "🎀"]
    },
    { 
      text: "A day to celebrate", 
      color: "#006400", // Dark green
      bgColor: "#FFE4E1", // Misty rose
      animation: "glow",
      emoji: "🎉",
      decorations: ["🎵", "💃", "🕺", "🎭", "🎪", "🎨", "🎬", "🎤", "🎧", "🎼", "🎹", "🎸"]
    },
    { 
      text: "A day to remember", 
      color: "#4B0082", // Indigo
      bgColor: "#F0FFF0", // Honeydew
      animation: "rotate",
      emoji: "💫",
      decorations: ["📸", "💝", "🌟", "💫", "⭐", "✨", "💫", "🌟", "⭐", "✨", "💫", "🌟"]
    },
    { 
      text: "A day filled with joy", 
      color: "#8B4513", // Saddle brown
      bgColor: "#E0FFFF", // Light cyan
      animation: "scale",
      emoji: "🎈",
      decorations: ["😊", "🥳", "💫", "🌟", "✨", "💖", "😄", "😃", "😁", "🥰", "😍", "🤗"]
    },
    { 
      text: "Lots of surprises", 
      color: "#800080", // Purple
      bgColor: "#FFF0F5", // Lavender blush
      animation: "slide",
      emoji: "🎁",
      decorations: ["🎀", "🎪", "🎭", "🎨", "🎯", "🎲", "🎮", "🎲", "🎯", "🎨", "🎭", "🎪"]
    },
    { 
      text: "पर क्या आपको पता है??", 
      color: "#FF4500", // Orange red
      bgColor: "#F0F8FF", // Alice blue
      animation: "pulse",
      emoji: "❓",
      decorations: ["🤔", "💭", "❔", "❓", "💡", "🤨", "🧐", "💭", "❔", "❓", "🤔", "💡"]
    },
    { 
      text: "आजसे आप 25 के ज्यादा करीब है 20 से...🥲", 
      color: "#006400", // Dark green
      bgColor: "#FFF8DC", // Cream
      animation: "bounce",
      emoji: "⏳",
      decorations: ["⌛", "⏰", "📅", "🗓️", "📆", "⏳", "⌛", "⏰", "📅", "🗓️", "📆", "⏳"]
    },
    { 
      text: "और 2 साल बाद आप 30 के ज्यादा करीब होगे 20 से...😱", 
      color: "#FF69B4", // Hot pink
      bgColor: "#E0FFFF", // Light cyan
      animation: "glow",
      emoji: "😱",
      decorations: ["😨", "😰", "😳", "😱", "😨", "😰", "😳", "😱", "😨", "😰", "😳", "😱"]
    },
    { 
      text: "क्यूं हिला डाला ना।।। 😁😁😁", 
      color: "#FF69B4", // Hot pink
      bgColor: "#FFF0F5", // Lavender blush
      animation: "glow",
      emoji: "✨",
      decorations: ["🤪", "😹", "🤣", "😎", "😂", "😆", "😅", "😼", "🥸", "🤓", "🫨", "🫠"]
    },
    { 
      text: "Anyways...😅", 
      color: "#9370DB", // Medium purple
      bgColor: "#F5F5F5", // White smoke
      animation: "slide",
      emoji: "😊",
      decorations: ["😄", "😃", "😁", "😆", "😅", "😂", "🤣", "😊", "😄", "😃", "😁", "😆"]
    },
    { 
      text: "Ready for the main event?", 
      color: "#B22222", // Firebrick
      bgColor: "#F0F8FF", // Alice blue
      animation: "pulse",
      emoji: "🚀",
      decorations: ["🎪", "🎯", "🎨", "🎭", "🎪", "🎯", "🎨", "🎭", "🎪", "🎯", "🎨", "🎭"]
    },
  ];

  const handlePageChange = (direction) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    
    if (direction === 'next' && currentPage < pages.length - 1) {
      setCurrentPage(prev => prev + 1);
      
      // If we're on the second-to-last page, automatically transition to the main event after a delay
      if (currentPage === pages.length - 2) {
        setTimeout(() => {
          onComplete();
        }, 3000); // 3 second delay before transitioning
      }
    } else if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
    
    // Prevent rapid navigation
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        handlePageChange('next');
      } else if (e.deltaY < 0) {
        handlePageChange('prev');
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        handlePageChange('next');
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        handlePageChange('prev');
      }
    };

    const handleTouchMove = (e) => {
      // Simple touch detection - could be improved for better swipe detection
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        if (touch.clientY < window.innerHeight / 2) {
          handlePageChange('prev');
        } else {
          handlePageChange('next');
        }
      }
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentPage, isScrolling]);

  // Animation variants for different text effects
  const animationVariants = {
    wave: {
      initial: { opacity: 0, y: 50 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      },
      exit: { opacity: 0, y: -50 }
    },
    bounce: {
      initial: { opacity: 0, scale: 0.5 },
      animate: { 
        opacity: 1, 
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 10
        }
      },
      exit: { opacity: 0, scale: 0.5 }
    },
    glow: {
      initial: { opacity: 0, textShadow: "0 0 0px rgba(255,255,255,0)" },
      animate: { 
        opacity: 1, 
        textShadow: "0 0 20px rgba(255,255,255,0.8)",
        transition: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }
      },
      exit: { opacity: 0 }
    },
    rotate: {
      initial: { opacity: 0, rotate: -180 },
      animate: { 
        opacity: 1, 
        rotate: 0,
        transition: {
          duration: 1,
          ease: "easeOut"
        }
      },
      exit: { opacity: 0, rotate: 180 }
    },
    scale: {
      initial: { opacity: 0, scale: 0 },
      animate: { 
        opacity: 1, 
        scale: [0, 1.2, 1],
        transition: {
          duration: 1.2,
          times: [0, 0.7, 1]
        }
      },
      exit: { opacity: 0, scale: 0 }
    },
    slide: {
      initial: { opacity: 0, x: -100 },
      animate: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      },
      exit: { opacity: 0, x: 100 }
    },
    pulse: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { 
        opacity: 1, 
        scale: [0.8, 1.1, 1],
        transition: {
          duration: 1.5,
          repeat: 1,
          repeatType: "reverse"
        }
      },
      exit: { opacity: 0, scale: 0.8 }
    },
    waving: {
      initial: { opacity: 0, rotate: 0 },
      animate: { 
        opacity: 1, 
        rotate: [0, 20, -20, 20, -20, 0],
        transition: {
          duration: 2,
          repeat: 0,
          ease: "easeInOut"
        }
      },
      exit: { opacity: 0, rotate: 0 }
    }
  };

  // Animation variants for floating decorations
  const floatingVariants = {
    initial: { y: 0, x: 0 },
    animate: (i) => ({
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 3 + i,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    })
  };

  // Gift box animation variants
  const giftBoxVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.2,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 10 
      }
    },
    tap: { scale: 0.9 },
    open: { 
      scale: [1, 1.5, 1],
      rotate: [0, 10, -10, 0],
      transition: { 
        duration: 0.5,
        times: [0, 0.5, 0.8, 1]
      }
    }
  };

  return (
    <div 
      className="intro-sequence"
      style={{ 
        background: `linear-gradient(135deg, ${pages[currentPage].bgColor}, ${pages[currentPage].bgColor}99)`
      }}
    >
      <ParticleBackground />
      
      <div className="scroll-indicator">
        <motion.div 
          className="scroll-arrow"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓ Scroll down or press ↓ key ↓
        </motion.div>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="intro-page"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating decorations */}
          <div className="floating-decorations">
            {pages[currentPage].decorations.map((emoji, index) => (
              <motion.div
                key={index}
                className="floating-emoji"
                custom={index}
                variants={floatingVariants}
                initial="initial"
                animate="animate"
              >
                {emoji}
              </motion.div>
            ))}
          </div>
          
          <motion.div className="text-container">
            <motion.h1
              className={`intro-text ${pages[currentPage].animation}`}
              variants={animationVariants[pages[currentPage].animation]}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ color: pages[currentPage].color }}
            >
              {pages[currentPage].text.includes('...') ? (
                <>
                  {pages[currentPage].text.split('...')[0]}
                  <span>...</span>
                  <motion.span
                    className="waving-emoji"
                    variants={animationVariants.waving}
                    initial="initial"
                    animate="animate"
                    style={{ display: 'inline-block' }}
                  >
                    {pages[currentPage].text.split('...')[1]}
                  </motion.span>
                </>
              ) : (
                pages[currentPage].text
              )}
            </motion.h1>
            
            <motion.div 
              className="text-decoration"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {pages[currentPage].emoji}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="page-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {pages.map((_, index) => (
              <motion.div 
                key={index}
                className={`dot ${index === currentPage ? 'active' : ''}`}
                animate={{ scale: index === currentPage ? 1.2 : 1 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      <motion.div 
        className="watermark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Made with ❤️ by Mukul in Pune 
      </motion.div>
    </div>
  );
};

export default IntroSequence; 