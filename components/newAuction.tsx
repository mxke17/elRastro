"use client";

import { CreateNewAuction } from "@/database/auction_ops";
import React, { FormEvent, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export function NewAuction() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [endDate, setEndDate] = useState(new Date());
    //const [picture, setPicture] = useState(new File());

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const title = event.target.value;
        console.log(event.target);
        if(title) {
            console.log(title);
            setTitle(title);
        }
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const description = event.target.value;
        if(description) {
            setDescription(description);
        }
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const price = event.target.value;
        if(price) {
            const parsedPrice = parseFloat(price);
            if(!isNaN(parsedPrice)) {
                setPrice(parsedPrice);
            }
        }
    };

    const handleEndDateChange = (date: Date | null) => {
        if(date) {
            setEndDate(date);
        }
    };

    const handleSumbit = (event: FormEvent) => {
        event.preventDefault();

        CreateNewAuction({
            Titulo: title,
            Descripcion: description,
            "Fecha limite": endDate,
            "Precio partida": price,
            Subastador: "653be37c5ee549bea86cd466",
            Foto: "foto1.png"
        });

        window.location.href = "/home";
    };

    return (
        <Card style={{ marginBottom: "20px" }}>
            <Card.Body>
                <Form onSubmit={handleSumbit}>
                    <Form.Group className="mb-3" controlId="formGroupTitle">
                        <Form.Label>¿Qué vas a vender?</Form.Label>
                        <Form.Control onChange={handleTitleChange} type="title" placeholder="Introduzca titulo" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Label>Detalla el producto</Form.Label>
                        <Form.Control onChange={handleDescriptionChange} as="textarea" placeholder="Introduzca descripcion" rows={2} required/>
                    </Form.Group>
                    <Form.Group controlId="formGroupMinPrice" className="mb-3">
                        <Form.Label>Precio mínimo</Form.Label>
                        <Form.Control onChange={handlePriceChange} type="number" placeholder="Introduce el precio mínimo" min="1" required/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEndDate" className="mb-3">
                        <Form.Label>Fecha y hora de finalización de la subasta </Form.Label>{" "}
                        <DatePicker
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
                        <Form.Control type="file" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Subastar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}