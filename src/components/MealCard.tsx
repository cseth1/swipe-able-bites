import React, { useState } from 'react';
import { motion, PanInfo } from 'framer-motion';

interface MealCardProps {
  name: string;
  restaurant: string;
  price: number;
  image: string;
  onSwipe?: (direction: 'left' | 'right') => void;
}

const MealCard: React.FC<MealCardProps> = ({ name, restaurant, price, image, onSwipe }) => {
  const [dragDirection, setDragDirection] = useState<'left' | 'right' | null>(null);

  const handleDrag = (e: any, info: PanInfo) => {
    if (info.offset.x > 0) {
      setDragDirection('right');
    } else if (info.offset.x < 0) {
      setDragDirection('left');
    } else {
      setDragDirection(null);
    }
  };

  const handleDragEnd = (e: any, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 100) {
      const direction = info.offset.x > 0 ? 'right' : 'left';
      onSwipe?.(direction);
    }
    setDragDirection(null);
  };

  return (
    <motion.div 
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: dragDirection === 'left' ? -5 : dragDirection === 'right' ? 5 : 0
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto relative cursor-grab active:cursor-grabbing"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-64">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {/* Swipe Indicators */}
        <motion.div 
          className="absolute top-4 left-4 bg-red-500/80 text-white px-4 py-2 rounded-full"
          animate={{ opacity: dragDirection === 'left' ? 1 : 0 }}
        >
          Skip
        </motion.div>
        <motion.div 
          className="absolute top-4 right-4 bg-green-500/80 text-white px-4 py-2 rounded-full"
          animate={{ opacity: dragDirection === 'right' ? 1 : 0 }}
        >
          Save
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-text">{name}</h3>
        <p className="text-gray-600 mb-3 text-lg">{restaurant}</p>
        <div className="flex justify-between items-center">
          <p className="text-primary text-2xl font-bold">${price.toFixed(2)}</p>
          <div className="flex gap-2 text-sm text-gray-500">
            <span>👈 Skip</span>
            <span>Save 👉</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MealCard;