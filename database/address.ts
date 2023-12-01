/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from "mongodb";
import { Get } from "./fetch";

const PATH = "direccion";

export class Address {
    ID: ObjectId;
    Calle: string;
    CodigoPostal: string;
    Localidad: string;
    Provincia: string;
    Numero: number;
    Pais: string;

    constructor(
        id: string,
        calle: string,
        codigoPostal: string,
        localidad: string,
        provincia: string,
        numero: number,
        pais: string
    ) {
        this.ID = ObjectId.createFromHexString(id);
        this.Calle = calle;
        this.CodigoPostal = codigoPostal;
        this.Localidad = localidad;
        this.Provincia = provincia;
        this.Numero = numero;
        this.Pais = pais;
    }

    static FromJSON(json: any) {
        return new Address(
            json["_id"],
            json["Calle"],
            json["Codigo postal"],
            json["Localidad"],
            json["Provincia"],
            json["Numero"],
            json["Pais"]
        );
    }
}


export async function GetAddress(id: string) {
    const response = await Get(`${PATH}/${id}`);

    if(response.status === 404) {
        return null;
    }

    try {
        const json = await response.json();
        return Address.FromJSON(json);
    } catch(_) {
        return null;
    }
}


export async function GetAllAddress() {
    const response = await Get(PATH);

    try {
        const json = (await response.json()) as any[];
        
        return json.map((x: any) => Address.FromJSON(x));
    } catch(_) {
        return null;
    }
}

export async function GetAddressOfUser(userID: string) {
    const response = await Get(`${PATH}/usuario/${userID}`);

    try {
        const json = (await response.json()) as any[];
        
        return json.map((x: any) => Address.FromJSON(x));
    } catch(_) {
        return null;
    }
}