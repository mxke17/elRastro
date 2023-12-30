import { MessageList } from "@/components/messageList";
import { GetAllMessagesFromChat } from "@/database/messages";
import { GetUserByEmail } from "@/database/users";
import { RouteContext } from "@/lib/route";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

interface RouteParams {
    id: string
}

export default async function chats(context: RouteContext<RouteParams>){
    const session = await getServerSession();
    const sessionUser = session?.user;

    if (!sessionUser) {
        return <></>;
    }

    if(!sessionUser.email || !sessionUser.image || !sessionUser.name) {
        return <h1>Error fetching user info from session.</h1>;
    }

    const user = await GetUserByEmail(sessionUser.email);

    if(!user) {
        return <></>;
    }
    const chatID = context.params.id;
    const messages = await GetAllMessagesFromChat(chatID);
    if(messages === null){
        return <>ERROR</>;
    }
        
    return <>
        <MessageList messageList={messages} chatId={chatID} user={user.ID.toHexString()}></MessageList>
    </>;
}

export async function generateStaticParams(context: RouteContext<RouteParams>) {
    const messages = (await GetAllMessagesFromChat(context.params.id)) ?? [];

    return messages.map((message) => ({
        id: message.id.toHexString()
    }));
}