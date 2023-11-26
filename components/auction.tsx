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