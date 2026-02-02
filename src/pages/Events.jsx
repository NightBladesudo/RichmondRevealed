import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { ImageWithLightbox } from '../components/ui/image-lightbox';

const categories = ['All', 'Festival', 'Art', 'Music', 'Food', 'Sports', 'Community', 'Family'];

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const { data: events = [], isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: () => base44.entities.Event.list('date', 50),
  });

  const filteredEvents = events.filter(event => {
    const categoryMatch = activeCategory === 'All' || event.category === activeCategory;
    const dateMatch = !selectedDate || isSameDay(new Date(event.date), selectedDate);
    return categoryMatch && dateMatch;
  });

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const eventDates = events.map(e => format(new Date(e.date), 'yyyy-MM-dd'));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1280)',
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
              <Calendar className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-medium uppercase tracking-wider text-sm">What's Happening</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-4">
              Calendar of Events
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Stay connected with festivals, art shows, music, and community happenings across Richmond.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-lg text-[#1e3a5f] font-semibold">
                  {format(currentMonth, 'MMMM yyyy')}
                </h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                    className="h-8 w-8"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                    className="h-8 w-8"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {Array(monthStart.getDay()).fill(null).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {daysInMonth.map(day => {
                  const dateStr = format(day, 'yyyy-MM-dd');
                  const hasEvent = eventDates.includes(dateStr);
                  const isSelected = selectedDate && isSameDay(day, selectedDate);
                  
                  return (
                    <button
                      key={dateStr}
                      onClick={() => setSelectedDate(isSelected ? null : day)}
                      className={`
                        relative py-2 text-sm rounded-lg transition-all
                        ${isSelected ? 'bg-[#a63d2f] text-white' : 'hover:bg-gray-100'}
                        ${!isSameMonth(day, currentMonth) ? 'text-gray-300' : 'text-gray-700'}
                      `}
                    >
                      {format(day, 'd')}
                      {hasEvent && (
                        <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-[#c9a227]'}`} />
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedDate && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedDate(null)}
                  className="w-full mt-4 text-[#a63d2f]"
                >
                  Clear Date Filter
                </Button>
              )}
            </div>
          </div>

          {/* Events List */}
          <div className="lg:col-span-2">
            {/* Category Filters */}
            <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-6">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category 
                    ? 'bg-[#a63d2f] hover:bg-[#8b3426] text-white' 
                    : 'border-gray-200 text-gray-600 hover:border-[#a63d2f] hover:text-[#a63d2f]'
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {isLoading ? (
              <div className="space-y-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="animate-pulse flex gap-6 bg-white rounded-2xl p-4">
                    <div className="w-32 h-32 bg-gray-200 rounded-xl flex-shrink-0" />
                    <div className="flex-1">
                      <div className="h-5 bg-gray-200 rounded w-1/4 mb-3" />
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                      <div className="h-4 bg-gray-200 rounded w-full" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row"
                  >
                    <div className="sm:w-48 h-48 sm:h-auto relative overflow-hidden flex-shrink-0">
                      <ImageWithLightbox
                        src={event.image_url}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-[#a63d2f]/10 text-[#a63d2f] text-xs font-semibold rounded-full">
                          {event.category}
                        </span>
                        <div className="flex items-center text-[#2d7d7d] text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {format(new Date(event.date), 'MMMM d, yyyy')}
                        </div>
                      </div>
                      <h3 className="font-display text-xl text-[#1e3a5f] font-semibold mb-2 group-hover:text-[#a63d2f] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {event.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1 text-[#2d7d7d]" />
                        {event.location}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {filteredEvents.length === 0 && !isLoading && (
              <div className="text-center py-16 bg-white rounded-2xl">
                <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No events found for the selected filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}