import { FooterHome } from "@/components/footer";
import { MessageList } from "@/components/messageList";
import { NavbarHome } from "@/components/navbar";
import { GetAllMessagesFromChat } from "@/database/messages";
import { RouteContext } from "@/lib/route";

interface RouteParams {
    id: string
}

export default async function chats(context: RouteContext<RouteParams>){
    const chatID = context.params.id;
    const messages = await GetAllMessagesFromChat(chatID);
    if(messages === null){
        return <>ERROR</>;
    }
        
    return <>
        <NavbarHome></NavbarHome>
        <MessageList messageList={messages}></MessageList>
        <FooterHome></FooterHome>
    </>;
}