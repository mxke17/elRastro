/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from "mongodb";
import { Get } from "./fetch";

const PATH = "pujas";

export interface BidJSON {
    _id: string,
    Fecha: string,
    Cantidad: number,
    Postor: string,
    Subasta: string,
}

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
    ToJSON():BidJSON{
        return {
            _id: this.ID.toHexString(),
            Fecha: this.Date.toISOString(),
            Cantidad: this.Quantity,
            Postor: this.Bidder.toHexString(),
            Subasta: this.Auction.toHexString(),
        };
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

export async function GetAllBidsOfUser(userID: string) {
    const response = await Get(`${PATH}/postor/${userID}`);
    //console.log("pujas de usuario ");
    //console.log(`${PATH}/postor/${userID}`);
    try {
        const json = (await response.json()) as any[];
        //console.log("Pujas de usuario");
        //console.log(json);
        return json.map((x: any) => Bid.FromJSON(x));
    } catch(_) {
        console.log("error pujas de usuario");
        console.log(_);
        return null;
    }
}