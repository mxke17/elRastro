"use client";
import { Auction } from "@/database/auctions";
import { Card } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";

interface auctionMiniProps {
    auction: Auction;
}

export function AuctionMini(props: auctionMiniProps) {
    const auction = props.auction;

    return <>
        <Card style={{ marginBottom: "20px" }}>
            <Figure.Image
                style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "250px" }}
                src="/pruebaFoto.jpg"
            />
            <Card.Body>
                <Card.Title><Card.Link href="" style={{ textDecoration: "underline", color: "black" }}>
                    {auction.Title}
                </Card.Link></Card.Title>
                <Card.Text>Precio partida: {auction.InitialPrice} €</Card.Text>
                <Card.Text>Vendedor:</Card.Text>
            </Card.Body>
        </Card>
    </>;
}



export function AuctionDetailed(props: auctionMiniProps){
    const auction = props.auction;

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
                src="/pruebaFoto.jpg"/>
          <p>Precio inicial: {auction.InitialPrice}</p>
          <p>Fecha de cierre: {auction.Deadline.toString()}</p>
        </div>

    </div>

    </>;
}

