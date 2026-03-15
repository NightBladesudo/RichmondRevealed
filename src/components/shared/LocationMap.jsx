import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const activeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function FlyToMarker({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) map.flyTo(position, 15, { duration: 1 });
  }, [position, map]);
  return null;
}

async function geocodeAddress(address) {
  const query = encodeURIComponent(`${address}, Richmond, Virginia`);
  const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=1`);
  const data = await res.json();
  if (data && data[0]) return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
  return null;
}

export default function LocationMap({ items, activeId, onMarkerClick }) {
  const [coords, setCoords] = useState({});
  const [flyTo, setFlyTo] = useState(null);

  useEffect(() => {
    items.forEach(async (item) => {
      if (item.address && !coords[item.id]) {
        const pos = await geocodeAddress(item.address);
        if (pos) setCoords(prev => ({ ...prev, [item.id]: pos }));
      }
    });
  }, [items]);

  useEffect(() => {
    if (activeId && coords[activeId]) setFlyTo(coords[activeId]);
  }, [activeId, coords]);

  const validItems = items.filter(item => coords[item.id]);

  return (
    <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-md border border-gray-200" style={{ zIndex: 0, position: 'relative' }}>
      <MapContainer
        center={[37.5407, -77.4360]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        {flyTo && <FlyToMarker position={flyTo} />}
        {validItems.map(item => (
          <Marker
            key={item.id}
            position={coords[item.id]}
            icon={activeId === item.id ? activeIcon : new L.Icon.Default()}
            eventHandlers={{ click: () => onMarkerClick && onMarkerClick(item.id) }}
          >
            <Popup>
              <div className="min-w-[160px]">
                {item.image_url && (
                  <img src={item.image_url} alt={item.name} className="w-full h-24 object-cover rounded mb-2" />
                )}
                <p className="font-semibold text-[#1e3a5f] text-sm">{item.name}</p>
                {item.category && <p className="text-xs text-gray-500 mt-0.5">{item.category}</p>}
                {item.address && <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">📍 {item.address}</p>}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}