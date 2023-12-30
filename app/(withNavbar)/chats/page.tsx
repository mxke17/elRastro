import { ChatList } from "@/components/chatList";
import { GetAllChatsOfUser } from "@/database/chats";
import { GetUserByEmail } from "@/database/users";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

export default async function chats(){
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
    const allChats = await GetAllChatsOfUser(user.ID.toHexString());
    console.log(allChats);
    if(allChats===null){
        
        return<><h1>There are no Chats available</h1></>;
   }
    return <>
    <h1>Chats</h1>
        <ChatList chatList={allChats}></ChatList>
    </>;
}