"use client";
import { Modal, Button, Card, Form } from "react-bootstrap";
import { Auction } from "@/database/auctions";
import Figure from "react-bootstrap/Figure";
import { useState } from "react";

interface editAuction {
    auction: Auction;
}

export function EditAuction(props: editAuction) {
    const auction = props.auction;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <>
        <Card style={{ marginBottom: "20px" }}>
            <Figure.Image
                style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "150px" }}
                src="/settings.jpg"
            />
            <Card.Body>
                <Card.Title>Edite su subasta</Card.Title>
                <Form>
                    <Form.Group controlId="validationTitle">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                        //value={auction.Title}
                        //onChange={handleChange}
                        //isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="validationDescription">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="position-relative mb-3">
                        <Form.Label>Nueva foto</Form.Label>
                        <Form.Control
                            type="file"
                            name="file"
                        //onChange={handleChange}
                        //isInvalid={!!errors.file}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>

                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">Actualizar</Button>{" "}
                    <Button variant="danger" onClick={handleShow}>
                        Eliminar
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>¿Seguro que deseas eliminar la subasta?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>No hay vuelta atrás :/</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                No
                            </Button>
                            <Button variant="danger" onClick={handleClose}>
                                Sí
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </Card.Body>
        </Card>
    </>;
}