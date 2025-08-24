import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Rocket, Palette, Mic, Users } from 'lucide-react';
import './AnnouncementsTicker.css';

const AnnouncementsTicker = () => {
  const announcements = [
    { icon: Calendar, text: 'Coding Fest Aug 30 🎉' },
    { icon: Clock, text: 'Open till 10 PM 🍩' },
    { icon: Rocket, text: 'Placement Drive Sept 5 🚀' },
    { icon: Palette, text: 'Design Jam Friday 🎨' },
    { icon: Mic, text: 'Open Mic Saturday 🎤' },
    { icon: Users, text: 'Study Group Daily 📚' }
  ];

  return (
    <motion.div 
      className="ticker"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="ticker__track">
        {announcements.map((announcement, index) => (
          <motion.span 
            key={index}
            className="ticker__item"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <announcement.icon size={16} className="ticker__icon" />
            {announcement.text}
          </motion.span>
        ))}
        {/* Duplicate for seamless loop */}
        {announcements.map((announcement, index) => (
          <motion.span 
            key={`duplicate-${index}`}
            className="ticker__item"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <announcement.icon size={16} className="ticker__icon" />
            {announcement.text}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default AnnouncementsTicker;
