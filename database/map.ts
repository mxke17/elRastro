/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from "mongodb";
import { Get } from "./fetch";

const PATH = "mapa/direccion";

export interface MapJSON {
    place_id: number,
    licence: string,
    osm_type: string,
    osm_id: number,
    lat: string,
    lon: string,
    
    type: string,
    place_rank: number,
    importance: number,
    addresstype: string,
    name: string,
    display_name: string,
    boundingbox: string[],
}

export class Map {

    
    Place_id: number;
    Licence: string;
    Osm_type: string;
    Osm_id: number;
    Lat: string;
    Lon: string;
    
    Type: string;
    Place_rank: number;
    Importance: number;
    Addresstype: string;
    Name: string;
    Display_name: string;
    Boundingbox: string[];

   

    constructor(
        
        place_id: number,
        licence: string,
        osm_type: string,
        osm_id: number,
        lat: string,
        lon: string,
        
        type: string,
        place_rank: number,
        importance: number,
        addresstype: string,
        name: string,
        display_name: string,
        boundingbox: string[],
    ) {
        
        this.Place_id = place_id;
        this.Licence = licence;
        this.Osm_type = osm_type;
        this.Osm_id = osm_id;
        this.Lat = lat;
        this.Lon = lon;
        
        this.Type = type;
        this.Place_rank = place_rank;
        this.Importance = importance;
        this.Addresstype = addresstype;
        this.Name = name;
        this.Display_name = display_name;
        this.Boundingbox = boundingbox;
    }

    static FromJSON(json: any) {
        return new Map(
            
            json["place_id"],
            json["licence"],
            json["osm_type"],
            json["osm_id"],
            json["lat"],
            json["lon"],
            json["type"],
            json["place_rank"],
            json["importance"],
            json["addresstype"],
            json["name"],
            json["display_name"],
            json["boundingbox"],
        );
            
    
    }
    ToJSON():MapJSON{
        return {
            
            place_id: this.Place_id,
            licence: this.Licence,
            osm_type: this.Osm_type,
            osm_id: this.Osm_id,
            lat: this.Lat,
            lon: this.Lon,
            
            type: this.Type,
            place_rank: this.Place_rank,
            importance: this.Importance,
            addresstype: this.Addresstype,
            name: this.Name,
            display_name: this.Display_name,
            boundingbox: this.Boundingbox,
           
        };
    }
}

export async function GetMap(addressID: string): Promise<Map | null> {    
    const response = await Get(`${PATH}/${addressID}`);

    try {
        const json = await response.json();
        console.log(json);
        console.log("ento getmap");
        return Map.FromJSON(json);
        
    } catch(_) {
        return null;
    }
    
}


