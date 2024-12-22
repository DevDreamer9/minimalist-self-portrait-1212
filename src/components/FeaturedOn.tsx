import React from 'react';
import { motion } from 'framer-motion';

const FeaturedOn = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center mb-12">Featured On</h2>
        <div className="grid grid-cols-2 gap-8 md:gap-12 items-center justify-items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-32 md:w-40 aspect-[3/2] relative grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Featured Company 1"
              className="object-contain w-full h-full"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-32 md:w-40 aspect-[3/2] relative grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Featured Company 2"
              className="object-contain w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;