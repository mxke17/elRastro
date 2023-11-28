"use client";
import { Button, Card, Figure, FloatingLabel, Form } from "react-bootstrap";

export function Review() {
    return (
        <Card style={{ marginBottom: "20px" }}>
            <Figure.Image
                style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "250px" }}
                src="/review.jpg"
            />
            <Card.Body>
                <Card.Title>Nos encantaría escuchar cómo fue todo</Card.Title>
                <Card.Text>¡Tu opinión es tan valiosa como los tesoros que puedes encontrar en nuestro sitio! Cuéntanos cómo fue tu última transacción </Card.Text>
                <Form>
                    <FloatingLabel controlId="floatingSelect" label="Valora tu transacción de 1 a 5">
                        <Form.Select aria-label="Floating label select example">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>
                    </FloatingLabel>
                    <Card.Body></Card.Body>
                    <FloatingLabel controlId="floatingTextarea2" label="Comentario">
                        <Form.Control
                            type="text"
                            style={{ height: "100px" }}
                            required
                        />
                    </FloatingLabel>
                    <Card.Body></Card.Body>
                    <Button type="submit">Enviar</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}