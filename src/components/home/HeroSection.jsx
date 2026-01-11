import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/90 via-[#1e3a5f]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center space-x-2 mb-6">
            <MapPin className="w-5 h-5 text-[#c9a227]" />
            <span className="text-[#c9a227] font-medium tracking-wider uppercase text-sm">
              Richmond, Virginia
            </span>
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6">
            Richmond
            <span className="block text-[#c9a227]">Revealed</span>
          </h1>
          
          <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-lg">
            History, Culture, and Community in One City. Discover the rich heritage, 
            vibrant arts scene, and welcoming neighborhoods of Virginia's capital.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to={createPageUrl('Attractions')}
              className="inline-flex items-center px-8 py-4 bg-[#a63d2f] text-white font-semibold rounded-lg hover:bg-[#8b3426] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Richmond
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to={createPageUrl('Events')}
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              View Events
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-gray-50">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}