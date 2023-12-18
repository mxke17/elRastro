"use client";

import { BidJSON } from "@/database/bid";
import { Card } from "react-bootstrap";
import React from "react";
import { AuctionJSON } from "@/database/auctions";
import { UserJSON } from "@/database/users";


interface bidProps{
    bidJSON: BidJSON;
    auctionJSON: AuctionJSON;
    userJSON: UserJSON; 
}


export function BidMini(props: bidProps) {
    const bid = props.bidJSON;
    const auction = props.auctionJSON;

    //const user =  GetUser(bid.Postor);

//Hay que hacer que se muestr bonito de alguna forma las pujas()
    return <>
        <Card style={{ marginBottom: "20px" }}>
            
            <Card.Body>
                <Card.Title><Card.Link href={`/auction/${auction._id}`} style={{ textDecoration: "underline", color: "black" }}>
                    {auction.Titulo}                    
                </Card.Link></Card.Title>    
                
                <Card.Text>Cantidad Pujada: {bid.Cantidad} €</Card.Text>
            </Card.Body>
        </Card>
    </>;
 }
