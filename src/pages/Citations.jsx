import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Camera } from 'lucide-react';

export default function Citations() {
  const citations = [
    {
      category: 'Historical Resources',
      sources: [
        {
          title: 'Valentine Richmond History Center',
          url: 'https://valentinemuseum.com',
          description: 'Primary source for Richmond history and archives'
        },
        {
          title: 'Library of Virginia',
          url: 'https://www.lva.virginia.gov',
          description: 'State archives and historical records'
        },
        {
          title: 'American Civil War Museum',
          url: 'https://acwm.org',
          description: 'Civil War history and documentation'
        }
      ]
    },
    {
      category: 'Tourism & Attractions',
      sources: [
        {
          title: 'Visit Richmond',
          url: 'https://www.visitrichmondva.com',
          description: 'Official tourism board for Richmond, Virginia'
        },
        {
          title: 'Richmond Region Tourism',
          url: 'https://www.visitrichmond.com',
          description: 'Regional tourism information and guides'
        }
      ]
    },
    {
      category: 'City Government',
      sources: [
        {
          title: 'City of Richmond',
          url: 'https://www.rva.gov',
          description: 'Official city government website'
        },
        {
          title: 'Richmond Public Schools',
          url: 'https://www.rvaschools.net',
          description: 'Official school district information'
        }
      ]
    },
    {
      category: 'Cultural Resources',
      sources: [
        {
          title: 'Virginia Museum of Fine Arts',
          url: 'https://www.vmfa.museum',
          description: 'Art and cultural information'
        },
        {
          title: 'Richmond Symphony',
          url: 'https://richmondsymphony.com',
          description: 'Music and cultural events'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80)',
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
              <span className="text-[#c9a227] font-medium uppercase tracking-wider text-sm">Sources & References</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-4">
              Citations
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Resources and references used to create this comprehensive guide to Richmond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 leading-relaxed text-lg">
            Richmond Revealed draws from a variety of trusted sources including historical archives, 
            official government resources, cultural institutions, and local tourism organizations. 
            Below are the primary references used throughout this website.
          </p>
        </div>
      </section>

      {/* Photo Credits */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="w-6 h-6 text-[#a63d2f]" />
              <h2 className="font-display text-3xl text-[#1e3a5f] font-bold">
                Photo Credits
              </h2>
            </div>
            <p className="text-gray-600">
              All images used throughout Richmond Revealed are credited below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { page: 'Home Hero', source: 'Unsplash', photographer: 'Various Contributors', url: 'https://unsplash.com' },
              { page: 'History Page', source: 'Unsplash', photographer: 'Various Contributors', url: 'https://unsplash.com' },
              { page: 'Attractions', source: 'Unsplash', photographer: 'Various Contributors', url: 'https://unsplash.com' },
              { page: 'Neighborhoods Map', source: 'OpenStreetMap', photographer: 'OpenStreetMap Contributors', url: 'https://www.openstreetmap.org/copyright' },
              { page: 'Events', source: 'Unsplash', photographer: 'Various Contributors', url: 'https://unsplash.com' },
              { page: 'Business Listings', source: 'Unsplash', photographer: 'Various Contributors', url: 'https://unsplash.com' },
              { page: 'Education', source: 'Unsplash', photographer: 'Various Contributors', url: 'https://unsplash.com' },
              { page: 'Store Products', source: 'Unsplash', photographer: 'Various Contributors', url: 'https://unsplash.com' },
              { page: 'Historical Media Gallery', source: 'Library of Congress / Unsplash', photographer: 'Historical Archives & Contributors', url: 'https://www.loc.gov' },
              { page: 'James River Canal Historical Photo', source: 'User Submission', photographer: 'Historical Archive', url: '#' },
            ].map((credit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-lg p-5 border border-gray-200"
              >
                <h3 className="font-semibold text-[#1e3a5f] mb-2 text-sm">
                  {credit.page}
                </h3>
                <div className="space-y-1 text-xs text-gray-600">
                  <p><span className="font-medium">Source:</span> {credit.source}</p>
                  <p><span className="font-medium">Credit:</span> {credit.photographer}</p>
                  {credit.url !== '#' && (
                    <a
                      href={credit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2d7d7d] hover:text-[#a63d2f] inline-flex items-center gap-1 mt-1"
                    >
                      View Source <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold">Unsplash License:</span> Photos from Unsplash are used under the Unsplash License, 
              which allows free use for commercial and non-commercial purposes without attribution required (though appreciated). 
              Learn more at <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="text-[#2d7d7d] hover:underline">unsplash.com/license</a>
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mt-3">
              <span className="font-semibold">OpenStreetMap:</span> Map data © OpenStreetMap contributors, available under the 
              Open Database License. Learn more at <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="text-[#2d7d7d] hover:underline">openstreetmap.org/copyright</a>
            </p>
          </div>
        </div>
      </section>

      {/* Citations by Category */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {citations.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="font-display text-2xl text-[#1e3a5f] font-bold mb-6">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.sources.map((source, sourceIndex) => (
                    <div
                      key={sourceIndex}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start justify-between group"
                      >
                        <div className="flex-1">
                          <h3 className="font-display text-lg text-[#1e3a5f] font-semibold mb-2 group-hover:text-[#a63d2f] transition-colors">
                            {source.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {source.description}
                          </p>
                          <p className="text-[#2d7d7d] text-xs break-all">
                            {source.url}
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#a63d2f] transition-colors flex-shrink-0 ml-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-4">
              Disclaimer
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              While we strive for accuracy, information on this website is subject to change. 
              Please verify current details with official sources before making plans. Richmond Revealed 
              is an independent guide and is not officially affiliated with the City of Richmond or 
              Visit Richmond organizations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}