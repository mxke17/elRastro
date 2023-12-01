import { Chat } from "@/database/chats";

interface chatsMiniProps{
    chat: Chat;
}

export function ChatMini(props: chatsMiniProps){
    const chats = props.chat;
    return <>
        <h2>{chats.seller.toString()}</h2>
        <p>{}</p>
    </>;
}