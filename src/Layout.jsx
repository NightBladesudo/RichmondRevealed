import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`px-3 py-2 text-sm font-body font-medium transition-all duration-200 rounded-md ${
                    currentPageName === link.page
                      ? 'text-[#c9a227] bg-white/10'
                      : 'text-gray-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-white/10 pt-4">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-sm font-body font-medium rounded-lg transition-colors ${
                      currentPageName === link.page
                        ? 'text-[#c9a227] bg-white/10'
                        : 'text-gray-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="font-body">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
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

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6 text-[#c9a227]">Explore</h4>
              <ul className="space-y-3">
                {['Attractions', 'Events', 'Neighborhoods', 'Gallery'].map((item) => (
                  <li key={item}>
                    <Link
                      to={createPageUrl(item)}
                      className="text-gray-300 hover:text-[#2d7d7d] transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6 text-[#c9a227]">Resources</h4>
              <ul className="space-y-3">
                {['History', 'Education', 'Business', 'Store'].map((item) => (
                  <li key={item}>
                    <Link
                      to={createPageUrl(item)}
                      className="text-gray-300 hover:text-[#2d7d7d] transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6 text-[#c9a227]">Connect</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-[#2d7d7d]" />
                  <span>info@richmondrevealed.com</span>
                </li>
                <li className="flex items-center space-x-3 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-[#2d7d7d]" />
                  <span>(804) 555-0123</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#a63d2f] transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#a63d2f] transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#a63d2f] transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
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