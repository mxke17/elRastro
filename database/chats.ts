/* eslint-disable @typescript-eslint/no-explicit-any */
import { Get } from "./fetch";

    const PATH = "chats";

export class Chat {
    id: string;
    user: string;
    seller: string;

    constructor(user: string, seller: string, id: string) {
        this.user = user;
        this.seller = seller;
        this.id = id;
    }

    static FromJSON(json: any) {
        return new Chat(
            json["User"],
            json["Seller"],
            json["_id"]

        );
    }
    
}
export async function GetAuction(id: string) {
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