import { Chat } from "@/database/chats";
import { ChatMini } from "./chats";

interface ChatListProps{
    chatList: Chat[];
}


export function ChatList(props: ChatListProps){

    return <>
            <ul>
                {props.chatList.map(chats => {
                return <li key={chats.id.toHexString()}><ChatMini chats = {chats} ></ChatMini></li>;
                })}


            </ul>
    
    </>;

}