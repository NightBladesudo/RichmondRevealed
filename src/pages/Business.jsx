import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Store, MapPin, Filter, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Restaurant', 'Cafe', 'Shop', 'Bar', 'Service'];

export default function Business() {
  const [activeCategory, setActiveCategory] = useState('All');

  const { data: businesses = [], isLoading } = useQuery({
    queryKey: ['businesses'],
    queryFn: () => base44.entities.Business.list('-created_date', 50),
  });

  const filteredBusinesses = activeCategory === 'All' 
    ? businesses 
    : businesses.filter(b => b.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1280)',
          }}
        >
          <div className="absolute inset-0 bg-[#1e3a5f]/75" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Store className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-medium uppercase tracking-wider text-sm">Support Local</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-4">
              Local Businesses & Dining
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Discover Richmond's thriving local business scene, from acclaimed restaurants to unique boutiques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Local Banner */}
      <section className="py-8 bg-[#a63d2f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <Heart className="w-6 h-6" />
              <span className="text-lg font-medium">Support local entrepreneurs and keep Richmond unique!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category 
                  ? 'bg-[#a63d2f] hover:bg-[#8b3426] text-white' 
                  : 'border-gray-200 text-gray-600 hover:border-[#a63d2f] hover:text-[#a63d2f]'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Businesses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-2xl aspect-[4/3] mb-4" />
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBusinesses.map((business, index) => (
                <motion.div
                  key={business.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={business.image_url}
                      alt={business.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#1e3a5f]">
                        {business.category}
                      </span>
                      <span className="px-3 py-1.5 bg-[#2d7d7d]/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                        {business.neighborhood}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-2 group-hover:text-[#a63d2f] transition-colors">
                      {business.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {business.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1 text-[#2d7d7d]" />
                      {business.address}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filteredBusinesses.length === 0 && !isLoading && (
            <div className="text-center py-16">
              <Store className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No businesses found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}