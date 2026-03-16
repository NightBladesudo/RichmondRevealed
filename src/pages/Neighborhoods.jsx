import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, MapPin, X } from 'lucide-react';
import LocationMap from '../components/shared/LocationMap';
import { ImageWithLightbox } from '../components/ui/image-lightbox';

const neighborhoods = [
  { id: 'fan', name: 'The Fan District', category: 'Historic', description: 'Tree-lined streets with stunning Victorian and Edwardian architecture. Known for its vibrant restaurant scene, local shops, and close-knit community feel.', highlights: ['Historic Architecture', 'Walkable', 'Great Dining'], image: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg', address: 'Monument Avenue, Richmond, VA 23220' },
  { id: 'churchhill', name: 'Church Hill', category: 'Historic', description: "One of Richmond's oldest neighborhoods, home to St. John's Church where Patrick Henry delivered his famous speech. Rich in history and character.", highlights: ['Historic', 'Views', 'Local Cafes'], image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/b30ab53f1_image.png', address: 'E Broad Street, Church Hill, Richmond, VA 23223' },
  { id: 'scotts', name: "Scott's Addition", category: 'Trendy', description: "Former industrial area transformed into Richmond's hottest neighborhood. Home to craft breweries, cideries, restaurants, and art spaces.", highlights: ['Breweries', 'Trendy', 'Nightlife'], image: 'https://images.unsplash.com/photo-1542835497-a6813df96ed9?w=1280', address: "Scott's Addition, Richmond, VA 23230" },
  { id: 'carytown', name: 'Carytown', category: 'Shopping & Dining', description: "Richmond's mile-long shopping and dining district. Eclectic boutiques, vintage shops, and diverse restaurants line the bustling street.", highlights: ['Shopping', 'Restaurants', 'Entertainment'], image: 'https://cdn.pixabay.com/photo/2018/08/01/17/15/city-3577655_1280.jpg', address: 'W Cary Street, Carytown, Richmond, VA 23221' },
  { id: 'shockoe', name: 'Shockoe Bottom', category: 'Nightlife', description: "Richmond's oldest commercial area, now a vibrant entertainment district with restaurants, bars, and farmers markets.", highlights: ['Nightlife', 'Markets', 'History'], image: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg', address: 'Shockoe Bottom, Richmond, VA 23223' },
  { id: 'oregon', name: 'Oregon Hill', category: 'Nature & Outdoors', description: 'Close-knit community near VCU and the river, known for Hollywood Cemetery and stunning views of the James River rapids.', highlights: ['River Access', 'Historic Cemetery', 'Community'], image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/5e7d9dc14_image.png', address: 'Oregon Hill, Richmond, VA 23220' },
  { id: 'museum', name: 'Museum District', category: 'Arts & Culture', description: 'Home to Virginia Museum of Fine Arts and Science Museum. Beautiful tree-lined streets with elegant early 20th-century homes.', highlights: ['Museums', 'Architecture', 'Family-Friendly'], image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/388e5f51c_image.png', address: 'Boulevard, Museum District, Richmond, VA 23220' },
  { id: 'manchester', name: 'Manchester', category: 'Arts & Culture', description: 'Revitalized neighborhood on the south side of the James River with stunning city skyline views and a growing arts scene.', highlights: ['River Views', 'Arts', 'Affordable'], image: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg', address: 'Hull Street, Manchester, Richmond, VA 23224' },
  { id: 'libbie', name: 'Libbie & Grove', category: 'Shopping & Dining', description: 'Upscale shopping and dining corridor known for boutiques, specialty shops, and award-winning restaurants.', highlights: ['Shopping', 'Fine Dining', 'Upscale'], image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/4838a8e33_image.png', address: 'Libbie Avenue, Richmond, VA 23226' },
  { id: 'jackson', name: 'Jackson Ward', category: 'Historic', description: 'Historic neighborhood known for its African American heritage, beautiful architecture, and cultural significance.', highlights: ['History', 'Culture', 'Heritage'], image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/6feaf8f01_image.png', address: 'Jackson Ward, Richmond, VA 23219' },
  { id: 'bellevue', name: 'Bellevue', category: 'Residential', description: 'Charming historic neighborhood with tree-lined streets, Victorian homes, and a tight-knit community atmosphere.', highlights: ['Historic Homes', 'Walkable', 'Community'], image: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_1280.jpg', address: 'Bellevue Avenue, Bellevue, Richmond, VA 23227' },
  { id: 'sobroad', name: 'South of Broad', category: 'Historic', description: 'Historic neighborhood near downtown Richmond featuring restored homes, galleries, and proximity to the James River.', highlights: ['Historic', 'Arts', 'River Proximity'], image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/bae1a67d7_image.png', address: 'S Belvidere Street, Richmond, VA 23220' },
  { id: 'westend', name: 'Near West End', category: 'Residential', description: 'Growing residential neighborhood with diverse architecture, local shops, and convenient access to major thoroughfares.', highlights: ['Residential', 'Diverse', 'Accessible'], image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg', address: 'Patterson Avenue, Richmond, VA 23229' },
  { id: 'northside', name: 'Northside', category: 'Trendy', description: 'Up-and-coming neighborhood north of downtown with affordable housing, murals, and emerging dining and entertainment venues.', highlights: ['Affordable', 'Art Scene', 'Emerging'], image: 'https://cdn.pixabay.com/photo/2017/07/03/20/17/colorful-2468874_1280.jpg', address: 'Brookland Park Boulevard, Northside, Richmond, VA 23222' },
];

const categories = ['All', 'Historic', 'Trendy', 'Shopping & Dining', 'Nightlife', 'Nature & Outdoors', 'Arts & Culture', 'Residential'];

export default function Neighborhoods() {
  const [activeId, setActiveId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(null);

  const filtered = selectedCategory === 'All'
    ? neighborhoods
    : neighborhoods.filter(n => n.category === selectedCategory);

  const handleMarkerClick = (id) => {
    setActiveId(id);
    setSelectedNeighborhood(neighborhoods.find(n => n.id === id));
  };

  const handleCardClick = (neighborhood) => {
    setActiveId(neighborhood.id);
    setSelectedNeighborhood(neighborhood);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=1280)' }}>
          <div className="absolute inset-0 bg-[#1e3a5f]/75" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-medium uppercase tracking-wider text-sm">Community Life</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-4">Neighborhoods</h1>
            <p className="text-xl text-gray-200 max-w-2xl">Explore Richmond's diverse communities, each with its own character, history, and charm.</p>
          </motion.div>
        </div>
      </section>

      {/* Map with Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-[#1e3a5f] font-bold mb-4">Map View</h2>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                  selectedCategory === cat
                    ? 'bg-[#1e3a5f] text-white border-[#1e3a5f]'
                    : 'bg-white text-[#1e3a5f] border-gray-300 hover:border-[#1e3a5f]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <LocationMap items={filtered} activeId={activeId} onMarkerClick={handleMarkerClick} />
          <p className="text-xs text-gray-400 mt-2">Click a marker on the map to view neighborhood details.</p>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl text-[#1e3a5f] font-bold mb-4">Explore Our Neighborhoods</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">From historic districts to trendy hotspots, discover what makes each area unique.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((neighborhood, index) => (
              <motion.div
                key={neighborhood.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleCardClick(neighborhood)}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-[#c9a227] text-white text-xs font-semibold rounded-full">{neighborhood.category}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-2xl text-white font-semibold">{neighborhood.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{neighborhood.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.highlights.map((highlight) => (
                      <span key={highlight} className="px-3 py-1 bg-[#f5f5f5] text-[#1e3a5f] text-xs font-medium rounded-full">{highlight}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedNeighborhood && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelectedNeighborhood(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full"
            >
              <div className="relative h-56">
                <img src={selectedNeighborhood.image} alt={selectedNeighborhood.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelectedNeighborhood(null)}
                  className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-[#c9a227] text-white text-xs font-semibold rounded-full mb-2 inline-block">{selectedNeighborhood.category}</span>
                  <h2 className="font-display text-2xl text-white font-bold">{selectedNeighborhood.name}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{selectedNeighborhood.description}</p>
                {selectedNeighborhood.address && (
                  <p className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 text-[#a63d2f]" />
                    {selectedNeighborhood.address}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {selectedNeighborhood.highlights.map(h => (
                    <span key={h} className="px-3 py-1 bg-[#f5f5f5] text-[#1e3a5f] text-xs font-medium rounded-full">{h}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Community CTA */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <MapPin className="w-12 h-12 text-[#c9a227] mx-auto mb-6" />
            <h2 className="font-display text-3xl text-white font-bold mb-4">Find Your Perfect Neighborhood</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Whether you're looking for historic charm, urban energy, or family-friendly spaces, Richmond has a neighborhood that feels like home.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}