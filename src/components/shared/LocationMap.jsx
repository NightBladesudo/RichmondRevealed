import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function createPinIcon(isActive, number) {
  const color = isActive ? '#a63d2f' : '#1e3a5f';
  return L.divIcon({
    className: '',
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -44],
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="42" viewBox="0 0 30 42">
      <path d="M15 0C6.716 0 0 6.716 0 15c0 10.5 15 27 15 27S30 25.5 30 15C30 6.716 23.284 0 15 0z" fill="${color}" />
      <circle cx="15" cy="15" r="8" fill="white" opacity="0.9"/>
      <text x="15" y="19" text-anchor="middle" font-size="9" font-weight="800" fill="${color}" font-family="sans-serif">${number}</text>
    </svg>`,
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

const coordsCache = {};

export default function LocationMap({ items, activeId, onMarkerClick }) {
  const [coords, setCoords] = useState({});
  const [flyTo, setFlyTo] = useState(null);

  useEffect(() => {
    items.forEach(async (item) => {
      if (item.address && !coordsCache[item.id]) {
        const pos = await geocodeAddress(item.address);
        if (pos) {
          coordsCache[item.id] = pos;
          setCoords(prev => ({ ...prev, [item.id]: pos }));
        }
      } else if (coordsCache[item.id] && !coords[item.id]) {
        setCoords(prev => ({ ...prev, [item.id]: coordsCache[item.id] }));
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
            icon={createPinIcon(activeId === item.id, index + 1)}
            eventHandlers={{ click: () => onMarkerClick && onMarkerClick(item.id) }}
          >
            <Popup maxWidth={300} minWidth={280}>
              <div style={{ fontFamily: 'Inter, sans-serif', padding: '4px' }}>
                {(item.image_url || item.image) && (
                  <div style={{ marginBottom: '10px', borderRadius: '8px', overflow: 'hidden', height: '150px' }}>
                    <img
                      src={item.image_url || item.image}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                )}
                {item.category && (
                  <span style={{ display: 'inline-block', background: '#EEF2FF', color: '#4338CA', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '999px', marginBottom: '6px' }}>
                    {item.category}
                  </span>
                )}
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e3a5f', margin: '4px 0 6px' }}>
                  {item.name}
                </h3>
                {item.description && (
                  <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: '1.5', marginBottom: '8px' }}>
                    {item.description}
                  </p>
                )}
                {item.address && (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '5px' }}>
                    <span style={{ fontSize: '13px' }}>📍</span>
                    <span style={{ fontSize: '12px', color: '#6B7280', lineHeight: '1.4' }}>{item.address}</span>
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}