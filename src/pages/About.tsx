import React from 'react';

const About = () => {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl font-serif font-bold mb-6">About Me</h1>
            <div className="space-y-4 text-gray-700">
              <p className="body-text">
                I'm a passionate developer and designer based in San Francisco, dedicated to creating elegant solutions for complex problems. With a keen eye for detail and a love for minimalist design, I strive to build user-friendly applications that make a difference.
              </p>
              <p className="body-text">
                When I'm not coding, you can find me exploring nature trails, experimenting with photography, or diving into a good book about technology and design.
              </p>
              <p className="body-text">
                I believe in the power of clean code and thoughtful design to create meaningful digital experiences that resonate with users.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                alt="Developer working on laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;