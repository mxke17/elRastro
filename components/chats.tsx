import { Chat } from "@/database/chats";

interface chatsMiniProps{
    chats: Chat;
}

export function ChatMini(props: chatsMiniProps){
    const chats = props.chats;
    return <>
        <h2>{chats.Seller.toString()}</h2>
        <p>{chats.Messages[0].toString()}</p>
    </>;
}