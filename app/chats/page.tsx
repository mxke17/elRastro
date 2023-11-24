import { ChatList } from "@/components/chatList";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { Chat } from "@/database/chats";

export default function chats(){
    return <>
        <NavbarHome></NavbarHome>
        <ChatList chatList={[new Chat, new Chat]}></ChatList>
        <FooterHome></FooterHome>
    </>;
}