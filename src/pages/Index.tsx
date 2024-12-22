import React from 'react';
import Hero from '../components/Hero';
import FeaturedOn from '../components/FeaturedOn';
import Testimonial from '../components/Testimonial';

const Index = () => {
  return (
    <main className="min-h-screen pt-24">
      <Hero />
      <FeaturedOn />
      <Testimonial />
    </main>
  );
};

export default Index;