import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import Timeline from '../components/history/Timeline';
import { ImageWithLightbox } from '../components/ui/image-lightbox';

export default function History() {
  const { data: events = [], isLoading } = useQuery({
    queryKey: ['historyEvents'],
    queryFn: () => base44.entities.HistoryEvent.list('year', 100),
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1568454537842-d933259bb258?w=1280)',
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
                image: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/0a58aadd4_image.png'
              },
              {
                title: 'Civil War',
                period: '1861-1865',
                description: 'As the Confederate capital, Richmond was central to the Civil War. The city fell in 1865, ending the conflict.',
                image: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/e771936a2_image.png'
              },
              {
                title: 'Modern Renaissance',
                period: '1960-Present',
                description: 'Today Richmond is a thriving, diverse city embracing its complex history while building an inclusive future.',
                image: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/44c001a38_image.png'
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
                <div className={`grid ${era.image2 ? 'grid-cols-2 gap-2' : 'grid-cols-1'} mb-5`}>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <ImageWithLightbox
                      src={era.image}
                      alt={era.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 pointer-events-none">
                      <span className="text-[#c9a227] text-sm font-medium">{era.period}</span>
                    </div>
                  </div>
                  {era.image2 && (
                    <div className="relative h-64 rounded-2xl overflow-hidden">
                      <ImageWithLightbox
                        src={era.image2}
                        alt={`${era.title} 2`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
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

          {/* Timeline Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-display text-3xl text-[#1e3a5f] font-bold mb-4">
                  Key Events Timeline
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Journey through Richmond's pivotal moments that shaped the city we know today
                </p>
              </motion.div>

              <Timeline events={events} isLoading={isLoading} />
            </div>
          </section>

          </div>
          );
          }