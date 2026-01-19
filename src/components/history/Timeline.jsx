import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function Timeline({ events, isLoading }) {
  if (isLoading) {
    return (
      <div className="space-y-8">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-6 animate-pulse">
            <div className="w-20 flex-shrink-0">
              <div className="h-12 bg-gray-200 rounded-full" />
            </div>
            <div className="flex-1">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#a63d2f] via-[#2d7d7d] to-[#c9a227] hidden md:block transform -translate-x-1/2" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`flex gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Content */}
            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-[#a63d2f]" />
                  <span className="text-[#a63d2f] font-bold text-lg">{event.year}</span>
                </div>
                <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-2">
                  {event.title}
                </h3>
                {event.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                )}
              </div>
            </div>

            {/* Timeline dot */}
            <div className="flex justify-center md:flex-col md:items-center">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-4 h-4 bg-[#a63d2f] rounded-full border-4 border-white shadow-lg"
              />
            </div>

            {/* Spacer for alternating layout */}
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>

      {events.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No historical events found.</p>
        </div>
      )}
    </div>
  );
}