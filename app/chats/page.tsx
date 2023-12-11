import { ChatList } from "@/components/chatList";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { GetAllChatsOfUser } from "@/database/chats";

export const dynamic = "force-dynamic";

export default async function chats(){
    const userId = "653be37c5ee549bea86cd462";
    const allChats = await GetAllChatsOfUser(userId);

    if(allChats===null){
        
        return<><NavbarHome></NavbarHome><FooterHome></FooterHome> <h1>There are no Chats available</h1></>;
   }
    return <>
        <NavbarHome></NavbarHome>
        <ChatList chatList={allChats}></ChatList>
        <FooterHome></FooterHome>
    </>;
}

export async function generateStaticParams() {
    const chats = (await GetAllChatsOfUser( "653be37c5ee549bea86cd462")) ?? [];

    return chats.map((chat) => ({
        id: chat.id.toHexString()
    }));
}