import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Utensils, TreePine, Landmark, ShoppingBag, GraduationCap, X, Maximize2, Plus, Minus } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const pointsOfInterest = [
  // Neighborhoods
  { id: 1, name: 'The Fan District', lat: 37.5533, lng: -77.4703, category: 'neighborhood', description: 'Historic Victorian architecture and vibrant dining scene along Monument Avenue.', address: 'Monument Ave, Richmond, VA 23220', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80' },
  { id: 2, name: 'Church Hill', lat: 37.5297, lng: -77.4144, category: 'neighborhood', description: "One of Richmond's oldest and most charming neighborhoods with stunning city views.", address: 'Church Hill, Richmond, VA 23223', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80' },
  { id: 3, name: "Scott's Addition", lat: 37.5667, lng: -77.4756, category: 'neighborhood', description: 'A trendy craft brewery and restaurant hub in a converted industrial district.', address: "Scott's Addition, Richmond, VA 23230", image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&q=80' },
  { id: 4, name: 'Carytown', lat: 37.5550, lng: -77.4850, category: 'neighborhood', description: "Richmond's most eclectic shopping and dining strip with unique local boutiques.", address: 'Cary St, Richmond, VA 23221', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80' },
  { id: 5, name: 'Shockoe Bottom', lat: 37.5367, lng: -77.4297, category: 'neighborhood', description: 'Historic entertainment district featuring markets, nightlife, and cobblestone streets.', address: 'Shockoe Bottom, Richmond, VA 23223', image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=400&q=80' },
  { id: 6, name: 'Oregon Hill', lat: 37.5369, lng: -77.4589, category: 'neighborhood', description: 'A tight-knit community with direct access to the James River and Hollywood Cemetery.', address: 'Oregon Hill, Richmond, VA 23220', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
  { id: 7, name: 'Museum District', lat: 37.5572, lng: -77.4794, category: 'neighborhood', description: 'Home to major museums, galleries, and tree-lined streets in the heart of the city.', address: 'Museum District, Richmond, VA 23221', image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=400&q=80' },
  { id: 8, name: 'Manchester', lat: 37.5261, lng: -77.4372, category: 'neighborhood', description: 'An up-and-coming south side neighborhood with sweeping skyline views.', address: 'Manchester, Richmond, VA 23224', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80' },

  // Parks
  { id: 20, name: 'Maymont Park', lat: 37.5447, lng: -77.4753, category: 'park', description: 'A breathtaking historic estate with Italian and Japanese gardens, wildlife, and nature center.', address: '1700 Hampton St, Richmond, VA 23220', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80' },
  { id: 21, name: 'Belle Isle', lat: 37.5314, lng: -77.4564, category: 'park', description: 'A stunning island in the James River offering hiking, rock climbing, and swimming.', address: 'Belle Isle, Richmond, VA 23220', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80' },
  { id: 22, name: 'Byrd Park', lat: 37.5544, lng: -77.4872, category: 'park', description: 'Beautiful urban park featuring serene lakes, the Carillon bell tower, and scenic walking paths.', address: '600 S Boulevard, Richmond, VA 23220', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80' },
  { id: 23, name: "Brown's Island", lat: 37.5347, lng: -77.4417, category: 'park', description: 'A popular riverside event space and outdoor gathering spot along the James River.', address: "Brown's Island, Richmond, VA 23219", image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },

  // Historical Sites
  { id: 30, name: "St. John's Church", lat: 37.5297, lng: -77.4144, category: 'historical', description: 'The historic church where Patrick Henry delivered his famous "Give me liberty or give me death" speech in 1775.', address: '2401 E Broad St, Richmond, VA 23223', image: 'https://images.unsplash.com/photo-1548625149-720754403a6e?w=400&q=80' },
  { id: 31, name: 'Virginia State Capitol', lat: 37.5387, lng: -77.4339, category: 'historical', description: 'Designed by Thomas Jefferson, this neoclassical building has been the seat of Virginia government since 1788.', address: '1000 Bank St, Richmond, VA 23219', image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80' },
  { id: 32, name: 'Hollywood Cemetery', lat: 37.5378, lng: -77.4619, category: 'historical', description: 'A stunning Victorian cemetery overlooking the James River, final resting place of two U.S. presidents.', address: '412 S Cherry St, Richmond, VA 23220', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&q=80' },
  { id: 33, name: 'Edgar Allan Poe Museum', lat: 37.5333, lng: -77.4242, category: 'historical', description: "Dedicated to honoring Richmond's most famous literary resident with artifacts and rare manuscripts.", address: '1914 E Main St, Richmond, VA 23223', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80' },

  // Restaurants
  { id: 40, name: 'The Roosevelt', lat: 37.5297, lng: -77.4156, category: 'restaurant', description: 'Award-winning Southern comfort food in the heart of Church Hill with a warm, inviting atmosphere.', address: '623 N 25th St, Richmond, VA 23223', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80' },
  { id: 41, name: "L'Opossum", lat: 37.5528, lng: -77.4708, category: 'restaurant', description: 'Wildly eclectic and theatrical fine dining experience with a James Beard Award-nominated chef.', address: '626 China St, Richmond, VA 23220', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80' },
  { id: 42, name: 'ZZQ', lat: 37.5667, lng: -77.4750, category: 'restaurant', description: "Texas-style BBQ done right in Scott's Addition — slow-smoked brisket and craft beer on tap.", address: '3201 W Moore St, Richmond, VA 23230', image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&q=80' },

  // Education
  { id: 50, name: 'Virginia Commonwealth University', lat: 37.5474, lng: -77.4519, category: 'education', description: 'A major urban research university renowned for its arts, medicine, and engineering programs.', address: '910 W Franklin St, Richmond, VA 23284', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80' },
  { id: 51, name: 'University of Richmond', lat: 37.5783, lng: -77.5394, category: 'education', description: 'A prestigious private liberal arts university set on a beautiful lakeside campus.', address: '28 Westhampton Way, Richmond, VA 23173', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80' },

  // Shopping
  { id: 60, name: 'Carytown Shopping', lat: 37.5550, lng: -77.4855, category: 'shopping', description: "Richmond's premier shopping strip with independent boutiques, vintage stores, and specialty shops.", address: 'Cary St, Richmond, VA 23221', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80' },
  { id: 61, name: 'Libbie & Grove', lat: 37.5908, lng: -77.5214, category: 'shopping', description: 'An upscale, walkable shopping corridor lined with elegant boutiques and gourmet restaurants.', address: 'Libbie Ave, Richmond, VA 23226', image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80' },
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
  neighborhood: { marker: '#4F46E5', bg: '#EEF2FF', text: '#4338CA', label: 'Neighborhood' },
  park: { marker: '#16A34A', bg: '#DCFCE7', text: '#15803D', label: 'Park' },
  historical: { marker: '#D97706', bg: '#FEF3C7', text: '#B45309', label: 'Historical Site' },
  restaurant: { marker: '#DC2626', bg: '#FEE2E2', text: '#B91C1C', label: 'Restaurant' },
  shopping: { marker: '#EC4899', bg: '#FCE7F3', text: '#BE185D', label: 'Shopping' },
  education: { marker: '#A855F7', bg: '#F3E8FF', text: '#7E22CE', label: 'Education' },
};

function createPinIcon(color) {
  return L.divIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="42" viewBox="0 0 30 42">
      <path d="M15 0C6.716 0 0 6.716 0 15c0 10.5 15 27 15 27S30 25.5 30 15C30 6.716 23.284 0 15 0z" fill="${color}" />
      <circle cx="15" cy="15" r="7" fill="white" opacity="0.9"/>
    </svg>`,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -44],
    className: '',
  });
}

function ZoomControls() {
  const map = useMap();
  return (
    <div className="absolute top-4 left-4 z-[1000] flex flex-col gap-2">
      <Button onClick={() => map.zoomIn()} size="icon" className="bg-white hover:bg-gray-100 text-gray-700 shadow-lg border-2 border-gray-200">
        <Plus className="w-5 h-5" />
      </Button>
      <Button onClick={() => map.zoomOut()} size="icon" className="bg-white hover:bg-gray-100 text-gray-700 shadow-lg border-2 border-gray-200">
        <Minus className="w-5 h-5" />
      </Button>
    </div>
  );
}

function MapMarker({ point }) {
  const colors = categoryColors[point.category] || { marker: '#6B7280', bg: '#F3F4F6', text: '#374151', label: 'Location' };
  const icon = createPinIcon(colors.marker);

  return (
    <Marker position={[point.lat, point.lng]} icon={icon}>
      <Popup maxWidth={300} minWidth={280}>
        <div style={{ fontFamily: 'Inter, sans-serif', padding: '4px' }}>
          {/* Photo */}
          <div style={{ marginBottom: '10px', borderRadius: '8px', overflow: 'hidden', height: '150px' }}>
            <img
              src={point.image}
              alt={point.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          {/* Category badge */}
          <span style={{ display: 'inline-block', background: colors.bg, color: colors.text, fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '999px', marginBottom: '6px' }}>
            {colors.label}
          </span>
          {/* Name */}
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e3a5f', margin: '4px 0 6px' }}>
            {point.name}
          </h3>
          {/* Description */}
          <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: '1.5', marginBottom: '8px' }}>
            {point.description}
          </p>
          {/* Address */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '5px' }}>
            <span style={{ fontSize: '13px', color: '#6B7280' }}>📍</span>
            <span style={{ fontSize: '12px', color: '#6B7280', lineHeight: '1.4' }}>{point.address}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default function InteractiveMap() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
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
          <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600">
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
              className={`transition-all duration-200 ${isActive ? `${category.color} text-white shadow-lg scale-105` : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300'}`}
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
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[1000] cursor-pointer" onClick={() => setIsFullscreen(true)}>
              <div className="bg-white/95 backdrop-blur px-6 py-3 rounded-lg shadow-xl border-2 border-slate-200">
                <p className="text-gray-700 font-semibold flex items-center gap-2">
                  <Maximize2 className="w-5 h-5 text-[#a63d2f]" />
                  Click to expand
                </p>
              </div>
            </div>
          )}
          {isFullscreen && (
            <div className="absolute top-4 right-4 z-[1000] bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-xl border-2 border-slate-200 pointer-events-none">
              <p className="text-gray-700 text-sm font-semibold">Double-click to exit</p>
            </div>
          )}
          <MapContainer
            center={[37.5407, -77.4360]}
            zoom={12}
            style={{ height: '100%', width: '100%' }}
            dragging={true}
            scrollWheelZoom={isFullscreen}
            zoomControl={false}
          >
            <ZoomControls />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredPoints.map((point) => (
              <MapMarker key={point.id} point={point} />
            ))}
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