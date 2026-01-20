import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Utensils, TreePine, Landmark, ShoppingBag, GraduationCap, X, Maximize2, Plus, Minus } from 'lucide-react';
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
        { id: 'all', label: 'All', icon: MapPin, color: 'bg-slate-600 hover:bg-slate-700' },
        { id: 'neighborhood', label: 'Neighborhoods', icon: MapPin, color: 'bg-indigo-600 hover:bg-indigo-700' },
        { id: 'park', label: 'Parks', icon: TreePine, color: 'bg-green-600 hover:bg-green-700' },
        { id: 'historical', label: 'Historical Sites', icon: Landmark, color: 'bg-amber-600 hover:bg-amber-700' },
        { id: 'restaurant', label: 'Restaurants', icon: Utensils, color: 'bg-red-600 hover:bg-red-700' },
        { id: 'shopping', label: 'Shopping', icon: ShoppingBag, color: 'bg-pink-600 hover:bg-pink-700' },
        { id: 'education', label: 'Education', icon: GraduationCap, color: 'bg-purple-600 hover:bg-purple-700' },
      ];

      const categoryColors = {
        neighborhood: { marker: '#4F46E5', text: 'indigo' },
        park: { marker: '#16A34A', text: 'green' },
        historical: { marker: '#D97706', text: 'amber' },
        restaurant: { marker: '#DC2626', text: 'red' },
        shopping: { marker: '#EC4899', text: 'pink' },
        education: { marker: '#A855F7', text: 'purple' },
      };

      function ZoomControls() {
        const map = useMap();

        return (
          <div className="absolute top-4 left-4 z-[1000] flex flex-col gap-2">
            <Button
              onClick={() => map.zoomIn()}
              size="icon"
              className="bg-white hover:bg-gray-100 text-gray-700 shadow-lg border-2 border-gray-200"
            >
              <Plus className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => map.zoomOut()}
              size="icon"
              className="bg-white hover:bg-gray-100 text-gray-700 shadow-lg border-2 border-gray-200"
            >
              <Minus className="w-5 h-5" />
            </Button>
          </div>
        );
      }

            export default function InteractiveMap() {
        const [selectedCategory, setSelectedCategory] = useState('all');
        const [searchQuery, setSearchQuery] = useState('');
        const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen]);

  const filteredPoints = pointsOfInterest.filter(point => {
    const categoryMatch = selectedCategory === 'all' || point.category === selectedCategory;
    const searchMatch = point.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      point.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Input
          placeholder="Search locations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10 h-10 border-2 border-slate-200 focus:border-[#a63d2f] rounded-lg"
        />
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = selectedCategory === category.id;
          return (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-all duration-200 ${
                isActive
                  ? `${category.color} text-white shadow-lg scale-105`
                  : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          );
        })}
      </div>

      {/* Map */}
      <div className={`${isFullscreen ? 'fixed inset-0 z-40 bg-black/80 p-4 pt-24 flex items-center justify-center overflow-hidden' : 'relative z-10'}`}>
        <div 
          className={`${isFullscreen ? 'h-full w-full max-w-7xl' : 'h-[400px] md:h-[600px]'} rounded-2xl overflow-hidden shadow-lg border-4 border-white relative`}
          onDoubleClick={() => isFullscreen && setIsFullscreen(false)}
        >
          {!isFullscreen && (
            <div 
              className="absolute inset-0 z-10 bg-transparent flex items-center justify-center cursor-pointer"
              onClick={() => setIsFullscreen(true)}
            >
              <div className="bg-white/95 backdrop-blur px-6 py-4 rounded-lg shadow-xl border-2 border-slate-200">
                <p className="text-gray-700 font-semibold flex items-center gap-2">
                  <Maximize2 className="w-5 h-5 text-[#a63d2f]" />
                  Click to view
                </p>
              </div>
            </div>
          )}
          {isFullscreen && (
            <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-xl border-2 border-slate-200 pointer-events-none">
              <p className="text-gray-700 text-sm font-semibold">
                Double-click to exit
              </p>
            </div>
          )}
          <MapContainer
            center={[37.8, -78.5]}
            zoom={7}
            style={{ height: '100%', width: '100%' }}
            maxBounds={[[36.5, -83.7], [39.5, -75.2]]}
            maxBoundsViscosity={1.0}
            minZoom={6}
            maxZoom={13}
            dragging={true}
            scrollWheelZoom={isFullscreen}
            zoomControl={false}
          >
          <ZoomControls />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {filteredPoints.map((point) => {
            const colors = categoryColors[point.category] || { marker: '#6B7280', text: 'gray' };
            const markerIcon = L.divIcon({
              html: `<div style="background-color: ${colors.marker}; width: 32px; height: 40px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
                <div style="transform: rotate(45deg); color: white; font-weight: bold; font-size: 16px;">📍</div>
              </div>`,
              iconSize: [32, 40],
              iconAnchor: [16, 40],
              popupAnchor: [0, -40],
              className: 'custom-marker'
            });

            return (
              <Marker key={point.id} position={[point.lat, point.lng]} icon={markerIcon}>
                <Popup>
                  <div className="min-w-[250px] p-3">
                    <h3 className="font-display font-semibold text-[#1e3a5f] mb-2 text-base">
                      {point.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{point.description}</p>
                    <span className={`inline-block px-3 py-1.5 bg-${colors.text}-50 text-${colors.text}-700 text-xs font-semibold rounded-full`}>
                      {point.category.charAt(0).toUpperCase() + point.category.slice(1)}
                    </span>
                  </div>
                </Popup>
              </Marker>
            );
          })}
          </MapContainer>
        </div>
      </div>

      {/* Legend & Results */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a7a] rounded-lg p-4 shadow-lg text-white">
        <p className="text-sm">
          Showing <span className="font-semibold text-[#c9a227]">{filteredPoints.length}</span> location{filteredPoints.length !== 1 ? 's' : ''}
          {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </p>
      </div>
    </div>
  );
}