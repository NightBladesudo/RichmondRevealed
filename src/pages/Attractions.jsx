import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Landmark } from 'lucide-react';
import { ImageWithLightbox } from '../components/ui/image-lightbox';
import LocationMap from '../components/shared/LocationMap';

const attractions = [
  {
    id: 1,
    name: 'Virginia Museum of Fine Arts',
    description: 'World-class art museum with free general admission featuring collections spanning 5,000 years.',
    category: 'Culture',
    image_url: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600',
    address: '200 N Arthur Ashe Blvd'
  },
  {
    id: 2,
    name: 'Maymont',
    description: 'Historic 100-acre estate with gardens, wildlife exhibits, and a beautiful mansion.',
    category: 'Nature',
    image_url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/a94a036fd_image.png',
    address: '1700 Hampton St'
  },
  {
    id: 3,
    name: 'Belle Isle',
    description: 'Island park in the James River with trails, rapids, and historic ruins.',
    category: 'Nature',
    image_url: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=600',
    address: 'Tredegar St'
  },
  {
    id: 4,
    name: 'Virginia State Capitol',
    description: 'Historic capitol building designed by Thomas Jefferson, offering tours and rich history.',
    category: 'Historic',
    image_url: 'https://images.unsplash.com/20/cambridge.JPG?w=600',
    address: '1000 Bank St'
  },
  {
    id: 5,
    name: 'Lewis Ginter Botanical Garden',
    description: 'Stunning 50-acre botanical garden with diverse plant collections and beautiful landscapes.',
    category: 'Nature',
    image_url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600',
    address: '1800 Lakeside Ave'
  },
  {
    id: 6,
    name: 'Hollywood Cemetery',
    description: 'Historic cemetery overlooking the James River, final resting place of presidents and Civil War figures.',
    category: 'Historic',
    image_url: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=600',
    address: '412 S Cherry St'
  }
];

export default function Attractions() {
  const isLoading = false;
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551632811-561732d1e306?w=1280)',
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
              <Landmark className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-medium uppercase tracking-wider text-sm">Explore</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-4">
              Attractions & Landmarks
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Discover Richmond's iconic destinations, from scenic riverfront parks to world-class museums.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-[#1e3a5f] font-bold mb-6">Map View</h2>
          <LocationMap items={attractions} activeId={activeId} onMarkerClick={setActiveId} />
        </div>
      </section>

      {/* Attractions Grid */}
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
              {attractions.map((attraction, index) => (
                <motion.div
                  key={attraction.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${activeId === attraction.id ? 'ring-2 ring-[#a63d2f]' : ''}`}
                  onClick={() => setActiveId(attraction.id)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageWithLightbox
                      src={attraction.image_url}
                      alt={attraction.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#1e3a5f]">
                        {attraction.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-2 group-hover:text-[#a63d2f] transition-colors">
                      {attraction.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {attraction.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1 text-[#2d7d7d]" />
                      {attraction.address}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {attractions.length === 0 && !isLoading && (
            <div className="text-center py-16">
              <p className="text-gray-500">No attractions found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}