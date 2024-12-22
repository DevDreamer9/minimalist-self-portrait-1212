import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white p-6 md:p-8 rounded-lg shadow-sm"
        >
          <Quote className="w-8 h-8 text-gray-300 absolute top-4 left-4" />
          <div className="ml-8">
            <p className="text-lg md:text-xl text-gray-700 italic mb-4">
              "John's expertise in web development transformed our online presence. His attention to detail and innovative solutions exceeded our expectations."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">Michael Brown</h4>
                <p className="text-sm text-gray-600">CEO, TechCorp</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;