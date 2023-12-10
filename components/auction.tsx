"use client";
import { Auction } from "@/database/auctions";
import { User, UserJSON } from "@/database/users";
import { Card } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";

interface auctionMiniProps {
    auction: Auction;
    usuario: User;
}

interface usuarioProps {
    usuario: User;
}

export function AuctionMini(props: auctionMiniProps) {
    const auction = props.auction;

    return <>
        <Card style={{ marginBottom: "20px" }}>
            <Figure.Image
                style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "250px" }}
                src={auction.Picture}
            />
            <Card.Body>
                <Card.Title><Card.Link href={`/auction/${auction.ID.toString()}`} style={{ textDecoration: "underline", color: "black" }}>
                    {auction.Title}
                </Card.Link></Card.Title>
                <Card.Text>Precio partida: {auction.InitialPrice} €</Card.Text>
            </Card.Body>
        </Card>
    </>;
}



export function AuctionDetailed(props: auctionMiniProps){
    const auction = props.auction;
    const usuario = props.usuario;
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
        <h2>{auction.Title}</h2>
        <p>{auction.Description}</p>
      </div>

        <div>
        <Figure.Image
                style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "250px" }}
                src={`${auction.Picture}`}/>
        <p>Vendedor: {usuario.UserName}</p>
          <p>Precio inicial: {auction.InitialPrice}</p>
          <p>Fecha de cierre: {auction.Deadline.toString()}</p>
        </div>

    </div>

    </>;
}

