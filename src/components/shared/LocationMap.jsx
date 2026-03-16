import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function createPinIcon(label, isActive) {
  const bg = isActive ? '#a63d2f' : '#1e3a5f';
  const html = `
    <div style="
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    ">
      <div style="
        background: ${bg};
        color: white;
        font-size: 11px;
        font-weight: 700;
        font-family: Inter, sans-serif;
        width: 28px;
        height: 28px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 6px rgba(0,0,0,0.35);
        border: 2px solid white;
      ">
        <span style="transform: rotate(45deg);">${label}</span>
      </div>
    </div>
  `;
  return L.divIcon({
    html,
    className: '',
    iconSize: [28, 36],
    iconAnchor: [14, 36],
    popupAnchor: [0, -38],
  });
}

function FlyToMarker({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) map.flyTo(position, 15, { duration: 1 });
  }, [position, map]);
  return null;
}

async function geocodeAddress(address) {
  const query = /richmond|VA\s*\d{5}/i.test(address)
    ? encodeURIComponent(address)
    : encodeURIComponent(`${address}, Richmond, Virginia`);
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
        zoom={12}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        {flyTo && <FlyToMarker position={flyTo} />}
        {validItems.map((item, index) => (
          <Marker
            key={item.id}
            position={coords[item.id]}
            icon={createPinIcon(index + 1, activeId === item.id)}
            eventHandlers={{ click: () => onMarkerClick && onMarkerClick(item.id) }}
          >
            <Popup>
              <div className="min-w-[160px]">
                {(item.image_url || item.image) && (
                  <img src={item.image_url || item.image} alt={item.name} className="w-full h-24 object-cover rounded mb-2" />
                )}
                <p className="font-semibold text-[#1e3a5f] text-sm">{item.name}</p>
                {item.category && <p className="text-xs text-gray-500 mt-0.5">{item.category}</p>}
                {item.address && <p className="text-xs text-gray-400 mt-1">📍 {item.address}</p>}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}