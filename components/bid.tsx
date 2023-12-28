"use client";
import { Bid } from "@/database/bid";
import { CreateNewBid } from "@/database/bids_ops";
import React, { FormEvent, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

interface bidProps {
    bid: Bid | null;
}

interface newBidProps {
    subasta: string;
    user: string;
}

export function BidMasAlta(props: bidProps) {
    const bid = props.bid;

    if (!bid) {
        return <><div style={{ border: "1px solid #ddd", borderRadius: "8px", margin: "16px", padding: "16px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p>No hay ninguna puja, ¡sé el primero en pujar!</p>
                </div>
            </div>
        </div></>;
    }

    return <>

        <div style={{ border: "1px solid #ddd", borderRadius: "8px", margin: "16px", padding: "16px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p>Puja más alta: {bid.Quantity}</p>
                    <p>Fecha de puja: {bid.Date.toString()}</p>
                </div>
            </div>
        </div>

    </>;
}

export function NewBid(props: newBidProps) {
    const sub = props.subasta;
    const [price, setPrice] = useState(0);

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const price = event.target.value;
        if(price) {
            const parsedPrice = parseFloat(price);
            if(!isNaN(parsedPrice)) {
                setPrice(parsedPrice);
            }
            console.log(price);
        }
    };

    const handleSumbit = async (event: FormEvent) => {
        event.preventDefault();

        await CreateNewBid({
            "Fecha de puja": new Date(),
            "Cantidad": price,
            Postor: props.user,
            Subasta: sub
        });

        window.location.href = "/auction/"+sub+"/pujar/pago";
    };

    return (
        <Card style={{ marginBottom: "20px" }}>
            <Card.Body>
                <Form onSubmit={handleSumbit}>
                    <Form.Group className="mb-3" controlId="formGroupTitle">
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                    </Form.Group>
                    <Form.Group controlId="formGroupMinPrice" className="mb-3">
                        <Form.Label>Cantidad:</Form.Label>
                        <Form.Control onChange={handlePriceChange} type="number" placeholder="Introduce la cantidad de dinero que desees pujar" min="1" required/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Pujar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}
