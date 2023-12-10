"use client";

import { Bid, BidJSON } from "@/database/bid";
import { Card } from "react-bootstrap";
import React from "react";
import { AuctionJSON } from "@/database/auctions";
import { GetUser, UserJSON } from "@/database/users";


interface bidProps{
    bidJSON: BidJSON;
    //auctionJSON: AuctionJSON;
    userJSON: UserJSON; 
}


export function BidMini(props: bidProps) {
    console.log("bidJSON");
    console.log(props.bidJSON);
    const bid = props.bidJSON;
    const user = props.userJSON;
    console.log(user);
    //const user =  GetUser(bid.Postor);

//Hay que hacer que se muestr bonito de alguna forma las pujas()
    return <>
        <Card style={{ marginBottom: "20px" }}>
            
            <Card.Body>
                <Card.Title><Card.Link  style={{ textDecoration: "underline", color: "black" }}>
                    {user.Email}                    
                </Card.Link></Card.Title>    
                
                <Card.Text>Cantidad Pujada: {bid.Cantidad} €</Card.Text>
            </Card.Body>
        </Card>
    </>;
 }