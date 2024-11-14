import React from 'react';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Content */}
      <div className="relative z-10">
        <motion.h1 
          initial={{ y: -50 }} 
          animate={{ y: 0 }} 
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="text-6xl mb-4 text-white font-bold"
        >
          BudgetBite
        </motion.h1>
        <motion.p 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-8 text-white"
        >
          Swipe right on delicious meals that fit your budget
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-3"
          >
            Get Started
          </motion.button>
          <motion.div className="flex items-center gap-2 text-white">
            <span className="text-3xl">👈</span>
            <span className="text-3xl">👉</span>
            <span className="text-lg">Swipe to discover</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;