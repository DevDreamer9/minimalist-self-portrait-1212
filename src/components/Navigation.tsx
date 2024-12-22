import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "border-b-2 border-black" : "";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <ul className="flex justify-center space-x-8 font-sans text-lg">
          <li>
            <Link to="/" className={`hover:text-gray-600 transition-colors pb-1 ${isActive('/')}`}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className={`hover:text-gray-600 transition-colors pb-1 ${isActive('/about')}`}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/services" className={`hover:text-gray-600 transition-colors pb-1 ${isActive('/services')}`}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="/blog" className={`hover:text-gray-600 transition-colors pb-1 ${isActive('/blog')}`}>
              BLOG
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`hover:text-gray-600 transition-colors pb-1 ${isActive('/contact')}`}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;