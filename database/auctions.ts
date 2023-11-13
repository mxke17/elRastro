import { ObjectId } from "mongodb";
import { DatabaseItem } from "./databaseItem";

export enum AuctionState {
    RUNNING = "RUNNING",
    FINISHED = "FINISHED",
}

export class Auction extends DatabaseItem {
    Title: string;
    Description: string;
    State: AuctionState;
    Deadline: Date;
    Picture: string;
    InitialPrice: number;
    Seller: ObjectId;

    constructor() {
        super();

        this.Title = "Producto";
        this.Description = "Este es un producto. Compralo.";
        this.State = AuctionState.RUNNING;
        this.Deadline = new Date(Date.now());
        this.Picture = "https://imgur.com/a/cKF4wDX";
        this.InitialPrice = 100;
        this.Seller = new ObjectId;
    }
}