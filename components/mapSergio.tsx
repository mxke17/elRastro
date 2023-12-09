// Las cosas de bootstrap, hay que renderizarlas en el server, por eso se importan aquí
//
"use client";

import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Address, AddressJSON } from "@/database/address";
import { MapJSON, Map } from "@/database/map";
import { GetMap } from "@/database/map";
//import L from "leaflet";

//interface mapProps {
//user: UserJSON;
//address: AddressJSON;  
//}
//props: mapProps

interface direccionProps {
  longitud: number;
  latitud: number;
}

export function MapSergio(props: direccionProps){
    console.log("test1");
   
    console.log(props.longitud);
    console.log("latitud");
    console.log(props.latitud);


    /***const mapa = Map.FromJSON(props.mapa);
    console.log(mapa);
    


    const latitud = Number(mapa.Lat);
    const lon = Number(mapa.Lon);
    console.log(latitud);
    console.log(lon);**/

    return <MapContainer center={[100.505, -0.09]} zoom={15} scrollWheelZoom={true} style={{width:"100%", height:"100%"}}>
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
/*return(
    <h1>{props.latitud}</h1>
  );*/