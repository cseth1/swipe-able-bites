import React from 'react';
import { motion } from 'framer-motion';

interface MealCardProps {
  name: string;
  restaurant: string;
  price: number;
  image: string;
}

const MealCard: React.FC<MealCardProps> = ({ name, restaurant, price, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto"
    >
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{restaurant}</p>
        <p className="text-primary font-bold">${price.toFixed(2)}</p>
      </div>
      <div className="flex justify-between p-4 bg-gray-100">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-3xl"
        >
          👎
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-3xl"
        >
          👍
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MealCard;