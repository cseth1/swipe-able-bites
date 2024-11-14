import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BudgetInput: React.FC = () => {
  const [budget, setBudget] = useState('');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <h2 className="text-3xl mb-6 text-primary">Set Your Budget</h2>
      <div className="w-full max-w-xs">
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Enter your budget"
          className="input mb-4"
        />
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary w-full"
        >
          Next
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BudgetInput;