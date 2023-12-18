/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from "mongodb";
import { Get } from "./fetch";

const PATH = "subastas";

export enum AuctionState {
    RUNNING = "RUNNING",
    FINISHED = "FINISHED",
}
export interface AuctionJSON {
    _id: string,
    Titulo: string,
    Descripcion: string,
    Estado: AuctionState,
    ["Fecha limite"]: string,
    Foto: string,
    ["Precio partida"]: number,
    Subastador: string
}
export interface NewAuctionJSON {
    Titulo: string,
    Descripcion: string,
    ["Fecha limite"]: Date,
    Foto: string,
    ["Precio partida"]: number,
    Subastador: string
}
export interface AuctionFilter {
    Title: string | null,
    MinPrice: number | null,
    MaxPrice: number | null
}

export class Auction {
    ID: ObjectId;
    Title: string;
    Description: string;
    State: AuctionState;
    Deadline: Date;
    Picture: string;
    InitialPrice: number;
    Seller: ObjectId;

    constructor(
        id: string,
        title: string,
        description: string,
        state: AuctionState,
        deadline: Date,
        picture: string,
        initialPrice: number,
        seller: string
    ) {
        this.ID = ObjectId.createFromHexString(id);
        this.Title = title;
        this.Description = description;
        this.State = state;
        this.Deadline = new Date(deadline);
        this.Picture = picture;
        this.InitialPrice = initialPrice;
        this.Seller = ObjectId.createFromHexString(seller);
    }

    static FromJSON(json: any) {
        return new Auction(
            json["_id"],
            json["Titulo"],
            json["Descripcion"],
            json["Estado"],
            json["Fecha limite"],
            json["Foto"],
            json["Precio partida"],
            json["Subastador"]
        );
    }
    ToJSON(): AuctionJSON {
        return {
            _id: this.ID.toHexString(),
            Titulo: this.Title,
            Descripcion: this.Description,
            Estado: this.State,
            ["Fecha limite"]: this.Deadline.toISOString(),
            Foto: this.Picture,
            ["Precio partida"]: this.InitialPrice,
            Subastador: this.Seller.toHexString()

        };
    }
}

export async function GetAuctionsByTitle(title:string) {
    const response = await Get(`${PATH}?titulo=${title}`);
    
    try {
        const json = (await response.json()) as any[];
        return json.map((x: any) => Auction.FromJSON(x));
    } catch(_) {
        return null;
    }
}

export async function GetAuction(id: string) {
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


export async function GetAllAuctions(params?: AuctionFilter | null) {
    const queryParams: string[] = [];

    if(params) {
        if(params.Title) {
            queryParams.push(`titulo=${params.Title}`);
        }

        if(params.MinPrice) {
            queryParams.push(`minPrice=${params.MinPrice}`);
        }

        if(params.MaxPrice) {
            queryParams.push(`maxPrice=${params.MaxPrice}`);
        }
    }
    const response = await Get(PATH + (queryParams.length > 0? "?" + queryParams.join("&") : ""));
    
    try {
        const json = (await response.json()) as any[];
        return json.map((x: any) => Auction.FromJSON(x));
    } catch(_) {
        return null;
    }
}

export async function GetAllAuctionsWithSpecificState(state: string, params?: AuctionFilter | null) {
    const queryParams: string[] = [`estado=${state}`];

    if(params) {
        if(params.Title) {
            queryParams.push(`titulo=${params.Title}`);
        }

        if(params.MinPrice) {
            queryParams.push(`minPrice=${params.MinPrice}`);
        }

        if(params.MaxPrice) {
            queryParams.push(`maxPrice=${params.MaxPrice}`);
        }
    }

    const response = await Get(PATH + (queryParams.length > 0? "?" + queryParams.join("&") : ""));

    try {
        const json = (await response.json()) as any[];
        return json.map((x: any) => Auction.FromJSON(x));
    } catch(_) {
        return null;
    }
}
  

export async function GetAllAuctionsOfUser(userID: string) {
    const response = await Get(`${PATH}/usuario/${userID}`);
    try {
        const json = (await response.json()) as any[];
        return json.map((x: any) => Auction.FromJSON(x));
    } catch(_) {
        return null;
    }
}


export async function GetAllAuctionsOfBuyer(userID: string) {
    const response = await Get(`${PATH}/comprador/${userID}`);
    try {
        const json = (await response.json()) as any[];
        return json.map((x: any) => Auction.FromJSON(x));
    } catch(_) {
        return null;
    }
}