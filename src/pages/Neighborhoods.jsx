import React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Map } from 'lucide-react';
import InteractiveMap from '../components/neighborhoods/InteractiveMap';
import { ImageWithLightbox } from '../components/ui/image-lightbox';

const neighborhoods = [
  {
    name: 'The Fan District',
    description: 'Tree-lined streets with stunning Victorian and Edwardian architecture. Known for its vibrant restaurant scene, local shops, and close-knit community feel.',
    highlights: ['Historic Architecture', 'Walkable', 'Great Dining'],
    image: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg'
  },
  {
    name: 'Church Hill',
    description: 'One of Richmond\'s oldest neighborhoods, home to St. John\'s Church where Patrick Henry delivered his famous speech. Rich in history and character.',
    highlights: ['Historic', 'Views', 'Local Cafes'],
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/b30ab53f1_image.png'
  },
  {
    name: 'Scott\'s Addition',
    description: 'Former industrial area transformed into Richmond\'s hottest neighborhood. Home to craft breweries, cideries, restaurants, and art spaces.',
    highlights: ['Breweries', 'Trendy', 'Nightlife'],
    image: 'https://images.unsplash.com/photo-1542835497-a6813df96ed9?w=1280'
  },
  {
    name: 'Carytown',
    description: 'Richmond\'s mile-long shopping and dining district. Eclectic boutiques, vintage shops, and diverse restaurants line the bustling street.',
    highlights: ['Shopping', 'Restaurants', 'Entertainment'],
    image: 'https://cdn.pixabay.com/photo/2018/08/01/17/15/city-3577655_1280.jpg'
  },
  {
    name: 'Shockoe Bottom',
    description: 'Richmond\'s oldest commercial area, now a vibrant entertainment district with restaurants, bars, and farmers markets.',
    highlights: ['Nightlife', 'Markets', 'History'],
    image: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg'
  },
  {
    name: 'Oregon Hill',
    description: 'Close-knit community near VCU and the river, known for Hollywood Cemetery and stunning views of the James River rapids.',
    highlights: ['River Access', 'Historic Cemetery', 'Community'],
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/5e7d9dc14_image.png'
  },
  {
    name: 'Museum District',
    description: 'Home to Virginia Museum of Fine Arts and Science Museum. Beautiful tree-lined streets with elegant early 20th-century homes.',
    highlights: ['Museums', 'Architecture', 'Family-Friendly'],
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/388e5f51c_image.png'
  },
  {
    name: 'Manchester',
    description: 'Revitalized neighborhood on the south side of the James River with stunning city skyline views and a growing arts scene.',
    highlights: ['River Views', 'Arts', 'Affordable'],
    image: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg'
  },
  {
    name: 'Libbie & Grove',
    description: 'Upscale shopping and dining corridor known for boutiques, specialty shops, and award-winning restaurants.',
    highlights: ['Shopping', 'Fine Dining', 'Upscale'],
    image: 'https://cdn.pixabay.com/photo/2017/08/10/08/47/woman-2619168_1280.jpg'
  },
  {
    name: 'Jackson Ward',
    description: 'Historic neighborhood known for its African American heritage, beautiful architecture, and cultural significance. Home to significant civil rights history.',
    highlights: ['History', 'Culture', 'Heritage'],
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/6feaf8f01_image.png'
  },
  {
    name: 'Bellevue',
    description: 'Charming historic neighborhood with tree-lined streets, Victorian homes, and a tight-knit community atmosphere.',
    highlights: ['Historic Homes', 'Walkable', 'Community'],
    image: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_1280.jpg'
  },
  {
    name: 'South of Broad',
    description: 'Historic neighborhood near downtown Richmond featuring restored homes, galleries, and proximity to the James River.',
    highlights: ['Historic', 'Arts', 'River Proximity'],
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/bae1a67d7_image.png'
  },
  {
    name: 'Near West End',
    description: 'Growing residential neighborhood with diverse architecture, local shops, and convenient access to major thoroughfares.',
    highlights: ['Residential', 'Diverse', 'Accessible'],
    image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg'
  },
  {
    name: 'Northside',
    description: 'Up-and-coming neighborhood north of downtown with affordable housing, murals, and emerging dining and entertainment venues.',
    highlights: ['Affordable', 'Art Scene', 'Emerging'],
    image: 'https://cdn.pixabay.com/photo/2017/07/03/20/17/colorful-2468874_1280.jpg'
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=1280)',
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

      {/* Interactive Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Map className="w-6 h-6 text-[#a63d2f]" />
              <h2 className="font-display text-3xl text-[#1e3a5f] font-bold">
                Explore Richmond Map
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Navigate through neighborhoods, parks, restaurants, and historical landmarks. 
              Click on markers for more information.
            </p>
          </motion.div>
          
          <InteractiveMap />
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
                  <ImageWithLightbox
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
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