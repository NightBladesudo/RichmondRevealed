import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Clock, BookOpen, MapPin } from 'lucide-react';

export default function History() {
  const { data: historyEvents = [], isLoading } = useQuery({
    queryKey: ['historyEvents'],
    queryFn: () => base44.entities.HistoryEvent.list('year', 50),
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1920&q=80)',
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
              <BookOpen className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-medium uppercase tracking-wider text-sm">Our Story</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-6">
              History of Richmond
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
              From colonial settlement to modern metropolis, discover how Richmond shaped 
              and was shaped by American history.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed text-lg">
              Richmond, Virginia's capital, has played a key role in American history. Today, 
              the city honors its past while building a vibrant and inclusive future.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-4xl text-[#1e3a5f] font-bold mb-4">
              Historical Timeline
            </h2>
            <p className="text-gray-600 text-lg">
              Key moments that shaped Richmond
            </p>
          </motion.div>

          {isLoading ? (
            <div className="space-y-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="animate-pulse flex gap-8">
                  <div className="w-24 h-12 bg-gray-300 rounded" />
                  <div className="flex-1 space-y-3">
                    <div className="h-6 bg-gray-300 rounded w-1/3" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative">
              {/* Center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#a63d2f] to-[#c9a227] transform -translate-x-1/2" />

              <div className="space-y-12">
                {historyEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className={`flex items-start gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                  >
                    {/* Dot */}
                    <div className="flex flex-col items-center flex-shrink-0 w-20">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 + 0.2 }}
                        className="w-5 h-5 bg-[#a63d2f] rounded-full border-4 border-white shadow-lg z-10"
                      />
                    </div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      className="flex-1 pt-1"
                    >
                      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-default">
                        <div className="flex items-center gap-3 mb-3">
                          <Clock className="w-5 h-5 text-[#c9a227] flex-shrink-0 group-hover:rotate-12 transition-transform" />
                          <span className="font-display text-3xl font-bold text-[#a63d2f]">
                            {event.year}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl text-[#1e3a5f] font-semibold mb-3 group-hover:text-[#a63d2f] transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Historical Eras */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl text-[#1e3a5f] font-bold mb-4">
              Explore Historical Eras
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Colonial Era',
                period: '1607-1780',
                description: 'From Jamestown\'s founding to becoming the state capital, Richmond grew as a vital trading post on the James River.',
                image: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=600'
              },
              {
                title: 'Civil War',
                period: '1861-1865',
                description: 'As the Confederate capital, Richmond was central to the Civil War. The city fell in 1865, ending the conflict.',
                image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=600'
              },
              {
                title: 'Modern Renaissance',
                period: '1960-Present',
                description: 'Today Richmond is a thriving, diverse city embracing its complex history while building an inclusive future.',
                image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600'
              }
            ].map((era, index) => (
              <motion.div
                key={era.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-5">
                  <img
                    src={era.image}
                    alt={era.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[#c9a227] text-sm font-medium">{era.period}</span>
                  </div>
                </div>
                <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-3">
                  {era.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {era.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}