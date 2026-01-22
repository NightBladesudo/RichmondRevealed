import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Glasses, MapPin, Building2, Landmark, X, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const virtualWorlds = [
  {
    id: 1,
    name: 'Monument Avenue',
    description: 'Walk through Richmond\'s historic boulevard lined with stunning architecture',
    image: 'https://images.unsplash.com/photo-1566990898722-88c9b9b0d52c?w=800&q=80',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1737565200000!6m8!1m7!1sCAoSLEFGMVFpcE1QN3BxdFZRX0t0QV9hY2tEV0ZCcGVzX0x2SEhSRmw5VkJSc2Y3!2m2!1d37.5556!2d-77.4811!3f180!4f0!5f0.7820865974627469',
    category: 'Historic'
  },
  {
    id: 2,
    name: 'Belle Isle',
    description: 'Explore the natural beauty and trails of this James River island',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1737565300000!6m8!1m7!1sCAoSLEFGMVFpcE0xRmNMNHZ5YXdFX0tKTUJYU0s0TGVjVFNfMjdWX1JoUldLUXE4!2m2!1d37.5304!2d-77.4563!3f90!4f0!5f0.7820865974627469',
    category: 'Nature'
  },
  {
    id: 3,
    name: 'Virginia State Capitol',
    description: 'Tour the historic seat of Virginia\'s government designed by Thomas Jefferson',
    image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=800&q=80',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1737565400000!6m8!1m7!1sCAoSLEFGMVFpcE5WWEZWQlBxdU5xZGNHY1RHTkxXRmE3RnNLV1VSOVBGdzJXb19j!2m2!1d37.5386!2d-77.4337!3f270!4f0!5f0.7820865974627469',
    category: 'Landmark'
  },
  {
    id: 4,
    name: 'Carytown',
    description: 'Experience Richmond\'s eclectic shopping and dining district',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1737565500000!6m8!1m7!1sCAoSLEFGMVFpcE1KVzBHNFBCX3RQWnl2Wk1UcGNNX0xXUkx4NHlEYmhBR0Q3aFN3!2m2!1d37.5554!2d-77.4881!3f90!4f0!5f0.7820865974627469',
    category: 'Neighborhood'
  },
  {
    id: 5,
    name: 'James River Park',
    description: 'Discover trails, rapids, and scenic views along the James River',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1737565600000!6m8!1m7!1sCAoSLEFGMVFpcE1DX3BjR05fTWh4NjBHSFJxMVRiT1JUZDhYcGdQMGlSSFlZNmlZ!2m2!1d37.5374!2d-77.4674!3f180!4f0!5f0.7820865974627469',
    category: 'Nature'
  },
  {
    id: 6,
    name: 'Scott\'s Addition',
    description: 'Visit Richmond\'s trendy neighborhood with breweries and murals',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b4?w=800&q=80',
    embedUrl: 'https://www.google.com/maps/embed?pb=!4v1737565700000!6m8!1m7!1sCAoSLEFGMVFpcE5YZXJmVDhDWVJWTDBGcXJWeFdmNFlmVEhfWHNxdE9UQzVoamdT!2m2!1d37.5685!2d-77.4544!3f90!4f0!5f0.7820865974627469',
    category: 'Neighborhood'
  }
];

export default function VirtualReality() {
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Historic', 'Nature', 'Landmark', 'Neighborhood'];

  const filteredWorlds = filter === 'All' 
    ? virtualWorlds 
    : virtualWorlds.filter(w => w.category === filter);

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

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`inline-flex items-center justify-center px-4 py-2 font-semibold rounded-lg transition-all duration-300 text-sm whitespace-nowrap ${
                  filter === category
                    ? 'bg-[#a63d2f] text-white'
                    : 'bg-gray-100 text-[#1e3a5f] hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Worlds Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl text-[#1e3a5f] font-bold mb-4">
              Explore Richmond Virtually
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on any location to begin your immersive virtual tour
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorlds.map((world, index) => (
              <motion.div
                key={world.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedWorld(world)}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={world.image}
                    alt={world.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#1e3a5f]">
                      {world.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-[#a63d2f] ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-xl text-white font-bold mb-1">
                      {world.name}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-2">
                      {world.description}
                    </p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-[#2d7d7d] font-semibold text-sm">Start Virtual Tour</span>
                  <ArrowRight className="w-5 h-5 text-[#2d7d7d] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Modal */}
      <AnimatePresence>
        {selectedWorld && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWorld(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="bg-[#1e3a5f] px-6 py-4 flex items-center justify-between">
                <div>
                  <h2 className="font-display text-2xl text-white font-bold mb-1">
                    {selectedWorld.name}
                  </h2>
                  <p className="text-gray-300 text-sm">{selectedWorld.description}</p>
                </div>
                <Button
                  onClick={() => setSelectedWorld(null)}
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Virtual Tour */}
              <div className="aspect-video bg-gray-900">
                <iframe
                  src={selectedWorld.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Virtual tour of ${selectedWorld.name}`}
                />
              </div>

              {/* Footer */}
              <div className="p-6 bg-gray-50">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Glasses className="w-4 h-4" />
                  <span>Use your mouse or touch to look around. Click and drag to explore 360°</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}