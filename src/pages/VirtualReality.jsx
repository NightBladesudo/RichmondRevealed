import React from 'react';
import { motion } from 'framer-motion';
import { Glasses, MapPin, Building2, Landmark } from 'lucide-react';

export default function VirtualReality() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-[#1e3a5f]/80" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Glasses className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-medium uppercase tracking-wider text-sm">Immersive Experience</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-4">
              Virtual Reality Tours
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Explore Richmond's landmarks and history through immersive virtual reality experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-[#2d7d7d]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Glasses className="w-10 h-10 text-[#2d7d7d]" />
            </div>
            <h2 className="font-display text-3xl text-[#1e3a5f] font-bold mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              We're developing immersive virtual reality experiences that will allow you to explore Richmond's most iconic locations from anywhere in the world.
            </p>

            {/* Preview Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-[#a63d2f]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-[#a63d2f]" />
                </div>
                <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-2">
                  360° Tours
                </h3>
                <p className="text-gray-600">
                  Walk through Richmond's historic streets with interactive 360-degree panoramas
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-[#a63d2f]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Landmark className="w-6 h-6 text-[#a63d2f]" />
                </div>
                <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-2">
                  Historic Sites
                </h3>
                <p className="text-gray-600">
                  Visit monuments, museums, and landmarks with guided virtual tours
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-[#a63d2f]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-[#a63d2f]" />
                </div>
                <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-2">
                  Neighborhoods
                </h3>
                <p className="text-gray-600">
                  Discover the unique character of Richmond's diverse neighborhoods
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}