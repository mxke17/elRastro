import { Chat } from "@/database/chats";
import { GetUser } from "@/database/users";
import Link from "next/link";
import { Container } from "react-bootstrap";

interface chatsMiniProps {
    chat: Chat;
}

export async function ChatMini(props: chatsMiniProps) {
    const chats = props.chat;
    const seller = await GetUser(chats.seller.toHexString());
    if (seller === null) {
        return <></>;
    }
    return <>
        <Container style={{ marginTop: "20px", marginLeft: "20px" }}>
            <p>{seller.UserName}
                <Link href={`/chats/${chats.id.toHexString()}`} style={{ marginLeft: "10px" }}>
                    <button>Acceder</button>
                </Link>
            </p>
        </Container>
    </>;

}