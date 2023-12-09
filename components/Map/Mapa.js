"use client";
// components/Mapa.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = () => {
  useEffect(() => {
    // Crea el mapa
    const map = L.map('map').setView([0, 0], 2);

    // Añade una capa de mapa (puedes cambiar la URL del mapa según tus necesidades)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Añade un marcador en una ubicación específica (puedes cambiar las coordenadas)
    L.marker([51.505, -0.09]).addTo(map)
      .bindPopup('¡Hola, aquí estoy!').openPopup();
  }, []);

  return (
    <div id="map" style={{ height: '400px' }}></div>
  );
};

export default Mapa;
