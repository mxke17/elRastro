/* eslint-disable @typescript-eslint/no-explicit-any */
import { Get } from "./fetch";

const PATH = "mapa/direccion";

export async function GetMap(addressID: string) {    
    const response = await Get(`${PATH}/${addressID}`);

    try {
        const json = await response.json();
        return json;
    } catch(_) {
        return null;
    }
}


