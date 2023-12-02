/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from "mongodb";
import { Get } from "./fetch";

    const PATH = "chats";

export class Chat {
    id: ObjectId;
    user: ObjectId;
    seller: ObjectId;

    constructor(user: string, seller: string, id: string) {
        this.user = ObjectId.createFromHexString(user);
        this.seller = ObjectId.createFromHexString(seller);
        this.id = ObjectId.createFromHexString(id);
    }

    static FromJSON(json: any) {
        return new Chat(
            json["User"],
            json["Seller"],
            json["_id"]

        );
    }
    
}
export async function GetChat(id: string) {
    const response = await Get(`${PATH}/${id}`);

    if(response.status === 404) {
        return null;
    }

    try {
        const json = await response.json();
        return Chat.FromJSON(json);
    } catch(_) {
        return null;
    }
}


export async function GetAllChats() {
    const response = await Get(PATH);

    try {
        const json = (await response.json()) as any[];

        return json.map((x: any) => Chat.FromJSON(x));
    } catch(_) {
        return null;
    }
}
  

export async function GetAllChatsOfUser(userID: string) {
    const response = await Get(`${PATH}?user=${userID}`);

    try {
        const json = (await response.json()) as any[];
        
        return json.map((x: any) => Chat.FromJSON(x));
    } catch(_) {
        return null;
    }
}
