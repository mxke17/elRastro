import { ObjectId } from "mongodb";

export abstract class DatabaseItem {
    id: ObjectId;

    constructor() {
        this.id = new ObjectId();
    }
}