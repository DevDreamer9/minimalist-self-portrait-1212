import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center animate-fadeIn">
        <h1 className="hero-text mb-6">
          Hello, I'm John Doe
        </h1>
        <p className="font-sans text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          A passionate developer crafting digital experiences with clean code and minimalist design
        </p>
      </div>
    </section>
  );
};

export default Hero;