import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Image as ImageIcon, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function MediaGallery({ media, onSubmitClick }) {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Eras' },
    { id: 'Colonial Era', label: 'Colonial Era' },
    { id: 'Civil War', label: 'Civil War' },
    { id: 'Industrial Age', label: 'Industrial Age' },
    { id: 'Civil Rights', label: 'Civil Rights' },
    { id: 'Modern Era', label: 'Modern Era' }
  ];

  const categoryColors = {
    'Colonial Era': 'bg-amber-100 text-amber-800',
    'Civil War': 'bg-red-100 text-red-800',
    'Industrial Age': 'bg-slate-100 text-slate-800',
    'Civil Rights': 'bg-purple-100 text-purple-800',
    'Modern Era': 'bg-blue-100 text-blue-800'
  };

  const filteredMedia = selectedCategory === 'all' 
    ? media 
    : media.filter(m => m.category === selectedCategory);

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            variant={selectedCategory === cat.id ? "default" : "outline"}
            className={selectedCategory === cat.id ? "bg-[#a63d2f] hover:bg-[#8b3426]" : ""}
          >
            {cat.label}
          </Button>
        ))}
      </div>

      {/* Submit Media Button */}
      <div className="mb-8 text-center">
        <Button
          onClick={onSubmitClick}
          className="bg-[#1e3a5f] hover:bg-[#2d4a7a]"
        >
          <Award className="w-4 h-4 mr-2" />
          Submit Your Historical Media
        </Button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMedia.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedMedia(item)}
            className="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {item.media_type === 'image' ? (
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.media_url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
            ) : (
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <video
                  src={item.media_url}
                  className="w-full h-full object-cover"
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white opacity-80" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                {item.media_type === 'image' ? (
                  <ImageIcon className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
                {item.category && (
                  <Badge className={categoryColors[item.category]}>
                    {item.category}
                  </Badge>
                )}
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
              {item.year && (
                <div className="flex items-center gap-1 text-sm text-gray-200">
                  <Calendar className="w-3 h-3" />
                  {item.year}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {filteredMedia.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p className="text-lg">No media found in this category</p>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <Button
              onClick={() => setSelectedMedia(null)}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </Button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              {selectedMedia.media_type === 'image' ? (
                <img
                  src={selectedMedia.media_url}
                  alt={selectedMedia.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              ) : (
                <video
                  src={selectedMedia.media_url}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              )}
              
              <div className="mt-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="font-display text-2xl font-bold">{selectedMedia.title}</h2>
                  {selectedMedia.category && (
                    <Badge className={categoryColors[selectedMedia.category]}>
                      {selectedMedia.category}
                    </Badge>
                  )}
                </div>
                {selectedMedia.description && (
                  <p className="text-gray-300 mb-2">{selectedMedia.description}</p>
                )}
                <div className="flex gap-4 text-sm text-gray-400">
                  {selectedMedia.year && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedMedia.year}
                    </div>
                  )}
                  {selectedMedia.source && (
                    <div>Source: {selectedMedia.source}</div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}