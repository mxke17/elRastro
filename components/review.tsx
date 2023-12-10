"use client";
import { CreateNewReview } from "@/database/review_ops";
import { FormEvent, useState } from "react";
import { Button, Card, Figure, FloatingLabel, Form } from "react-bootstrap";

interface ReviewProps {
    BuyerID: string,
    SellerID: string
}

export function Review(props: ReviewProps) {
    const [rating, changeRating] = useState("1");

    const handleSubmit = function (event: FormEvent) {
        event.preventDefault();

        CreateNewReview({
            comprador: props.BuyerID,
            vendedor: props.SellerID,
            puntuacion: rating
        });

        window.location.href = "/usuario/" + props.SellerID;
    };

    return (
        <Card style={{ marginBottom: "20px" }}>
            <Figure.Image
                style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "250px" }}
                src="/review.jpg"
            />
            <Card.Body>
                <Card.Title>Nos encantaría escuchar cómo fue todo</Card.Title>
                <Card.Text>¡Tu opinión es tan valiosa como los tesoros que puedes encontrar en nuestro sitio! Cuéntanos cómo fue tu última transacción </Card.Text>
                <Form onSubmit={handleSubmit}>
                    <FloatingLabel controlId="floatingSelect" label="Valora tu transacción de 1 a 5">
                        <Form.Select onChange={function(event) {
                            const value = event.target.value;
                            if(value) {
                                changeRating(value);
                            }
                        }} aria-label="Floating label select example">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>
                    </FloatingLabel>
                    <Button type="submit">Enviar</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}