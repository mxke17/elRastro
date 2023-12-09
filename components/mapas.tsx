"use client";
import React, { useEffect } from 'react';
import * as L from 'leaflet';
import { Address } from '@/database/address';

interface mapaProps {
    direcciones: Address;
}

export function MapaDetallado(props: mapaProps) {
    const direccion = props.direcciones;


    return (<>
            <head>
                <script src="https://unpkg.com/leaflet@1.0.2/dist/leaflet.js"></script>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.2/dist/leaflet.css" />

                <style>
                    #map {
                    width: 50px;
                    height: 600px; }
                </style>

            </head>
            <body>
                <div id="map"></div>
                <script>

                    var map = L.map('map').
                    setView([41.66, -4.72],
                    14);

                    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
                    maxZoom: 18
}).addTo(map);

                    L.control.scale().addTo(map);
                    L.marker([41.66, -4.71], {draggable: true}).addTo(map);

                </script>
            </body>
    </>);
}