
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from "mongodb";
import { Get, Post } from "./fetch";

const PATH = "reviews";

export interface ReviewJSON {
    _id: string,
    Comprador: string,
    Vendedor: string,
    Puntuacion: number,
    Hecha: boolean,
}
export interface NewReviewJSON {
    comprador: string,
    vendedor: string,
    puntuacion: string
}

export class Review {
    ID: ObjectId;
    Buyer: ObjectId;
    Seller: ObjectId;
    Score: number;
    Done: boolean;

  
    constructor(
        id: string,
        buyer: string,
        seller: string,
        score: number,
        done: boolean,
    ) {
        this.ID = ObjectId.createFromHexString(id);
        this.Buyer = ObjectId.createFromHexString(buyer);
        this.Seller = ObjectId.createFromHexString(seller);
        this.Score = score;
        this.Done = done;
    }
    

    static FromJSON(json: any) {
        return new Review(
            json["_id"],
            json["Comprador"],
            json["Vendedor"],
            json["Puntuacion"],
            json["Hecha"],
        );
    }
    ToJSON():ReviewJSON{
        return {
            _id: this.ID.toHexString(),
            Comprador: this.Buyer.toHexString(),
            Vendedor: this.Seller.toHexString(),
            Puntuacion: this.Score,
            Hecha: this.Done,
        };
    }
}

export async function GetHighestReviewForAuction(auctionID: string) {
    const response = await Get(`subastas/${auctionID}/pujaMasAlta`);

    try {
        const json = await response.json();

        if (!json["_id"]) { return null; }

        return Review.FromJSON(json);
    } catch (_) {
        return null;
    }
}

export async function GetAllReviewsOfUser(userID: string) {
    const response = await Get(`${PATH}/vendedor/${userID}`);
    try {
        const json = (await response.json()) as any[];
        return json.map((x: any) => Review.FromJSON(x));
    } catch(_) {
        return null;
    }
}

export async function GetAverageScoreOfUser(userID: string) {
    const response = await Get(`${PATH}/vendedor/${userID}/media`);
    try {
        const json = await response.json();
        
        if (!json["averageScore"]) { return null; }

        return json["averageScore"];
    } catch (_) {
        return null;
    }
}