import { Chat} from "@/database/chats";
import { GetUser } from "@/database/users";
import Link from "next/link";

interface chatsMiniProps{
    chat: Chat;
}

export async function ChatMini(props: chatsMiniProps){
    const chats = props.chat;
    const seller = await GetUser(chats.seller.toHexString());
    if(seller === null){
        return <></>;
    }
return<>
        <p>{seller.Email} <Link href = {`/chats/${chats.id.toHexString()}`}><button>Acceder</button></Link></p>

    </>;
    
}