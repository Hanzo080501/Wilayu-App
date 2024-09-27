// resources/js/Components/Location.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Atur ikon marker
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Location = () => {
  const Location = {
    lat: -8.011216, // Latitude desa
    lng: 110.622597, // Longitude desa
  };

  const [baseLayer, setBaseLayer] = useState('streets');

  return (
    <div className="container p-4 mx-auto transition duration-500 bg-gray-100 rounded-lg shadow-lg md:w-3/4 dark:text-gray-300 dark:bg-gray-800">
      <h1 className="mb-4 text-2xl font-bold text-center">Lokasi Padukuhan</h1>
      <div className="flex justify-center">
        <MapContainer
          center={[Location.lat, Location.lng]}
          zoom={20}
          style={{ height: '400px', width: '100%' }}
          className="z-0 transition-all duration-500 rounded-lg shadow-lg">
          {baseLayer === 'streets' && (
            <TileLayer
              attribution="Google Maps"
              url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
            />
          )}
          {baseLayer === 'satellite' && (
            <TileLayer
              attribution="Google Maps Satellite"
              url="https://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}"
            />
          )}
          <Marker position={[Location.lat, Location.lng]}>
            <Popup>Lokasi Padukuhan</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => setBaseLayer('streets')}
          className="px-4 py-2 mx-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700">
          Peta Jalan
        </button>
        <button
          onClick={() => setBaseLayer('satellite')}
          className="px-4 py-2 mx-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700">
          Satelit
        </button>
      </div>
    </div>
  );
};

export default Location;
