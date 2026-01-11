import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Landmark, Calendar, Users, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Landmark,
    title: 'Rich History',
    description: 'From colonial beginnings to modern renaissance, explore Richmond\'s pivotal role in American history.',
    link: 'History',
    color: 'bg-[#a63d2f]'
  },
  {
    icon: Calendar,
    title: 'Vibrant Events',
    description: 'Festivals, art walks, and cultural celebrations happening year-round in our dynamic city.',
    link: 'Events',
    color: 'bg-[#2d7d7d]'
  },
  {
    icon: Users,
    title: 'Strong Community',
    description: 'Discover diverse neighborhoods, each with unique character and welcoming spirit.',
    link: 'Neighborhoods',
    color: 'bg-[#c9a227]'
  },
  {
    icon: ShoppingBag,
    title: 'Local Flavor',
    description: 'Support local businesses, from acclaimed restaurants to charming boutiques.',
    link: 'Business',
    color: 'bg-[#1e3a5f]'
  }
];

export default function FeatureCards() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl text-[#1e3a5f] font-bold mb-4">
            Discover What Makes Richmond Special
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A city where history meets innovation, and community thrives along the beautiful James River.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={createPageUrl(feature.link)}
                className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <span className="inline-flex items-center text-[#2d7d7d] font-medium text-sm group-hover:text-[#a63d2f] transition-colors">
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}