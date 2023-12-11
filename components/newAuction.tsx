"use client";

import { NewAuctionFromForm } from "@/database/auction_ops";
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export function NewAuction() {
    const [endDate, setEndDate] = useState(new Date());

    const handleEndDateChange = (date: Date | null) => {
        if(date) {
            setEndDate(date);
        }
    };

    const handleSumbit = async (data: FormData) => {
        const auctionCreated = await NewAuctionFromForm(data, "653be37c5ee549bea86cd466");

        window.location.href = `/auction/${auctionCreated.id}`;
    };

    return (
        <Card style={{ marginBottom: "20px" }}>
            <Card.Body>
                <Form action={handleSumbit}>
                    <Form.Group className="mb-3" controlId="formGroupTitle">
                        <Form.Label>¿Qué vas a vender?</Form.Label>
                        <Form.Control name="title" type="title" placeholder="Introduzca titulo" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Label>Detalla el producto</Form.Label>
                        <Form.Control name="description" as="textarea" placeholder="Introduzca descripcion" rows={2} required/>
                    </Form.Group>
                    <Form.Group controlId="formGroupMinPrice" className="mb-3">
                        <Form.Label>Precio mínimo</Form.Label>
                        <Form.Control name="price" type="number" placeholder="Introduce el precio mínimo" min="1" required/>
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