import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Github, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <motion.div 
            className="footer__brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Coffee className="footer__logo" />
            <h3>Campus Café</h3>
            <p>Your daily dose of caffeine and community</p>
          </motion.div>
          
          <motion.div 
            className="footer__links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="footer__section">
              <h4>Quick Links</h4>
              <a href="#menu">Menu</a>
              <a href="#events">Events</a>
              <a href="#subscribe">Contact</a>
            </div>
            
            <div className="footer__section">
              <h4>Connect</h4>
              <a href="#"><Twitter size={16} /> Twitter</a>
              <a href="#"><Linkedin size={16} /> LinkedIn</a>
              <a href="#"><Github size={16} /> GitHub</a>
            </div>
            
            <div className="footer__section">
              <h4>Info</h4>
              <span>Open 7AM-10PM</span>
              <span>Campus Center</span>
              <span>+1 (555) 123-4567</span>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="footer__bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="footer__copy">
            Made with ❤️ by <span className="highlight">Bhavarth Pathare</span> • 
            Deployed on Vercel • <a href="#" target="_blank" rel="noopener">GitHub</a>
          </p>
          <div className="footer__social">
            <a href="#" className="social-link"><Github size={20} /></a>
            <a href="#" className="social-link"><Linkedin size={20} /></a>
            <a href="#" className="social-link"><Twitter size={20} /></a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
