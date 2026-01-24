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
          description: 'Primary source for Richmond history and archives',
          mla: '"Valentine Richmond History Center." Valentine, www.valentinemuseum.com. Accessed 23 Jan. 2026.'
        },
        {
          title: 'Library of Virginia',
          url: 'https://www.lva.virginia.gov',
          description: 'State archives and historical records',
          mla: '"Library of Virginia." Library of Virginia, www.lva.virginia.gov. Accessed 23 Jan. 2026.'
        },
        {
          title: 'American Civil War Museum',
          url: 'https://acwm.org',
          description: 'Civil War history and documentation',
          mla: '"American Civil War Museum." American Civil War Museum, acwm.org. Accessed 23 Jan. 2026.'
        }
      ]
    },
    {
      category: 'Tourism & Attractions',
      sources: [
        {
          title: 'Visit Richmond',
          url: 'https://www.visitrichmondva.com',
          description: 'Official tourism board for Richmond, Virginia',
          mla: '"Visit Richmond." Richmond Region Tourism, www.visitrichmondva.com. Accessed 23 Jan. 2026.'
        },
        {
          title: 'Richmond Region Tourism',
          url: 'https://www.visitrichmond.com',
          description: 'Regional tourism information and guides',
          mla: '"Richmond Region Tourism." Richmond Region Tourism, www.visitrichmond.com. Accessed 23 Jan. 2026.'
        }
      ]
    },
    {
      category: 'City Government',
      sources: [
        {
          title: 'City of Richmond',
          url: 'https://www.rva.gov',
          description: 'Official city government website',
          mla: '"City of Richmond." City of Richmond, Virginia, www.rva.gov. Accessed 23 Jan. 2026.'
        },
        {
          title: 'Richmond Public Schools',
          url: 'https://www.rvaschools.net',
          description: 'Official school district information',
          mla: '"Richmond Public Schools." Richmond Public Schools, www.rvaschools.net. Accessed 23 Jan. 2026.'
        }
      ]
    },
    {
      category: 'Cultural Resources',
      sources: [
        {
          title: 'Virginia Museum of Fine Arts',
          url: 'https://www.vmfa.museum',
          description: 'Art and cultural information',
          mla: '"Virginia Museum of Fine Arts." Virginia Museum of Fine Arts, www.vmfa.museum. Accessed 23 Jan. 2026.'
        },
        {
          title: 'Richmond Symphony',
          url: 'https://richmondsymphony.com',
          description: 'Music and cultural events',
          mla: '"Richmond Symphony." Richmond Symphony, richmondsymphony.com. Accessed 23 Jan. 2026.'
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
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/06/18/15/58/deer-813358_1280.jpg)',
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

          <div className="space-y-6">
            {/* Hero Images */}
            <div>
              <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-4">Hero Section Images</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { location: 'Home Page Hero', url: 'https://pixabay.com/photos/water-bridge-travel-architecture-3314160/', source: 'Pixabay', photographer: 'timmorrisette33' },
                  { location: 'History Page Hero', url: 'https://pixabay.com/photos/water-bridge-travel-architecture-3314160/', source: 'Pixabay', photographer: 'timmorrisette33' },
                  { location: 'Attractions Page Hero', url: 'https://pixabay.com/photos/richmond-virginia-hadad-lake-736983/', source: 'Pixabay', photographer: 'smltd' },
                  { location: 'Events Page Hero', url: 'https://pixabay.com/photos/wachapreague-virginia-calm-water-7974344/', source: 'Pixabay', photographer: 'VACHAMP1984' },
                  { location: 'Neighborhoods Page Hero', url: 'https://pixabay.com/photos/waterfall-virginia-water-nature-851041/', source: 'Pixabay', photographer: 'diego_torres' },
                  { location: 'Business Page Hero', url: 'https://pixabay.com/photos/deer-forest-richmond-park-813364/', source: 'Pixabay', photographer: 'diego_torres' },
                  { location: 'Education Page Hero', url: 'https://pixabay.com/photos/saint-benedict-statue-catholic-2516519/', source: 'Pixabay', photographer: 'ariyandhamma' },
                  { location: 'Store Page Hero', url: 'https://pixabay.com/photos/virginia-indian-historic-village-226607/', source: 'Pixabay', photographer: 'JamesDeMers' },
                  { location: 'Contact Page Hero', url: 'https://pixabay.com/photos/waterfront-hotel-park-urban-7212424/', source: 'Pixabay', photographer: 'BruceEmmerling' },
                  { location: 'Citations Page Hero', url: 'https://pixabay.com/photos/deer-forest-richmond-park-813358/', source: 'Pixabay', photographer: 'diego_torres' },
                  { location: 'Virtual Reality Page Hero', url: 'https://pixabay.com/photos/deer-forest-richmond-park-813369/', source: 'Pixabay', photographer: 'diego_torres' },
                  { location: 'VR Tour - Monument Avenue', url: 'https://pixabay.com/photos/richmond-virginia-richmond-virginia-4611886/', source: 'Pixabay', photographer: 'andrewawood' },
                  { location: 'VR Tour - Belle Isle', url: 'https://pixabay.com/photos/water-rain-weather-drops-768583/', source: 'Pixabay', photographer: 'Unsplash' },
                  { location: 'VR Tour - Virginia State Capitol', url: 'https://pixabay.com/photos/architecture-building-castle-1835359/', source: 'Pixabay', photographer: 'Pexels' },
                  { location: 'VR Tour - Carytown', url: 'https://pixabay.com/photos/architecture-building-city-house-1867187/', source: 'Pixabay', photographer: 'Pexels' },
                  { location: 'VR Tour - James River Park', url: 'https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-1197515/', source: 'Pixabay', photographer: 'jplenio' },
                  { location: 'VR Tour - Scott\'s Addition', url: 'https://pixabay.com/photos/people-girls-women-students-2591874/', source: 'Pixabay', photographer: 'StockSnap' },
                ].map((credit, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-xs">
                    <p className="font-semibold text-[#1e3a5f] mb-2">{credit.location}</p>
                    <p className="text-gray-600 mb-1">Source: {credit.source}</p>
                    <p className="text-gray-600 mb-2">Credit: {credit.photographer}</p>
                    {credit.url !== '#' && (
                      <a href={credit.url} target="_blank" rel="noopener noreferrer" className="text-[#2d7d7d] hover:text-[#a63d2f] inline-flex items-center gap-1">
                        View <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Historical Media Gallery */}
            <div>
              <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-4">Historical Media Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'James River Canal (1785)', url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/7afe99cb6_image.png', source: 'User Submission', photographer: 'Historical Archive' },
                  { title: 'Monument Avenue, 1907', url: 'https://pixabay.com/photos/richmond-virginia-richmond-virginia-4611886/', source: 'Pixabay', photographer: 'andrewawood' },
                  { title: 'Main Street, Richmond (1910)', url: 'https://pixabay.com/photos/water-bridge-travel-architecture-3314160/', source: 'Pixabay', photographer: 'timmorrisette33' },
                  { title: 'St. John\'s Church (1775)', url: 'https://pixabay.com/photos/richmond-virginia-hadad-lake-736983/', source: 'Pixabay', photographer: 'smltd' },
                  { title: 'Civil War Richmond (1863)', url: 'https://pixabay.com/photos/wachapreague-virginia-calm-water-7974344/', source: 'Pixabay', photographer: 'VACHAMP1984' },
                  { title: 'Modern Richmond Skyline (2020)', url: 'https://pixabay.com/photos/waterfall-virginia-water-nature-851041/', source: 'Pixabay', photographer: 'diego_torres' },
                  { title: 'Civil Rights March (1963)', url: 'https://pixabay.com/photos/deer-forest-richmond-park-813364/', source: 'Pixabay', photographer: 'diego_torres' },
                  { title: 'School Integration (1968)', url: 'https://pixabay.com/photos/saint-benedict-statue-catholic-2516519/', source: 'Pixabay', photographer: 'ariyandhamma' },
                ].map((credit, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-xs">
                    <p className="font-semibold text-[#1e3a5f] mb-2">{credit.title}</p>
                    <p className="text-gray-600 mb-1">Source: {credit.source}</p>
                    <p className="text-gray-600 mb-2">Credit: {credit.photographer}</p>
                    {credit.url !== '#' && (
                      <a href={credit.url} target="_blank" rel="noopener noreferrer" className="text-[#2d7d7d] hover:text-[#a63d2f] inline-flex items-center gap-1">
                        View <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Historical Era Section Images */}
            <div>
              <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-4">Historical Era Section Images</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'Colonial Era Image', url: 'https://pixabay.com/photos/virginia-indian-historic-village-226607/', source: 'Pixabay', photographer: 'JamesDeMers' },
                  { title: 'Civil War Era Image', url: 'https://pixabay.com/photos/deer-forest-richmond-park-813358/', source: 'Pixabay', photographer: 'diego_torres' },
                  { title: 'Modern Renaissance Image', url: 'https://pixabay.com/photos/waterfront-hotel-park-urban-7212424/', source: 'Pixabay', photographer: 'BruceEmmerling' },
                ].map((credit, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-xs">
                    <p className="font-semibold text-[#1e3a5f] mb-2">{credit.title}</p>
                    <p className="text-gray-600 mb-1">Source: {credit.source}</p>
                    <p className="text-gray-600 mb-2">Credit: {credit.photographer}</p>
                    {credit.url !== '#' && (
                      <a href={credit.url} target="_blank" rel="noopener noreferrer" className="text-[#2d7d7d] hover:text-[#a63d2f] inline-flex items-center gap-1">
                        View <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Neighborhood Images */}
            <div>
              <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-4">Neighborhood Images</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { location: 'The Fan District', url: 'https://pixabay.com/photos/architecture-building-city-house-1867187/', source: 'Pixabay', photographer: 'Pexels' },
                  { location: 'Church Hill', url: 'https://pixabay.com/photos/architecture-building-castle-1835359/', source: 'Pixabay', photographer: 'Pexels' },
                  { location: 'Scott\'s Addition', url: 'https://pixabay.com/photos/people-girls-women-students-2591874/', source: 'Pixabay', photographer: 'StockSnap' },
                  { location: 'Carytown', url: 'https://pixabay.com/photos/hand-united-together-people-1850120/', source: 'Pixabay', photographer: 'sasint' },
                  { location: 'Shockoe Bottom', url: 'https://pixabay.com/photos/airport-transport-woman-girl-2373727/', source: 'Pixabay', photographer: 'JillWellington' },
                  { location: 'Oregon Hill', url: 'https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-1197515/', source: 'Pixabay', photographer: 'jplenio' },
                  { location: 'Museum District', url: 'https://pixabay.com/photos/astronomy-bright-constellation-dark-1867616/', source: 'Pixabay', photographer: 'Pexels' },
                  { location: 'Manchester', url: 'https://pixabay.com/photos/water-rain-weather-drops-768583/', source: 'Pixabay', photographer: 'Unsplash' },
                  { location: 'Libbie & Grove', url: 'https://pixabay.com/photos/woman-people-coffee-portrait-2619168/', source: 'Pixabay', photographer: 'StockSnap' },
                  { location: 'Jackson Ward', url: 'https://pixabay.com/photos/washington-dc-usa-america-travel-2730141/', source: 'Pixabay', photographer: 'bogitw' },
                  { location: 'Bellevue', url: 'https://pixabay.com/photos/couch-space-living-room-interior-1835923/', source: 'Pixabay', photographer: 'Pexels' },
                  { location: 'South of Broad', url: 'https://pixabay.com/photos/house-garage-driveway-stone-1836070/', source: 'Pixabay', photographer: 'Pexels' },
                  { location: 'Near West End', url: 'https://pixabay.com/photos/architecture-building-facade-1477041/', source: 'Pixabay', photographer: 'Tama66' },
                  { location: 'Northside', url: 'https://pixabay.com/photos/code-coding-computer-data-1076536/', source: 'Pixabay', photographer: 'Pexels' },
                ].map((credit, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-xs">
                    <p className="font-semibold text-[#1e3a5f] mb-2">{credit.location}</p>
                    <p className="text-gray-600 mb-1">Source: {credit.source}</p>
                    <p className="text-gray-600 mb-2">Credit: {credit.photographer}</p>
                    {credit.url !== '#' && (
                      <a href={credit.url} target="_blank" rel="noopener noreferrer" className="text-[#2d7d7d] hover:text-[#a63d2f] inline-flex items-center gap-1">
                        View <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Map Data */}
            <div>
              <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-4">Interactive Map</h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-[#1e3a5f] mb-2">Neighborhoods Interactive Map</p>
                <p className="text-xs text-gray-600 mb-1">Map Data: © OpenStreetMap Contributors</p>
                <p className="text-xs text-gray-600 mb-2">Tile Layer: OpenStreetMap Standard</p>
                <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="text-xs text-[#2d7d7d] hover:text-[#a63d2f] inline-flex items-center gap-1">
                  View License <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Other Content Images */}
            <div>
              <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-4">Additional Content Images</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { category: 'Attractions', count: 'Multiple images', source: 'Pixabay', url: 'https://pixabay.com' },
                  { category: 'Events', count: 'Multiple images', source: 'Pixabay', url: 'https://pixabay.com' },
                  { category: 'Business Listings', count: 'Multiple images', source: 'Pixabay', url: 'https://pixabay.com' },
                  { category: 'Store Products', count: 'Multiple images', source: 'Pixabay', url: 'https://pixabay.com' },
                  { category: 'Gallery Images', count: 'Multiple images', source: 'Pixabay', url: 'https://pixabay.com' },
                ].map((credit, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="font-semibold text-[#1e3a5f] mb-2 text-sm">{credit.category}</p>
                    <p className="text-xs text-gray-600 mb-1">{credit.count}</p>
                    <p className="text-xs text-gray-600 mb-2">Source: {credit.source}</p>
                    <a href={credit.url} target="_blank" rel="noopener noreferrer" className="text-xs text-[#2d7d7d] hover:text-[#a63d2f] inline-flex items-center gap-1">
                      View Source <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl space-y-3">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold">Pixabay:</span> Free high-quality images sourced from Pixabay, a vibrant community 
            of creators sharing royalty-free images. All images are released under the Pixabay License, making them safe to use 
            without attribution. Learn more at <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer" className="text-[#2d7d7d] hover:underline">pixabay.com</a>
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
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
                          <div className="space-y-2">
                            <p className="text-[#2d7d7d] text-xs break-all">
                              {source.url}
                            </p>
                            {source.mla && (
                              <div className="mt-3 pt-3 border-t border-gray-200">
                                <p className="text-xs text-gray-500 font-semibold mb-1">MLA Citation:</p>
                                <p className="text-xs text-gray-700 italic">{source.mla}</p>
                              </div>
                            )}
                          </div>
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

    </div>
  );
}