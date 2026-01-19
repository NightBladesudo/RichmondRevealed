import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import HeroSection from '../components/home/HeroSection';
import CallToAction from '../components/home/CallToAction';

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
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-1 py-4 overflow-x-auto">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#a63d2f] hover:bg-gray-50 rounded-lg transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
}