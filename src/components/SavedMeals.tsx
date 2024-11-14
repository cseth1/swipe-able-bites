import React from 'react';
import { motion } from 'framer-motion';

const SavedMeals: React.FC = () => {
  // Placeholder data
  const savedMeals = [
    { id: 1, name: "Burger", restaurant: "Tasty Bites", price: 8.99 },
    { id: 2, name: "Pizza", restaurant: "Slice of Heaven", price: 12.99 },
    { id: 3, name: "Salad", restaurant: "Green Goodness", price: 7.99 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen p-4"
    >
      <h2 className="text-3xl mb-6 text-primary text-center">Saved Meals</h2>
      <div className="space-y-4">
        {savedMeals.map((meal) => (
          <motion.div 
            key={meal.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{meal.name}</h3>
              <p className="text-gray-600 text-sm">{meal.restaurant}</p>
            </div>
            <p className="text-primary font-bold">${meal.price.toFixed(2)}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SavedMeals;