/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from "mongodb";
import { Get } from "./fetch";

const PATH = "usuario";

export interface UserJSON {
    _id: string,
    Email: string,
    Foto: string,
    ["Nombre usuario"]: string,
    Direccion: string

}

export class User {
    ID: ObjectId;
    Email: string;
    Picture: string;
    UserName: string;
    Address: ObjectId;

    constructor(
        id: string,
        email: string,
        picture: string,
        userName: string,
        address: string
    ) {
        this.ID = ObjectId.createFromHexString(id);
        this.Email = email;
        this.Picture = picture;
        this.UserName = userName;
        this.Address = ObjectId.createFromHexString(address);
    }

    static FromJSON(json: UserJSON) {
        console.log(json);
        return new User(
            json["_id"],
            json["Email"],
            json["Foto"],
            json["Nombre usuario"],
            json["Direccion"]
        );
    }

    ToJSON(): UserJSON {
        return {
            _id: this.ID.toHexString(),
            Email: this.Email,
            Foto: this.Picture,
            ["Nombre usuario"]: this.UserName,
            Direccion: this.Address.toHexString()
        };
    }
}


export async function GetUser(id: string) {
    const response = await Get(`${PATH}/${id}`);

    if(response.status === 404) {
        return null;
    }

    try {
        const json = await response.json();
        return User.FromJSON(json);
    } catch(_) {
        return null;
    }
}


export async function GetAllUsers() {
    const response = await Get(PATH);

    try {
        const json = (await response.json()) as any[];
        
        return json.map((x: any) => User.FromJSON(x));
    } catch(_) {
        return null;
    }
}