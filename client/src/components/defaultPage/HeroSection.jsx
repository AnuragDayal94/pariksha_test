import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="text-center py-32 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold"
      >
        Master Your Exams with Pariksha
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-lg"
      >
        Personalized tests, deep analytics, and a better study experience.
      </motion.p>
    </section>
  );
};

export default HeroSection;