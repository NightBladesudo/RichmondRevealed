import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Hotel, Utensils, Car, Sun, Cloud, Umbrella, CheckSquare, Square, Printer } from 'lucide-react';

const neighborhoods = [
  'The Fan District', 'Church Hill', "Scott's Addition", 'Carytown',
  'Shockoe Bottom', 'Oregon Hill', 'Museum District', 'Manchester',
  'Libbie & Grove', 'Jackson Ward'
];

const topAttractions = [
  { name: 'Virginia Museum of Fine Arts', category: 'Culture', time: '2–3 hours' },
  { name: 'Maymont', category: 'Nature', time: '2–3 hours' },
  { name: 'Belle Isle', category: 'Nature', time: '1–2 hours' },
  { name: 'Virginia State Capitol', category: 'Historic', time: '1 hour' },
  { name: 'Lewis Ginter Botanical Garden', category: 'Nature', time: '2 hours' },
  { name: 'Hollywood Cemetery', category: 'Historic', time: '1–2 hours' },
  { name: 'American Civil War Museum', category: 'Historic', time: '2 hours' },
  { name: "St. John's Church", category: 'Historic', time: '45 min' },
];

const diningSpots = [
  { name: 'The Roosevelt', cuisine: 'New American', neighborhood: 'Church Hill' },
  { name: 'L\'Opossum', cuisine: 'Eclectic', neighborhood: 'Museum District' },
  { name: 'Brenner Pass', cuisine: 'Alpine', neighborhood: "Scott's Addition" },
  { name: 'Dinamo', cuisine: 'Pizza & Wine', neighborhood: 'Battery Park' },
  { name: 'Mama J\'s', cuisine: 'Soul Food', neighborhood: 'Jackson Ward' },
  { name: 'Sub Rosa Bakery', cuisine: 'Artisan Bakery', neighborhood: 'Church Hill' },
];

const travelTips = [
  { icon: Car, tip: 'Driving & Parking', detail: 'Richmond is very drivable. Street parking is free on Sundays. Use the Diamond District garage for downtown visits.' },
  { icon: Sun, tip: 'Best Time to Visit', detail: 'Spring (April–May) and Fall (Sept–Oct) offer the best weather. Summers are hot and humid; winters are mild.' },
  { icon: Calendar, tip: 'Popular Events', detail: 'Richmond Folk Festival (October), Dominion Energy Classic (October), and Friday Cheers (May–August) are crowd favorites.' },
  { icon: Hotel, tip: 'Where to Stay', detail: 'The Fan and Museum District offer charming B&Bs. Downtown hotels are close to Capitol Square and the riverfront.' },
];

const itineraries = [
  {
    days: '1 Day',
    color: 'bg-[#a63d2f]',
    stops: [
      'Morning: Coffee at Lamplighter Roasting Co.',
      'Mid-Morning: Virginia Museum of Fine Arts',
      'Lunch: Carytown restaurant strip',
      'Afternoon: Belle Isle trail walk',
      'Evening: Dinner in Scott\'s Addition breweries',
    ]
  },
  {
    days: '2 Days',
    color: 'bg-[#2d7d7d]',
    stops: [
      'Day 1: VMFA, Carytown, Belle Isle, Scott\'s Addition',
      'Day 2 Morning: Virginia State Capitol & Capitol Square',
      'Day 2 Lunch: Jackson Ward – Mama J\'s Soul Food',
      'Day 2 Afternoon: Hollywood Cemetery',
      'Day 2 Evening: Shockoe Bottom dinner & nightlife',
    ]
  },
  {
    days: '3 Days',
    color: 'bg-[#1e3a5f]',
    stops: [
      'Day 1: Downtown, Capitol, Jackson Ward',
      'Day 2: Maymont, Lewis Ginter Botanical Garden',
      'Day 3 Morning: Church Hill & St. John\'s Church',
      'Day 3 Afternoon: James River Park kayaking',
      'Day 3 Evening: Fan District dining & nightlife',
    ]
  }
];

export default function PlanYourTrip() {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (key) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1280)' }}
        >
          <div className="absolute inset-0 bg-[#1e3a5f]/80" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-medium uppercase tracking-wider text-sm">Your Richmond Journey</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-4">Plan Your Trip</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Everything you need to plan the perfect visit to Richmond, Virginia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Suggested Itineraries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl text-[#1e3a5f] font-bold mb-3">Suggested Itineraries</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Whether you have one day or three, here's how to make the most of your visit.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itineraries.map((itin, index) => (
              <motion.div
                key={itin.days}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden"
              >
                <div className={`${itin.color} px-6 py-4`}>
                  <h3 className="font-display text-xl text-white font-bold">{itin.days} in Richmond</h3>
                </div>
                <ul className="p-6 space-y-3">
                  {itin.stops.map((stop, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1 w-2 h-2 rounded-full bg-[#c9a227] flex-shrink-0" />
                      {stop}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Attractions Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="font-display text-3xl text-[#1e3a5f] font-bold mb-2">Must-See Attractions Checklist</h2>
            <p className="text-gray-500 text-sm">Check off the places you plan to visit.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topAttractions.map((item) => {
              const key = `attraction-${item.name}`;
              const checked = checkedItems[key];
              return (
                <button
                  key={item.name}
                  onClick={() => toggleCheck(key)}
                  className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${checked ? 'border-[#2d7d7d] bg-[#2d7d7d]/5' : 'border-gray-200 bg-white hover:border-[#1e3a5f]'}`}
                >
                  <div className="flex items-start gap-3">
                    {checked
                      ? <CheckSquare className="w-5 h-5 text-[#2d7d7d] flex-shrink-0 mt-0.5" />
                      : <Square className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />}
                    <div>
                      <p className={`font-semibold text-sm ${checked ? 'line-through text-gray-400' : 'text-[#1e3a5f]'}`}>{item.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.category} · {item.time}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dining Recommendations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <Utensils className="w-6 h-6 text-[#a63d2f]" />
              <h2 className="font-display text-3xl text-[#1e3a5f] font-bold">Top Dining Picks</h2>
            </div>
            <p className="text-gray-500">A taste of Richmond's acclaimed food scene.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diningSpots.map((spot, index) => (
              <motion.div
                key={spot.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl p-5 border border-gray-200"
              >
                <p className="font-display text-lg text-[#1e3a5f] font-semibold mb-1">{spot.name}</p>
                <p className="text-sm text-[#a63d2f] font-medium mb-1">{spot.cuisine}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin className="w-3 h-3" />
                  {spot.neighborhood}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl text-white font-bold mb-3">Visitor Tips</h2>
            <p className="text-gray-300 max-w-xl mx-auto">Helpful advice to make your Richmond trip smooth and memorable.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelTips.map((tip, index) => (
              <motion.div
                key={tip.tip}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 rounded-2xl p-6"
              >
                <tip.icon className="w-8 h-8 text-[#c9a227] mb-4" />
                <h3 className="font-display text-lg text-white font-semibold mb-2">{tip.tip}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{tip.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Neighborhood */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="font-display text-3xl text-[#1e3a5f] font-bold mb-2">Explore by Neighborhood</h2>
            <p className="text-gray-500">Each area of Richmond has its own distinct character.</p>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {neighborhoods.map((n, i) => (
              <motion.span
                key={n}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#1e3a5f] shadow-sm hover:bg-[#1e3a5f] hover:text-white transition-colors cursor-default"
              >
                {n}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}