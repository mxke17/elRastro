import { Chat } from "@/database/chats";
import { ChatMini } from "./chats";
import { Card, Container } from "react-bootstrap";

interface ChatListProps{
    chatList: Chat[];
}


export function ChatList(props: ChatListProps){

    return <>
           <Container className ="align-bottom" style={{minHeight: "700px",maxHeight:"700", maxWidth:"800px", display:"grid", marginTop:"100px"}}>
        <Card style={{height:"500px"}}>
                {props.chatList.map(chats => {
                return <div key={chats.id.toHexString()}><ChatMini chat = {chats} ></ChatMini></div>;
                })}


</Card>
           
    </Container>
    
    </>;

}