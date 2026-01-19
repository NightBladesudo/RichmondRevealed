import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Clock, BookOpen } from 'lucide-react';
import Timeline from '@/components/history/Timeline';

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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl text-[#1e3a5f] font-bold mb-4">
              Timeline of Events
            </h2>
            <p className="text-gray-600">Key moments that shaped Richmond's history</p>
          </motion.div>

          <Timeline events={historyEvents} isLoading={isLoading} />
          </div>
          </section>
          </div>
          );
          }