import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="body-text">
              I'm a software developer based in San Francisco with a passion for creating elegant solutions to complex problems. With over 5 years of experience in web development, I specialize in building responsive and user-friendly applications.
            </p>
            <p className="body-text">
              When I'm not coding, you can find me exploring nature trails, reading about new technologies, or experimenting with photography.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="font-sans text-xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="font-sans font-medium">Frontend</p>
                <ul className="space-y-1 text-gray-600">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-sans font-medium">Backend</p>
                <ul className="space-y-1 text-gray-600">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;