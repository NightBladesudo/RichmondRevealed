import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#a63d2f] to-[#8b3426] rounded-3xl overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#c9a227] mr-2" />
              <span className="text-white text-sm font-medium">Show Your Richmond Pride</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 max-w-3xl mx-auto">
              Take a Piece of Richmond Home With You
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Explore our collection of locally-designed merchandise celebrating the beauty, 
              history, and spirit of our beloved city.
            </p>
            <Link
              to={createPageUrl('Store')}
              className="inline-flex items-center px-8 py-4 bg-white text-[#a63d2f] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}