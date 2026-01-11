import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

export default function UpcomingEvents({ events }) {
  return (
    <section className="py-20 bg-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-[#c9a227] font-medium uppercase tracking-wider text-sm">
              What's Happening
            </span>
            <h2 className="font-display text-4xl text-white font-bold mt-2">
              Upcoming Events
            </h2>
          </div>
          <Link
            to={createPageUrl('Events')}
            className="mt-4 md:mt-0 inline-flex items-center text-[#c9a227] font-semibold hover:text-white transition-colors"
          >
            View Full Calendar
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(0, 3).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image_url}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-[#a63d2f] rounded-full text-xs font-semibold text-white">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-[#c9a227] text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {format(new Date(event.date), 'MMMM d, yyyy')}
                </div>
                <h3 className="font-display text-xl text-white font-semibold mb-2 group-hover:text-[#c9a227] transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <MapPin className="w-4 h-4 mr-1" />
                  {event.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}