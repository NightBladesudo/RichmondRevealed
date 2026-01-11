import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Clock, BookOpen } from 'lucide-react';

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
            backgroundImage: 'url(data:image/jpeg;base64,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)',
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
              Richmond, Virginia stands at the confluence of history and progress. As the capital 
              of the Commonwealth and former capital of the Confederacy, our city has witnessed 
              some of the most pivotal moments in American history. Today, Richmond embraces its 
              complex past while forging a vibrant, inclusive future.
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
              Historical Timeline
            </h2>
            <p className="text-gray-600">
              Key moments that shaped our city
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#a63d2f]/20 transform md:-translate-x-1/2" />

            {historyEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#a63d2f] rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`flex items-center mb-3 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <Clock className="w-4 h-4 text-[#c9a227] mr-2" />
                      <span className="text-[#a63d2f] font-display font-bold text-xl">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="font-display text-lg text-[#1e3a5f] font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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