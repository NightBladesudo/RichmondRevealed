import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export default function Layout({ children, currentPageName }) {

  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'History', page: 'History' },
    { name: 'Attractions', page: 'Attractions' },
    { name: 'Events', page: 'Events' },
    { name: 'Neighborhoods', page: 'Neighborhoods' },
    { name: 'Virtual Reality', page: 'VirtualReality' },
    { name: 'Richmond ChatBot', page: 'AIChatbot' },
    { name: 'Local Business', page: 'Business' },
    { name: 'Education', page: 'Education' },
    { name: 'Store', page: 'Store' },
    { name: 'Contact', page: 'Contact' },
    { name: 'Citations', page: 'Citations' },
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

            {/* Page Navigation */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-[#a63d2f] hover:bg-[#8b3426] text-white shadow-lg px-6 py-6 text-base font-semibold">
                  <MoreVertical className="w-5 h-5 mr-2" />
                  Page Navigation
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.page} asChild>
                    <Link
                      to={createPageUrl(link.page)}
                      className={`cursor-pointer ${
                        currentPageName === link.page
                          ? 'bg-[#a63d2f]/10 text-[#a63d2f] font-semibold'
                          : 'text-[#1e3a5f]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>



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