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
            backgroundImage: 'url(https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=1920&q=80)',
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