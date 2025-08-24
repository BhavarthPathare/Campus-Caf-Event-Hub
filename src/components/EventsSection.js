import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import './EventsSection.css';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: 'Hack Night: Build & Brew',
      date: '2025-08-30',
      time: '7:00 PM',
      location: 'Café Main Hall',
      attendees: 45,
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=400&auto=format&fit=crop',
      description: 'Join us for a night of coding, coffee, and collaboration!'
    },
    {
      id: 2,
      title: 'Open Mic Saturday',
      date: '2025-08-29',
      time: '8:00 PM',
      location: 'Café Stage',
      attendees: 32,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400&auto=format&fit=crop',
      description: 'Share your talent or just enjoy the performances!'
    },
    {
      id: 3,
      title: 'Design Jam Friday',
      date: '2025-09-05',
      time: '6:00 PM',
      location: 'Café Workshop',
      attendees: 28,
      image: 'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=400&auto=format&fit=crop',
      description: 'Creative minds unite for an evening of design challenges!'
    },
    {
      id: 4,
      title: 'Startup Stories Meetup',
      date: '2025-09-10',
      time: '7:30 PM',
      location: 'Café Lounge',
      attendees: 55,
      image: 'https://images.unsplash.com/photo-1522199794611-8e0a36b1a8b5?q=80&w=400&auto=format&fit=crop',
      description: 'Learn from successful entrepreneurs and network!'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      weekday: 'short'
    });
  };

  return (
    <section id="events" className="section events-section">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Upcoming Events</h2>
          <p className="section__subtitle">
            Don't miss what's happening around campus.
          </p>
        </div>
        
        <div className="events-timeline">
          <div className="timeline-line"></div>
          <div className="grid grid--events">
            {events.map((event, index) => (
              <motion.article
                key={event.id}
                className="event-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="event-card__image">
                  <img src={event.image} alt={event.title} loading="lazy" />
                  <div className="event-card__date">
                    <Calendar size={16} />
                    {formatDate(event.date)}
                  </div>
                </div>
                
                <div className="event-card__content">
                  <h3 className="event-card__title">{event.title}</h3>
                  <p className="event-card__description">{event.description}</p>
                  
                  <div className="event-card__details">
                    <div className="event-detail">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="event-detail">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                    <div className="event-detail">
                      <Users size={16} />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  
                  <button className="event-card__register">Register Now</button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="events-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="#" className="btn btn--outline">View All Events</a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
