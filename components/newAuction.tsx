import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export function NewAuction() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleStartDateChange = (date: React.SetStateAction<Date>) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date: React.SetStateAction<Date>) => {
        // Verificar si la fecha de finalización es posterior a la fecha de inicio
        if (date > startDate) {
            setEndDate(date);
        } else {
            alert("La fecha de finalización debe ser posterior a la fecha de inicio.");
        }
    };

    return (
        <Card style={{ marginBottom: "20px" }}>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupTitle">
                        <Form.Label>¿Qué vas a vender?</Form.Label>
                        <Form.Control type="title" placeholder="Introduzca titulo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Label>Detalla el producto</Form.Label>
                        <Form.Control as="textarea" placeholder="Introduzca descripcion" rows={2} />
                    </Form.Group>
                    <Form.Group controlId="formGroupMinPrice" className="mb-3">
                        <Form.Label>Precio mínimo</Form.Label>
                        <Form.Control type="number" placeholder="Introduce el precio mínimo" min="1" />
                    </Form.Group>
                    <Form.Group controlId="formGroupStartDate" className="mb-3">
                        <Form.Label>Fecha y hora de inicio de la subasta </Form.Label>{" "}
                        <DatePicker
                            selected={startDate}
                            onChange={handleStartDateChange}
                            showTimeSelect
                            timeIntervals={15}
                            timeFormat="HH:mm"
                            dateFormat="yyyy-MM-dd h:mm aa"
                        />
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