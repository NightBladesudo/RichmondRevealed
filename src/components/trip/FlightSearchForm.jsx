import React, { useState } from 'react';
import { Plane, ArrowRight, Calendar } from 'lucide-react';

export default function FlightSearchForm() {
  const [form, setForm] = useState({
    origin: '',
    tripType: 'roundtrip',
    departDate: '',
    returnDate: '',
    passengers: '1',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSearch = () => {
    const { origin, departDate, returnDate, passengers, tripType } = form;
    const dep = departDate ? departDate.replace(/-/g, '') : '';
    const ret = returnDate ? returnDate.replace(/-/g, '') : '';
    const from = origin.trim().toUpperCase() || 'anywhere';

    let url;
    if (tripType === 'roundtrip' && dep && ret) {
      url = `https://www.google.com/flights#flt=${from}.RIC.${dep}*RIC.${from}.${ret};c:USD;e:1;px:${passengers};sd:1;t:f`;
    } else {
      url = `https://www.google.com/flights#flt=${from}.RIC.${dep || ''};c:USD;e:1;px:${passengers};sd:1;t:f`;
    }

    window.open(url, '_blank');
  };

  return (
    <div className="space-y-4">
      {/* Trip Type */}
      <div className="flex gap-3">
        {['roundtrip', 'oneway'].map((type) => (
          <button
            key={type}
            onClick={() => setForm(prev => ({ ...prev, tripType: type }))}
            className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
              form.tripType === type
                ? 'bg-[#1e3a5f] border-[#1e3a5f] text-white'
                : 'border-gray-300 text-gray-600 hover:border-[#1e3a5f]'
            }`}
          >
            {type === 'roundtrip' ? 'Round Trip' : 'One Way'}
          </button>
        ))}
      </div>

      {/* Origin */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Flying From (City or Airport Code)</label>
        <div className="relative">
          <Plane className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            name="origin"
            value={form.origin}
            onChange={handleChange}
            placeholder="e.g. New York or JFK"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] bg-white"
          />
        </div>
      </div>

      {/* Destination (static) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Flying To</label>
        <div className="relative">
          <Plane className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a63d2f]" />
          <div className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-gray-100 text-gray-500 font-medium">
            Richmond International Airport (RIC)
          </div>
        </div>
      </div>

      {/* Dates */}
      <div className={`grid gap-4 ${form.tripType === 'roundtrip' ? 'grid-cols-2' : 'grid-cols-1'}`}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Departure Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="date"
              name="departDate"
              value={form.departDate}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] bg-white"
            />
          </div>
        </div>
        {form.tripType === 'roundtrip' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="date"
                name="returnDate"
                value={form.returnDate}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] bg-white"
              />
            </div>
          </div>
        )}
      </div>

      {/* Passengers */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
        <select
          name="passengers"
          value={form.passengers}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] bg-white"
        >
          {[1,2,3,4,5,6].map(n => (
            <option key={n} value={n}>{n} Passenger{n > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full flex items-center justify-center gap-2 bg-[#a63d2f] hover:bg-[#8b3426] text-white font-semibold py-3 rounded-xl transition-colors duration-200 text-sm"
      >
        <Plane className="w-4 h-4" />
        Search Flights on Google Flights
        <ArrowRight className="w-4 h-4" />
      </button>
      <p className="text-xs text-gray-400 text-center">Opens Google Flights in a new tab with your search details pre-filled.</p>
    </div>
  );
}