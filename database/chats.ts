import { ObjectId } from "mongodb";
import { DatabaseItem } from "./databaseItem";

export class Chat extends DatabaseItem {
    Messages: ObjectId[];
    User: ObjectId;
    Seller: ObjectId;

    constructor() {
        super();
        this.User = new ObjectId;
        this.Seller = new ObjectId;
        this.Messages = [new ObjectId];
    }
}