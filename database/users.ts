/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from "mongodb";
import { Get, Post } from "./fetch";

const PATH = "usuario";

export interface NewUserJSON {
    _id: string,
    Email: string,
    Foto: string,
    ["Nombre usuario"]: string,
    
}

export interface UserJSON {
    _id: string,
    Email: string,
    Foto: string,
    ["Nombre usuario"]: string,
    Direccion: string | undefined
}

export interface NewUser {
    Email: string,
    Foto: string,
    ["Nombre usuario"]: string
    Direccion: string | undefined


}

export class User {
    ID: ObjectId;
    Email: string;
    Picture: string;
    UserName: string;
    Address: ObjectId | undefined;

    constructor(
        id: string,
        email: string,
        picture: string,
        userName: string,
        address: string | undefined
    ) {
        this.ID = ObjectId.createFromHexString(id);
        this.Email = email;
        this.Picture = picture;
        this.UserName = userName;
        if(address) {
            this.Address = ObjectId.createFromHexString(address);
        }
    }

    static FromJSON(json: UserJSON) {
      
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
            Direccion: this.Address?.toHexString()
        };
    }
}

//No se si funciona correctamente
export async function CreateUser(user: NewUser) {
    const response = await Post(PATH, user);

    if(response.status === 400) {
        return null;
    }

    try {
        const json = await response.json();
        return User.FromJSON(json);
    } catch(_) {
        return null;
    }
}

export async function GetUserByEmail(email: string) {
    const response = await Get(`${PATH}?emailUsuario=${email}`);

    if(response.status === 404) {
        return null;
    }

    try {
        const json = await response.json();
        return User.FromJSON(json[0]);
    } catch(_) {
        return null;
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

export async function GetBuyersOfUser(id: string){
    const response = await Get(`${PATH}/${id}/compradoresDeUsuario`);

    try {
        const json = (await response.json()) as any[];
        
        return json.map((x: any) => User.FromJSON(x));
    } catch(_) {
        return null;
    }
}

