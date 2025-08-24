import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Mail, CheckCircle } from 'lucide-react';
import './SubscribeSection.css';

const SubscribeSection = ({ onSubscribe }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onSubscribe(`Thanks for subscribing, ${formData.name}!`);
      setFormData({ name: '', email: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const quotes = [
    'Small steps, big vibes.',
    'Code. Coffee. Connect.',
    'Creativity is intelligence having fun.',
    'Stay curious, stay caffeinated.',
    'Great ideas start with great coffee.'
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section id="subscribe" className="section subscribe-section">
      <div className="container">
        <div className="subscribe">
          <div className="subscribe__content">
            <motion.h3 
              className="subscribe__title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Join the Brewletter ☕
            </motion.h3>
            
            <motion.p 
              className="subscribe__subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Get weekly menus, event highlights, and exclusive offers in your inbox.
            </motion.p>
            
            <motion.form 
              className="subscribe__form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
                <Mail className="input-icon" />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                />
                <Mail className="input-icon" />
              </div>
              
              <motion.button 
                type="submit" 
                className="btn btn--primary"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </motion.button>
            </motion.form>
            
            <motion.div 
              className="subscribe__features"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="feature">
                <CheckCircle className="feature__icon" />
                <span>Weekly updates</span>
              </div>
              <div className="feature">
                <CheckCircle className="feature__icon" />
                <span>Exclusive offers</span>
              </div>
              <div className="feature">
                <CheckCircle className="feature__icon" />
                <span>Event reminders</span>
              </div>
            </motion.div>
            
            <motion.p 
              className="quote"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              "{randomQuote}"
            </motion.p>
          </div>
          
          <div className="subscribe__visual">
            <div className="floating-elements">
              <motion.div 
                className="floating-element"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                ☕
              </motion.div>
              <motion.div 
                className="floating-element"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                📧
              </motion.div>
              <motion.div 
                className="floating-element"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                🎉
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
