/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from "mongodb";
import { Get } from "./fetch";

const PATH = "usuario";

export class Auction {
    ID: ObjectId;
    Email: string;
    Picture: string;
    UserName: string;

    constructor(
        id: string,
        email: string,
        picture: string,
        userName: string
    ) {
        this.ID = ObjectId.createFromHexString(id);
        this.Email = email;
        this.Picture = picture;
        this.UserName = userName;
    }

    static FromJSON(json: any) {
        return new Auction(
            json["_id"],
            json["Email"],
            json["Foto"],
            json["Nombre Usuario"]
        );
    }
}


export async function GetUser(id: string) {
    const response = await Get(`${PATH}/${id}`);

    if(response.status === 404) {
        return null;
    }

    try {
        const json = await response.json();
        return Auction.FromJSON(json);
    } catch(_) {
        return null;
    }
}


export async function GetAllUsers() {
    const response = await Get(PATH);

    try {
        const json = (await response.json()) as any[];
        
        return json.map((x: any) => Auction.FromJSON(x));
    } catch(_) {
        return null;
    }
}