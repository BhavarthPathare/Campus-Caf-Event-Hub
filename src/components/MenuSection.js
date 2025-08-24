import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Utensils, Cake, Star } from 'lucide-react';
import './MenuSection.css';

const MenuSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const menuItems = [
    {
      id: 1,
      title: 'Caramel Latte',
      price: 149,
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=400&auto=format&fit=crop',
      description: 'Rich espresso with caramel syrup and steamed milk',
      popular: true
    },
    {
      id: 2,
      title: 'Iced Americano',
      price: 119,
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1528697203043-733bfdca9a20?q=80&w=400&auto=format&fit=crop',
      description: 'Espresso shots over ice with water'
    },
    {
      id: 3,
      title: 'Mocha Frappe',
      price: 179,
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=400&auto=format&fit=crop',
      description: 'Blended coffee with chocolate and whipped cream'
    },
    {
      id: 4,
      title: 'Vanilla Cappuccino',
      price: 159,
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=400&auto=format&fit=crop',
      description: 'Perfectly balanced espresso with steamed milk and vanilla'
    },
    {
      id: 5,
      title: 'Cold Brew',
      price: 139,
      category: 'coffee',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=400&auto=format&fit=crop',
      description: 'Smooth 18-hour cold brewed coffee'
    },
    {
      id: 6,
      title: 'Blueberry Muffin',
      price: 89,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400&auto=format&fit=crop',
      description: 'Fresh baked muffin with wild blueberries'
    },
    {
      id: 7,
      title: 'Chocolate Doughnut',
      price: 79,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=400&auto=format&fit=crop',
      description: 'Glazed doughnut with chocolate sprinkles'
    },
    {
      id: 8,
      title: 'Tiramisu',
      price: 199,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=400&auto=format&fit=crop',
      description: 'Classic Italian dessert with coffee and mascarpone'
    },
    {
      id: 9,
      title: 'Grilled Sandwich',
      price: 129,
      category: 'snacks',
      image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=400&auto=format&fit=crop',
      description: 'Grilled cheese with tomato and basil'
    },
    {
      id: 10,
      title: 'Avocado Toast',
      price: 149,
      category: 'snacks',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=400&auto=format&fit=crop',
      description: 'Sourdough toast with smashed avocado and sea salt'
    },
    {
      id: 11,
      title: 'Chicken Wrap',
      price: 169,
      category: 'snacks',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400&auto=format&fit=crop',
      description: 'Grilled chicken with fresh vegetables in a tortilla'
    },
    {
      id: 12,
      title: 'Green Tea',
      price: 89,
      category: 'tea',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400&auto=format&fit=crop',
      description: 'Premium Japanese green tea with antioxidants'
    },
    {
      id: 13,
      title: 'Chai Latte',
      price: 139,
      category: 'tea',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=400&auto=format&fit=crop',
      description: 'Spiced black tea with steamed milk and honey'
    },
    {
      id: 14,
      title: 'Earl Grey',
      price: 79,
      category: 'tea',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400&auto=format&fit=crop',
      description: 'Classic black tea with bergamot oil'
    }
  ];

  const filters = [
    { id: 'all', label: 'All', icon: Utensils },
    { id: 'coffee', label: 'Coffee', icon: Coffee },
    { id: 'tea', label: 'Tea', icon: Coffee },
    { id: 'snacks', label: 'Snacks', icon: Utensils },
    { id: 'desserts', label: 'Desserts', icon: Cake }
  ];

  const filteredItems = activeFilter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  return (
    <section id="menu" className="section menu-section">
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">Menu Favorites</h2>
          <p className="section__subtitle">
            Freshly brewed & baked. Hand-picked by students.
          </p>
          
          <div className="menu-filters">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <filter.icon size={18} />
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="grid grid--menu"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.article
                key={item.id}
                className="menu-card"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
              >
                <div className="menu-card__image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  {item.popular && (
                    <div className="popular-badge">
                      <Star size={16} />
                      Popular
                    </div>
                  )}
                </div>
                
                <div className="menu-card__content">
                  <h3 className="menu-card__title">{item.title}</h3>
                  <p className="menu-card__description">{item.description}</p>
                  <div className="menu-card__footer">
                    <span className="menu-card__price">₹{item.price}</span>
                    <button className="menu-card__add">Add to Cart</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          className="menu-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="#" className="btn btn--outline">View Full Menu</a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
