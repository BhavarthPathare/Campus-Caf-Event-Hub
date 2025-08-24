import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';
import './Toast.css';

const Toast = ({ message, type = 'success', onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className={`toast toast--${type}`}
        initial={{ opacity: 0, y: 50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <div className="toast__content">
          <CheckCircle className="toast__icon" />
          <span className="toast__message">{message}</span>
        </div>
        <button className="toast__close" onClick={onClose}>
          <X size={16} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;
