"use client";
import { FooterHome } from "@/components/footer";
import { NavbarLite } from "@/components/navbarLite";
import { Button, Card, Col, Container, Figure, Form, Row } from "react-bootstrap";

export const dynamic = "force-dynamic";

export default function Login() {
    return <>
        <NavbarLite></NavbarLite>
        <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                    <Card style={{ marginBottom: "20px" }}>
                        <Figure.Image
                            style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "75px" }}
                            src="/login.jpg"
                        />
                        <Card.Body>¿Listo para desatar tu poder de compra? ¡Ingresa tu contraseña y prepárate para un viaje de gangas que cambiará tu vida!</Card.Body>
                    </Card>

                    <Form style={{ marginBottom: "20px" }}>
                        <div className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={"CristobalMartin@gmail.com"} readOnly/>
                            <Form.Text className="text-muted">
                                Tu correo está más seguro con nosotros que las recetas secretas de la abuela. ¡Ni el gato las sabe!
                            </Form.Text>
                        </div>

                        <div className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" value={"superSecreta"} readOnly/>
                        </div>
                        <Button href="/home" variant="primary" type="submit">
                            Iniciar sesión
                        </Button>
                    </Form>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
        <FooterHome></FooterHome>
    </>;
}