import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function Timeline() {
  const { data: events = [] } = useQuery({
    queryKey: ['historyEvents'],
    queryFn: () => base44.entities.HistoryEvent.list('year'),
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl text-[#1e3a5f] font-bold mb-4">
            Historical Timeline
          </h2>
          <p className="text-gray-600 text-lg">
            Key moments that shaped Richmond's story
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#a63d2f] to-[#2d7d7d] md:left-1/2 md:-translate-x-1/2" />

          {/* Timeline entries */}
          <div className="space-y-12 md:space-y-16">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 bg-[#a63d2f] rounded-full border-4 border-white shadow-lg z-10 md:left-1/2 md:-translate-x-1/2" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Year */}
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-[#a63d2f]" />
                      <span className="font-display text-2xl sm:text-3xl font-bold text-[#a63d2f]">
                        {event.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-3">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}