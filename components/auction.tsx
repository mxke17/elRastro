"use client";
import { AuctionJSON } from "@/database/auctions";
import { CreateNewChat } from "@/database/chat_ops";
import { UserJSON } from "@/database/users";
import { Button, Card, Form } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";

interface auctionMiniProps {
    auction: AuctionJSON;
}

interface auctionDetailedProps {
    auction: AuctionJSON;
    usuario: UserJSON;
    usuarioSesion: string | undefined
}

export function AuctionMini(props: auctionMiniProps) {
    const auction = props.auction;

    return <>
        <Card style={{ marginBottom: "20px" }}>
            <Figure.Image
                style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "250px" }}
                src={auction.Foto}
            />
            <Card.Body>
                <Card.Title><Card.Link href={`/auction/${auction._id}`} style={{ textDecoration: "underline", color: "black" }}>
                    {auction.Titulo}
                </Card.Link></Card.Title>
                <Card.Text>Precio partida: {auction["Precio partida"]} €</Card.Text>
            </Card.Body>
        </Card>
    </>;
}



export function AuctionDetailed(props: auctionDetailedProps) {
    const auction = props.auction;
    const usuario = props.usuario;
    const usuarioSesion = props.usuarioSesion;
    if(!usuarioSesion){
        return <>
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                margin: "16px",
                padding: "16px",
                backgroundColor: "#fff",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <div style={{ marginBottom: "16px" }}>
                <h2>{auction.Titulo}</h2>
                <p>{auction.Descripcion}</p>
            </div>

            <div>
                <Figure.Image
                    style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "250px" }}
                    src={`${auction.Foto}`} />
                <p>Vendedor: <a href={`/usuario/${usuario._id}`}>{usuario["Nombre usuario"]}</a></p>
                <p>Precio inicial: {auction["Precio partida"]}</p>
                <p>Fecha de cierre: {auction["Fecha limite"].toString()}</p>
              
            </div>
        </div>
        </>;

    }
    const handleChatSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const seller = auction.Subastador;
        const user = usuarioSesion;
       const result = await CreateNewChat({ User: user, Seller: seller });
       console.log(result);
        window.location.href = "/chats";
    };

    
    return <>
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                margin: "16px",
                padding: "16px",
                backgroundColor: "#fff",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <div style={{ marginBottom: "16px" }}>
                <h2>{auction.Titulo}</h2>
                <p>{auction.Descripcion}</p>
            </div>

            <div>
                <Figure.Image
                    style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "250px" }}
                    src={`${auction.Foto}`} />
                <p>Vendedor: <a href={`/usuario/${usuario._id}`}>{usuario["Nombre usuario"]}</a></p>
                <p>Precio inicial: {auction["Precio partida"]}</p>
                <p>Fecha de cierre: {auction["Fecha limite"].toString()}</p>
              
            </div>
            <Form onSubmit={handleChatSubmit}>
                <Button type="submit">Chat</Button>
            </Form>
        </div>

    </>;
}

