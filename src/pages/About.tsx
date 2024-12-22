import React from 'react';

const About = () => {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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

        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold mb-6">My Journey</h2>
          <div className="space-y-4 text-gray-700">
            <p className="body-text">
              My journey into technology began during my high school years when I first discovered the magic of creating websites. What started as a curiosity quickly evolved into a passion as I delved deeper into the world of programming.
            </p>
            <p className="body-text">
              Through years of self-learning, formal education, and hands-on experience, I've grown from building simple websites to developing complex applications that solve real-world problems. Each project has been a stepping stone, teaching me valuable lessons about technology, user experience, and problem-solving.
            </p>
            <p className="body-text">
              Today, I continue to embrace new challenges and technologies, always staying curious and eager to learn. This journey has taught me that the tech field is not just about writing code – it's about creating solutions that make a positive impact on people's lives.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-bold mb-6">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-sans text-xl font-semibold">Frontend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>React & React Native</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-sans text-xl font-semibold">Backend</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Node.js</li>
                <li>Python</li>
                <li>PostgreSQL</li>
                <li>AWS</li>
                <li>Docker</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-sans text-xl font-semibold">Tools & Others</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Git & GitHub</li>
                <li>CI/CD</li>
                <li>Agile Methodologies</li>
                <li>Technical Writing</li>
                <li>Team Leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;