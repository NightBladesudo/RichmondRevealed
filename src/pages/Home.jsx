import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import HeroSection from '../components/home/HeroSection';

export default function Home() {
  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'History', page: 'History' },
    { name: 'Attractions', page: 'Attractions' },
    { name: 'Events', page: 'Events' },
    { name: 'Neighborhoods', page: 'Neighborhoods' },
    { name: 'Local Business', page: 'Business' },
    { name: 'Education', page: 'Education' },
    { name: 'Gallery', page: 'Gallery' },
    { name: 'Store', page: 'Store' },
    { name: 'Contact', page: 'Contact' },
    { name: 'Citations', page: 'Citations' },
  ];

  return (
    <div>
      {/* Navigation Tabs */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className={`inline-flex items-center justify-center px-4 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm ${
                  index === 0 
                    ? 'bg-[#a63d2f] text-white hover:bg-[#8b3426]'
                    : 'bg-white/90 backdrop-blur-sm text-[#1e3a5f] border border-gray-200 hover:bg-white hover:border-[#a63d2f]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <HeroSection />
    </div>
  );
}