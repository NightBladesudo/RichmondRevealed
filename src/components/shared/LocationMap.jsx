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

const SHADOW_URL = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

function makeNumberedIcon(number, isActive) {
  const bg = isActive ? '#a63d2f' : '#1e3a5f';
  return L.divIcon({
    className: '',
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -44],
    html: `<div style="
        width:30px; height:42px; position:relative; display:flex;
        flex-direction:column; align-items:center;
      ">
      <div style="
        width:30px; height:30px; background:${bg}; border-radius:50% 50% 50% 0;
        transform:rotate(-45deg); border:2px solid white;
        box-shadow:0 2px 8px rgba(0,0,0,0.4);
        display:flex; align-items:center; justify-content:center;
      ">
        <span style="
          transform:rotate(45deg); color:white; font-weight:800;
          font-size:11px; font-family:sans-serif; line-height:1;
        ">${number}</span>
      </div>
      <div style="
        width:2px; height:10px; background:${bg}; margin-top:-1px;
      "></div>
    </div>`,
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
            icon={makeNumberedIcon(index + 1, activeId === item.id)}
            eventHandlers={{ click: () => onMarkerClick && onMarkerClick(item.id) }}
          >
            <Popup>
              <div style={{ minWidth: '160px' }}>
                {(item.image_url || item.image) && (
                  <img src={item.image_url || item.image} alt={item.name} style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px', marginBottom: '6px' }} />
                )}
                <p style={{ fontWeight: 700, color: '#1e3a5f', fontSize: '13px', margin: '0 0 2px' }}>{item.name}</p>
                {item.category && <p style={{ fontSize: '11px', color: '#888', margin: '0 0 2px' }}>{item.category}</p>}
                {item.address && <p style={{ fontSize: '11px', color: '#aaa', margin: 0 }}>📍 {item.address}</p>}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}