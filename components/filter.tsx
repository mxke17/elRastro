"use client";
import { useState } from "react";
import { Card, Figure, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export function Filter() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ marginBottom: "20px" }}>
        <Figure.Image
          style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "50px" }}
          src="/keyboard.jpg"
        />
        <Card.Body>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Buscar</Button>
          </div>
          <Card.Body>¿Demasiadas pujas? Use nuestros {" "}
            <Button variant="outline-primary" size="sm" onClick={handleShow}> filtros </Button>
          </Card.Body>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>FILTROS</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </Card.Body>
      </Card>
    </>
  );
}