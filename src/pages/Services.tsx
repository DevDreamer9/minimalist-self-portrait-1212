import React from 'react';
import { Code, Smartphone, Globe, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Creating responsive, modern websites and web applications using the latest technologies and best practices.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Building native and cross-platform mobile applications that deliver exceptional user experiences.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Strategic social media planning, content creation, and community management to grow your online presence.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Consultation",
      description: "Expert advice on technology stack selection, architecture planning, and digital transformation strategies.",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold mb-6">Services</h1>
        <p className="body-text mb-12">
          I offer a comprehensive range of digital services to help bring your ideas to life.
          Each service is tailored to meet your specific needs and goals.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4 text-gray-800">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;