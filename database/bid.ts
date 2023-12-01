/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from "mongodb";
import { Get } from "./fetch";

export class Bid {
    ID: ObjectId;
    Date: Date;
    Quantity: number;
    Bidder: ObjectId;
    Auction: ObjectId;

    constructor(
        id: string,
        date: Date,
        quantity: number,
        bidder: string,
        auction: string
    ) {
        this.ID = ObjectId.createFromHexString(id);
        this.Date = new Date(date);
        this.Quantity = quantity;
        this.Bidder = ObjectId.createFromHexString(bidder);
        this.Auction = ObjectId.createFromHexString(auction);
    }

    static FromJSON(json: any) {
        return new Bid(
            json["_id"],
            json["Fecha de puja"],
            json["Cantidad"],
            json["Postor"],
            json["Subasta"],
        );
    }
}

export async function GetHighestBidForAuction(auctionID: string) {
    const response = await Get(`subastas/${auctionID}/pujaMasAlta`);

    try {
        const json = await response.json();

        if (!json["_id"]) { return null; }

        return Bid.FromJSON(json);
    } catch (_) {
        return null;
    }
}