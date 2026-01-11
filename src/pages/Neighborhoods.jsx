import React from 'react';
import { motion } from 'framer-motion';
import { Users, TreePine, Home, Coffee, MapPin } from 'lucide-react';

const neighborhoods = [
  {
    name: 'The Fan District',
    description: 'Tree-lined streets with stunning Victorian and Edwardian architecture. Known for its vibrant restaurant scene, local shops, and close-knit community feel.',
    highlights: ['Historic Architecture', 'Walkable', 'Great Dining'],
    image: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=800'
  },
  {
    name: 'Church Hill',
    description: 'One of Richmond\'s oldest neighborhoods, home to St. John\'s Church where Patrick Henry delivered his famous speech. Rich in history and character.',
    highlights: ['Historic', 'Views', 'Local Cafes'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800'
  },
  {
    name: 'Scott\'s Addition',
    description: 'Former industrial area transformed into Richmond\'s hottest neighborhood. Home to craft breweries, cideries, restaurants, and art spaces.',
    highlights: ['Breweries', 'Trendy', 'Nightlife'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800'
  },
  {
    name: 'Carytown',
    description: 'Richmond\'s mile-long shopping and dining district. Eclectic boutiques, vintage shops, and diverse restaurants line the bustling street.',
    highlights: ['Shopping', 'Restaurants', 'Entertainment'],
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800'
  },
  {
    name: 'Shockoe Bottom',
    description: 'Richmond\'s oldest commercial area, now a vibrant entertainment district with restaurants, bars, and farmers markets.',
    highlights: ['Nightlife', 'Markets', 'History'],
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800'
  },
  {
    name: 'Oregon Hill',
    description: 'Close-knit community near VCU and the river, known for Hollywood Cemetery and stunning views of the James River rapids.',
    highlights: ['River Access', 'Historic Cemetery', 'Community'],
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800'
  }
];

const communityValues = [
  {
    icon: Users,
    title: 'Welcoming Community',
    description: 'Richmond neighborhoods are known for their friendly, inclusive atmosphere where newcomers quickly feel at home.'
  },
  {
    icon: TreePine,
    title: 'Green Spaces',
    description: 'From urban parks to the James River, outdoor recreation is never far away in any Richmond neighborhood.'
  },
  {
    icon: Home,
    title: 'Historic Character',
    description: 'Each neighborhood preserves its unique architectural heritage while embracing modern vitality.'
  },
  {
    icon: Coffee,
    title: 'Local Businesses',
    description: 'Small businesses thrive throughout Richmond, from corner coffee shops to family-owned restaurants.'
  }
];

export default function Neighborhoods() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=1920&q=80)',
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
              <Users className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-medium uppercase tracking-wider text-sm">Community Life</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-4">
              Neighborhoods
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Explore Richmond's diverse communities, each with its own character, history, and charm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-[#2d7d7d]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#2d7d7d]" />
                </div>
                <h3 className="font-display text-lg text-[#1e3a5f] font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl text-[#1e3a5f] font-bold mb-4">
              Explore Our Neighborhoods
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From historic districts to trendy hotspots, discover what makes each area unique.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <motion.div
                key={neighborhood.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-2xl text-white font-semibold">
                      {neighborhood.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {neighborhood.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-[#f5f5f5] text-[#1e3a5f] text-xs font-medium rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MapPin className="w-12 h-12 text-[#c9a227] mx-auto mb-6" />
            <h2 className="font-display text-3xl text-white font-bold mb-4">
              Find Your Perfect Neighborhood
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Whether you're looking for historic charm, urban energy, or family-friendly spaces, 
              Richmond has a neighborhood that feels like home.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}