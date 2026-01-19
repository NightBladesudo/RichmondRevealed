import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Button } from '@/components/ui/button';
import { MapPin, Utensils, TreePine, Landmark, ShoppingBag, GraduationCap } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const pointsOfInterest = [
  // Neighborhoods
  { id: 1, name: 'The Fan District', lat: 37.5533, lng: -77.4703, category: 'neighborhood', description: 'Historic Victorian architecture and vibrant dining scene' },
  { id: 2, name: 'Church Hill', lat: 37.5297, lng: -77.4144, category: 'neighborhood', description: 'One of Richmond\'s oldest neighborhoods' },
  { id: 3, name: 'Scott\'s Addition', lat: 37.5667, lng: -77.4756, category: 'neighborhood', description: 'Craft breweries and trendy restaurants' },
  { id: 4, name: 'Carytown', lat: 37.5550, lng: -77.4850, category: 'neighborhood', description: 'Shopping and dining district' },
  { id: 5, name: 'Shockoe Bottom', lat: 37.5367, lng: -77.4297, category: 'neighborhood', description: 'Entertainment district with markets' },
  { id: 6, name: 'Oregon Hill', lat: 37.5369, lng: -77.4589, category: 'neighborhood', description: 'River access and Hollywood Cemetery' },
  { id: 7, name: 'Museum District', lat: 37.5572, lng: -77.4794, category: 'neighborhood', description: 'Home to major museums and galleries' },
  { id: 8, name: 'Manchester', lat: 37.5261, lng: -77.4372, category: 'neighborhood', description: 'South side neighborhood with city views' },
  
  // Parks
  { id: 20, name: 'Maymont Park', lat: 37.5447, lng: -77.4753, category: 'park', description: 'Historic estate with gardens and wildlife' },
  { id: 21, name: 'Belle Isle', lat: 37.5314, lng: -77.4564, category: 'park', description: 'Island park in the James River' },
  { id: 22, name: 'Byrd Park', lat: 37.5544, lng: -77.4872, category: 'park', description: 'Beautiful park with lakes and Carillon' },
  { id: 23, name: 'Brown\'s Island', lat: 37.5347, lng: -77.4417, category: 'park', description: 'Event space and outdoor activities' },
  
  // Historical Sites
  { id: 30, name: 'St. John\'s Church', lat: 37.5297, lng: -77.4144, category: 'historical', description: 'Patrick Henry\'s "Give me liberty" speech' },
  { id: 31, name: 'Virginia State Capitol', lat: 37.5387, lng: -77.4339, category: 'historical', description: 'Designed by Thomas Jefferson' },
  { id: 32, name: 'Hollywood Cemetery', lat: 37.5378, lng: -77.4619, category: 'historical', description: 'Historic cemetery overlooking the James' },
  { id: 33, name: 'Edgar Allan Poe Museum', lat: 37.5333, lng: -77.4242, category: 'historical', description: 'Honoring Richmond\'s literary legend' },
  
  // Restaurants
  { id: 40, name: 'The Roosevelt', lat: 37.5297, lng: -77.4156, category: 'restaurant', description: 'Southern comfort food in Church Hill' },
  { id: 41, name: 'L\'Opossum', lat: 37.5528, lng: -77.4708, category: 'restaurant', description: 'Eclectic fine dining in The Fan' },
  { id: 42, name: 'ZZQ', lat: 37.5667, lng: -77.4750, category: 'restaurant', description: 'Texas-style BBQ in Scott\'s Addition' },
  
  // Education
  { id: 50, name: 'Virginia Commonwealth University', lat: 37.5474, lng: -77.4519, category: 'education', description: 'Major research university' },
  { id: 51, name: 'University of Richmond', lat: 37.5783, lng: -77.5394, category: 'education', description: 'Private liberal arts university' },
  
  // Shopping
  { id: 60, name: 'Carytown Shopping', lat: 37.5550, lng: -77.4850, category: 'shopping', description: 'Unique boutiques and vintage shops' },
  { id: 61, name: 'Libbie & Grove', lat: 37.5908, lng: -77.5214, category: 'shopping', description: 'Upscale shopping corridor' },
];

const categories = [
  { id: 'all', label: 'All', icon: MapPin },
  { id: 'neighborhood', label: 'Neighborhoods', icon: MapPin },
  { id: 'park', label: 'Parks', icon: TreePine },
  { id: 'historical', label: 'Historical Sites', icon: Landmark },
  { id: 'restaurant', label: 'Restaurants', icon: Utensils },
  { id: 'shopping', label: 'Shopping', icon: ShoppingBag },
  { id: 'education', label: 'Education', icon: GraduationCap },
];

export default function InteractiveMap() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPoints = selectedCategory === 'all' 
    ? pointsOfInterest 
    : pointsOfInterest.filter(point => point.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? 'bg-[#a63d2f] hover:bg-[#8b3426]' : ''}
            >
              <Icon className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          );
        })}
      </div>

      {/* Map */}
      <div className="h-[600px] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
        <MapContainer
          center={[37.5407, -77.4360]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {filteredPoints.map((point) => (
            <Marker key={point.id} position={[point.lat, point.lng]}>
              <Popup>
                <div className="p-2">
                  <h3 className="font-display font-semibold text-[#1e3a5f] mb-1">
                    {point.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{point.description}</p>
                  <span className="inline-block px-2 py-1 bg-[#a63d2f]/10 text-[#a63d2f] text-xs font-medium rounded">
                    {point.category}
                  </span>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <p className="text-sm text-gray-600">
          Showing <span className="font-semibold text-[#1e3a5f]">{filteredPoints.length}</span> locations
          {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
        </p>
      </div>
    </div>
  );
}