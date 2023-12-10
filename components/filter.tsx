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
            <Form>
              <div className="d-flex">
                <Form.Control
                  name="title"
                  type="search"
                  placeholder="Search"
                  className="me-2 w-100"
                  aria-label="Search"
                />
                <Button type="submit" variant="primary">Buscar</Button>
              </div>
            </Form>
          </div>
          <Card.Body>¿Demasiadas pujas? Use nuestros {" "}
            <Button variant="outline-primary" size="sm" onClick={handleShow}> filtros </Button>
          </Card.Body>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>FILTROS</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupTitle">
                  <Form.Label>¿Qué quieres comprar?</Form.Label>
                  <Form.Control name="title" type="title" placeholder="Introduzca titulo" />
                </Form.Group>
                <Form.Group controlId="formGroupMaxPrice" className="mb-3">
                  <Form.Label>Precio máximo</Form.Label>
                  <Form.Control name="maxPrice" type="number" placeholder="Introduce el precio mínimo" min="1" />
                </Form.Group>
                <Form.Group controlId="formGroupMinPrice" className="mb-3">
                  <Form.Label>Precio mínimo</Form.Label>
                  <Form.Control name="minPrice" type="number" placeholder="Introduce el precio mínimo" min="1" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Filtrar
                </Button>
              </Form>
            </Offcanvas.Body>
          </Offcanvas>
        </Card.Body>
      </Card>
    </>
  );
}