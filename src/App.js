import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import AnnouncementsTicker from './components/AnnouncementsTicker';
import MenuSection from './components/MenuSection';
import EventsSection from './components/EventsSection';
import SubscribeSection from './components/SubscribeSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Toast from './components/Toast';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubscribe = (email) => {
    // Simulate subscription
    showToast(`Thank you for subscribing with ${email}!`, 'success');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <AnnouncementsTicker />
          <MenuSection />
          <EventsSection />
          <SubscribeSection onSubscribe={handleSubscribe} />
        </main>
        <Footer />
        <BackToTop />
        
        <AnimatePresence>
          {toast && (
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
