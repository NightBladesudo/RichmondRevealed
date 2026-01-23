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
          backgroundImage: 'url(https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/0a284c177_water-3314160_1280.jpg)',
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
          
          <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
            History, Culture, and Community in One City. Discover the rich heritage, 
            vibrant arts scene, and welcoming neighborhoods of Virginia's capital.
          </p>
        </motion.div>
      </div>


    </section>
  );
}