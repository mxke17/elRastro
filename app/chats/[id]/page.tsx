import { FooterHome } from "@/components/footer";
import { MessageList } from "@/components/messageList";
import { NavbarHome } from "@/components/navbar";
import { GetAllMessagesFromChat } from "@/database/messages";

export default async function chats(){
    const messages = await GetAllMessagesFromChat("6567a0a896e61eacc934b1da");
    if(messages === null){
        return <>ERROR</>;
    }
        
    return <>
        <NavbarHome></NavbarHome>
        <MessageList messageList={messages}></MessageList>
        <FooterHome></FooterHome>
    </>;
}