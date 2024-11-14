import React from 'react';
import { motion, PanInfo } from 'framer-motion';

interface MealCardProps {
  name: string;
  restaurant: string;
  price: number;
  image: string;
  onSwipe?: (direction: 'left' | 'right') => void;
}

const MealCard: React.FC<MealCardProps> = ({ name, restaurant, price, image, onSwipe }) => {
  const handleDragEnd = (_: any, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 100) {
      const direction = info.offset.x > 0 ? 'right' : 'left';
      onSwipe?.(direction);
    }
  };

  return (
    <motion.div 
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto relative cursor-grab active:cursor-grabbing"
      whileDrag={{ scale: 1.05 }}
    >
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{restaurant}</p>
        <p className="text-primary font-bold">${price.toFixed(2)}</p>
      </div>
      
      {/* Swipe indicators */}
      <motion.div 
        className="absolute top-1/2 left-4 text-4xl opacity-0"
        style={{ x: -100 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        👎
      </motion.div>
      <motion.div 
        className="absolute top-1/2 right-4 text-4xl opacity-0"
        style={{ x: 100 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        👍
      </motion.div>
    </motion.div>
  );
};

export default MealCard;