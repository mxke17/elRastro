import { MessageList } from "@/components/messageList";
import { GetAllMessagesFromChat } from "@/database/messages";
import { RouteContext } from "@/lib/route";

export const dynamic = "force-dynamic";

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
        <MessageList messageList={messages} chatId={chatID}></MessageList>
    </>;
}

export async function generateStaticParams(context: RouteContext<RouteParams>) {
    const messages = (await GetAllMessagesFromChat(context.params.id)) ?? [];

    return messages.map((message) => ({
        id: message.id.toHexString()
    }));
}