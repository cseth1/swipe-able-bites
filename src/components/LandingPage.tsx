import React from 'react';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
  // Array of food emojis for the background
  const foodEmojis = ['🍔', '🍕', '🌮', '🍜', '🍣', '🍱', '🥗', '🥪', '🍝', '🍖', '🍗', '🥩', '🌯', '🥨', '🥐', '🧆'];
  
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10"
    >
      {/* Emoji Background */}
      <div className="absolute inset-0 z-0">
        {foodEmojis.map((emoji, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 bg-white/80 p-8 rounded-2xl backdrop-blur-sm shadow-xl">
        <motion.h1 
          initial={{ y: -50 }} 
          animate={{ y: 0 }} 
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="text-6xl mb-4 text-primary font-bold"
        >
          BudgetBite
        </motion.h1>
        <motion.p 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-8 text-text"
        >
          Swipe right on delicious meals that fit your budget
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center items-center flex-wrap"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-3"
          >
            Get Started
          </motion.button>
          <motion.div className="flex items-center gap-2 text-text">
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