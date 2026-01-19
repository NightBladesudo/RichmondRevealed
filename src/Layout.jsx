import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Layout({ children, currentPageName }) {

  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'History', page: 'History' },
    { name: 'Attractions', page: 'Attractions' },
    { name: 'Events', page: 'Events' },
    { name: 'Neighborhoods', page: 'Neighborhoods' },
    { name: 'Local Business', page: 'Business' },
    { name: 'Education', page: 'Education' },
    { name: 'Citations', page: 'Citations' },
    { name: 'Gallery', page: 'Gallery' },
    { name: 'Store', page: 'Store' },
    { name: 'Contact', page: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        :root {
          --navy: #1e3a5f;
          --brick: #a63d2f;
          --gray-soft: #f5f5f5;
          --charcoal: #333333;
          --river-teal: #2d7d7d;
          --gold: #c9a227;
        }
        
        .font-display {
          font-family: 'Playfair Display', serif;
        }
        
        .font-body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Navigation */}
      <header className="bg-[#1e3a5f] sticky top-0 z-50 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#a63d2f] rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display text-xl text-white font-semibold tracking-wide">Richmond</span>
                <span className="text-[#c9a227] font-display text-xl ml-1">Revealed</span>
              </div>
            </Link>


          </div>


        </nav>
      </header>

      {/* Navigation Tabs - Show on all pages except Home */}
      {currentPageName !== 'Home' && (
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {navLinks.map((link, index) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`inline-flex items-center justify-center px-4 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm ${
                    currentPageName === link.page
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
      )}

      {/* Main Content */}
      <main className="font-body">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-md">
            {/* Brand */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[#a63d2f] rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display text-xl font-semibold">Richmond</span>
                <span className="text-[#c9a227] font-display text-xl ml-1">Revealed</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              History, Culture, and Community in One City. Your comprehensive guide to exploring Richmond, Virginia.
            </p>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Richmond Revealed. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}