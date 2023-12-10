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
    console.log(messages);
    if(messages === null){
        return <>ERROR</>;
    }
        
    return <>
        <NavbarHome></NavbarHome>
        <MessageList messageList={messages} chatId={chatID}></MessageList>
        <FooterHome></FooterHome>
    </>;
}

export async function generateStaticParams(context: RouteContext<RouteParams>) {
    const messages = (await GetAllMessagesFromChat(context.params.id)) ?? [];

    return messages.map((message) => ({
        id: message.id.toHexString()
    }));
}