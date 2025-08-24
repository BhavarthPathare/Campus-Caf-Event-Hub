import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Coffee, Calendar, Users } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Sip, Chat & Connect – Your Campus Café Hub";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToNext = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__background">
        <div className="hero__particles" id="particles"></div>
        <div className="hero__gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          <motion.div 
            className="hero__text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero__title">
              <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </h1>
            
            <motion.p 
              className="hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Fuel your day with coffee and campus vibes. Find events, grab snacks, and stay in the loop.
            </motion.p>
            
            <motion.div 
              className="hero__cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a className="btn btn--primary" href="#menu">
                <Coffee size={20} />
                See Menu
              </a>
              <a className="btn btn--outline" href="#events">
                <Calendar size={20} />
                Upcoming Events
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero__visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div 
              className="floating-card card--menu"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Coffee className="card-icon" />
              <div className="card-text">Fresh Brew</div>
            </motion.div>
            
            <motion.div 
              className="floating-card card--event"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Calendar className="card-icon" />
              <div className="card-text">Events</div>
            </motion.div>
            
            <motion.div 
              className="floating-card card--community"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <Users className="card-icon" />
              <div className="card-text">Connect</div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero__meta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="meta__item">
            <span className="meta__label">Next Big Event</span>
            <span id="countdown" className="meta__value">Loading…</span>
          </div>
          <div className="meta__item">
            <span className="meta__label">Café Status</span>
            <span className="meta__value status--open">Open Now</span>
          </div>
          <div className="meta__item">
            <span className="meta__label">Today's Special</span>
            <span className="meta__value">Caramel Latte -20%</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={scrollToNext}
        >
          <motion.div 
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} />
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
