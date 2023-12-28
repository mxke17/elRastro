"use client";

import { NewAuctionFromForm } from "@/database/auction_ops";
import React, { useState } from "react";
import { Button, Card, Col, Container, Figure, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface NewAuctionProps {
    userID: string;
}

export function NewAuction(props: NewAuctionProps) {
    return <Container fluid="md">
        <Row>
            <Col xs={1}></Col>
            <Col>
                <Card style={{ marginBottom: "20px" }}>
                    <Figure.Image
                        style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "75px" }}
                        src="/newAuction.jpg"
                    />
                    <Card.Body>¡Tu tesoro merece su momento de gloria! Sube los datos de tu producto y comencemos la puja. ¡La aventura está a punto de empezar!</Card.Body>
                </Card>
                <NewAuctionForm userID={props.userID}></NewAuctionForm>
            </Col>
            <Col xs={1}></Col>
        </Row>
    </Container>;
}

export function NewAuctionForm(props: NewAuctionProps) {
    const [endDate, setEndDate] = useState(new Date());
    const userID = props.userID;
    const handleEndDateChange = (date: Date | null) => {
        if (date) {
            setEndDate(date);
        }
    };

    const handleSumbit = async (data: FormData) => {
        const auctionCreated = await NewAuctionFromForm(data, userID);

        window.location.href = `/auction/${auctionCreated.id}`;
    };

    return (
        <Card style={{ marginBottom: "20px" }}>
            <Card.Body>
                <Form action={handleSumbit}>
                    <Form.Group className="mb-3" controlId="formGroupTitle">
                        <Form.Label>¿Qué vas a vender?</Form.Label>
                        <Form.Control name="title" type="title" placeholder="Introduzca titulo" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Label>Detalla el producto</Form.Label>
                        <Form.Control name="description" as="textarea" placeholder="Introduzca descripcion" rows={2} required />
                    </Form.Group>
                    <Form.Group controlId="formGroupMinPrice" className="mb-3">
                        <Form.Label>Precio mínimo</Form.Label>
                        <Form.Control name="price" type="number" placeholder="Introduce el precio mínimo" min="1" required />
                    </Form.Group>
                    <Form.Group controlId="formGroupEndDate" className="mb-3">
                        <Form.Label>Fecha y hora de finalización de la subasta </Form.Label>{" "}
                        <DatePicker
                            name="date"
                            selected={endDate}
                            onChange={handleEndDateChange}
                            showTimeSelect
                            timeIntervals={15}
                            timeFormat="HH:mm"
                            dateFormat="yyyy-MM-dd h:mm aa"
                        />
                    </Form.Group>
                    <Form.Group controlId="formPicture" className="mb-3">
                        <Form.Label>Seleciona una foto</Form.Label>
                        <Form.Control name="picture" type="file" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Subastar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}