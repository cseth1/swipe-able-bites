import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import BudgetInput from './components/BudgetInput';
import LocationInput from './components/LocationInput';
import MealCard from './components/MealCard';
import SavedMeals from './components/SavedMeals';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    <LandingPage key="landing" />,
    <BudgetInput key="budget" />,
    <LocationInput key="location" />,
    <MealCard key="meal" name="Delicious Burger" restaurant="Tasty Bites" price={9.99} image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />,
    <SavedMeals key="saved" />,
  ];

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
        >
          {steps[currentStep]}
        </motion.div>
      </AnimatePresence>
      <div className="fixed bottom-4 right-4">
        <button 
          onClick={() => setCurrentStep((prev) => (prev + 1) % steps.length)}
          className="btn-secondary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;