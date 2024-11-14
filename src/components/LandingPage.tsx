import React from 'react';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center text-center p-4"
    >
      <motion.h1 
        initial={{ y: -50 }} 
        animate={{ y: 0 }} 
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className="text-5xl mb-4 text-primary"
      >
        BudgetBite
      </motion.h1>
      <motion.p 
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-xl mb-8"
      >
        Discover delicious meals that fit your budget
      </motion.p>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn-primary text-lg"
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default LandingPage;