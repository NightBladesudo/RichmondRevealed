import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturedAttractions({ attractions }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-[#a63d2f] font-medium uppercase tracking-wider text-sm">
              Must-See Destinations
            </span>
            <h2 className="font-display text-4xl text-[#1e3a5f] font-bold mt-2">
              Top Attractions
            </h2>
          </div>
          <Link
            to={createPageUrl('Attractions')}
            className="mt-4 md:mt-0 inline-flex items-center text-[#2d7d7d] font-semibold hover:text-[#a63d2f] transition-colors"
          >
            View All Attractions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.slice(0, 3).map((attraction, index) => (
            <motion.div
              key={attraction.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5">
                <img
                  src={attraction.image_url}
                  alt={attraction.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#1e3a5f]">
                    {attraction.category}
                  </span>
                </div>
              </div>
              <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-2 group-hover:text-[#a63d2f] transition-colors">
                {attraction.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                {attraction.description}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-1 text-[#2d7d7d]" />
                {attraction.address}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}