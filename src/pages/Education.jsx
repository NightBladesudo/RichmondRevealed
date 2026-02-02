import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building, BookOpen, Library, Users } from 'lucide-react';
import { ImageWithLightbox } from '../components/ui/image-lightbox';

const universities = [
  {
    name: 'Virginia Commonwealth University',
    type: 'Public Research University',
    description: 'VCU is a major public research university and academic health center. Home to top-ranked arts, medical, and business programs.',
    students: '30,000+',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600'
  },
  {
    name: 'University of Richmond',
    type: 'Private Liberal Arts University',
    description: 'A highly selective private university known for its beautiful campus, strong academics, and collegiate athletics.',
    students: '4,000+',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600'
  },
  {
    name: 'Virginia Union University',
    type: 'Private HBCU',
    description: 'A historic HBCU founded in 1865, offering undergraduate and graduate programs in a nurturing environment.',
    students: '1,500+',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600'
  }
];

const schools = [
  {
    name: 'Richmond Public Schools',
    type: 'K-12',
    description: 'Serving over 23,000 students across the city with diverse academic programs and magnet schools.'
  },
  {
    name: 'Magnet Schools',
    type: 'Specialty Programs',
    description: 'Specialized schools focusing on STEM, arts, international baccalaureate, and governor\'s programs.'
  },
  {
    name: 'Private & Parochial',
    type: 'Independent Schools',
    description: 'Numerous private and religious schools offering alternative educational approaches.'
  }
];

const resources = [
  {
    icon: Library,
    name: 'Richmond Public Library',
    description: '9 locations throughout the city offering free programs, resources, and community spaces.',
    link: '#'
  },
  {
    icon: Building,
    name: 'Community Centers',
    description: 'Parks and Recreation centers offering after-school programs, classes, and activities.',
    link: '#'
  },
  {
    icon: Users,
    name: 'Youth Programs',
    description: 'Various nonprofits and organizations providing mentorship, tutoring, and enrichment.',
    link: '#'
  }
];

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/20/cambridge.JPG?w=1280)',
          }}
        >
          <div className="absolute inset-0 bg-[#1e3a5f]/75" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-medium uppercase tracking-wider text-sm">Learn & Grow</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-4">
              Education & Resources
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              From world-class universities to community resources, Richmond is committed to lifelong learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl text-[#1e3a5f] font-bold mb-4">
              Higher Education
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Richmond is home to several renowned colleges and universities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {universities.map((uni, index) => (
              <motion.div
                key={uni.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithLightbox
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                    <span className="text-[#c9a227] text-sm font-medium">{uni.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-3">
                    {uni.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {uni.description}
                  </p>
                  <div className="flex items-center text-sm text-[#2d7d7d] font-medium">
                    <Users className="w-4 h-4 mr-2" />
                    {uni.students} Students
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* K-12 Schools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl text-[#1e3a5f] font-bold mb-4">
              K-12 Education
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quality education options for families at every level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schools.map((school, index) => (
              <motion.div
                key={school.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#a63d2f]/10 rounded-xl flex items-center justify-center mb-5">
                  <BookOpen className="w-6 h-6 text-[#a63d2f]" />
                </div>
                <span className="text-[#2d7d7d] text-sm font-medium">{school.type}</span>
                <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mt-2 mb-3">
                  {school.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {school.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl text-[#1e3a5f] font-bold mb-4">
              Community Resources
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Libraries, centers, and programs supporting lifelong learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1e3a5f] rounded-2xl p-8 text-white"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                  <resource.icon className="w-6 h-6 text-[#c9a227]" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {resource.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {resource.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}