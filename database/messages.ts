/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from "mongodb";
import { Get } from "./fetch";

    const PATH = "messages";

export class Message {
    id: ObjectId;
    message: string;
    sender: ObjectId;
    chat: ObjectId;
    time: Date;

    constructor(id: string,chat: string, message: string, sender: string, time : string  ) {
        this.message = message;
        this.sender = ObjectId.createFromHexString(sender);
        this.id = ObjectId.createFromHexString(id);
        this.chat = ObjectId.createFromHexString(chat);
        this.time = new Date(time);
    }

    static FromJSON(json: any) {
        return new Message(
            json["_id"],
            json["Chat"],
            json["Message"],
            json["Sender"],
            json["Time"]

        );
    }
    
}
export async function GetMessage(id: string) {
    const response = await Get(`${PATH}/${id}`);

    if(response.status === 404) {
        return null;
    }

    try {
        const json = await response.json();
        return Message.FromJSON(json);
    } catch(_) {
        return null;
    }
}


export async function GetAllMessages() {
    const response = await Get(PATH);

    try {
        const json = (await response.json()) as any[];

        return json.map((x: any) => Message.FromJSON(x));
    } catch(_) {
        return null;
    }
}
  

export async function GetAllMessagesfromSender(senderId: string) {
    const response = await Get(`${PATH}?user=${senderId}`);

    try {
        const json = (await response.json()) as any[];
        
        return json.map((x: any) => Message.FromJSON(x));
    } catch(_) {
        return null;
    }
}
export async function GetAllMessagesFromChat(id: string){
    const response = await Get(`/chats/${id}/messages`);

    try{
        const json = (await response.json()) as any[];

        return json.map((x: any) => Message.FromJSON(x));
    }catch(_) {
        return null;
    }


}

/*
export async function PostMessage(formData){

    
    if(message != ""){
try{
    const response = await fetch("https://el-rastro-b02.vercel.app/api/messages",{method:"POST", body: JSON.stringify({
        Message: message,
        Sender: sender,
        Chat: chat
    })
    });
    console.log(response);
}catch(err){
    console.log(err);
}
}
}
*/