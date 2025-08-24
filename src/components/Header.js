import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Menu, X, Moon, Sun } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute('data-theme', !isDarkTheme ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="header__content">
          <motion.div 
            className="brand"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Coffee className="brand__icon" />
            <div className="brand__text">
              <span className="brand__name">Campus Café</span>
              <span className="brand__tagline">Event Hub</span>
            </div>
          </motion.div>

          <nav className={`nav ${isMobileMenuOpen ? 'nav--open' : ''}`}>
            <a 
              href="#menu" 
              className="nav__link"
              onClick={() => scrollToSection('menu')}
            >
              Menu
            </a>
            <a 
              href="#events" 
              className="nav__link"
              onClick={() => scrollToSection('events')}
            >
              Events
            </a>
            <a 
              href="#subscribe" 
              className="nav__link"
              onClick={() => scrollToSection('subscribe')}
            >
              Subscribe
            </a>
            
            <motion.button
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
