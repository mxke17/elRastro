"use client";

import { NewAuction } from "@/components/newAuction";
import { Card, Col, Container, Figure, Row } from "react-bootstrap";

export const dynamic = "force-dynamic";

export default async function newAuction() {

    return <>
        <Container fluid="md">
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
                    <NewAuction></NewAuction>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    </>;
}