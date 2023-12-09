// Las cosas de bootstrap, hay que renderizarlas en el server, por eso se importan aquí
//
"use client";

import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
//import L from "leaflet";

//interface mapProps {
//user: UserJSON;
//address: AddressJSON;  
//}
//props: mapProps
export function MapSergio() {
    return <MapContainer center={[51.505, -0.09]} zoom={15} scrollWheelZoom={true} style={{width:"100%", height:"100%"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>;
}
