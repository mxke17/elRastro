

// Las cosas de bootstrap, hay que renderizarlas en el server, por eso se importan aquí
//
//"use client";

import React from "react";
import L from "leaflet";

//interface mapProps {
  //user: UserJSON;
  //address: AddressJSON;  
//}
//props: mapProps
export async function MapSergio() {
 // const user = User.FromJSON(props.user);
  //const address = Address.FromJSON(props.address);
 console.log("HOLA1");
  const map = L.map("map").setView([41.66, -4.72], 14);
   console.log("HOLA2");
  L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://cloudmade.com\">CloudMade</a>",
      maxZoom: 18
  }).addTo(map);
  console.log("HOLA3");
  L.control.scale().addTo(map);
  console.log("HOLA4");
  L.marker([41.66, -4.71], {draggable: true}).addTo(map);
  

//
    return (
        <div id="map">
            <p>HOLA</p>
        </div>
    );
}
