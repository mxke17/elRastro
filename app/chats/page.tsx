import { ChatList } from "@/components/chatList";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { GetAllChatsOfUser } from "@/database/chats";
export default async function chats(){
    const userId = "653be37c5ee549bea86cd462";
    const allChats = await GetAllChatsOfUser(userId);

    if(allChats===null){
        return <h1>ERROR</h1>;
   }
    return <>
        <NavbarHome></NavbarHome>
        <ChatList chatList={allChats}></ChatList>
        <FooterHome></FooterHome>
    </>;
}