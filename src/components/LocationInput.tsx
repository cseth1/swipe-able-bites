import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LocationInput: React.FC = () => {
  const [location, setLocation] = useState('');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <h2 className="text-3xl mb-6 text-primary">Set Your Location</h2>
      <div className="w-full max-w-xs">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your location"
          className="input mb-4"
        />
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary w-full"
        >
          Find Meals
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LocationInput;