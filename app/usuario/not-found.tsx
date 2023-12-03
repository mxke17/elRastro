import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { Alert, Col, Container, Row } from "react-bootstrap";

export default function NotFound() {
    return <>
        <NavbarHome></NavbarHome>
        <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                    <Alert variant="danger" style={{ marginBottom: "20px", marginTop: "20px"}}>
                        <h5>Usuario no encontrada</h5>
                    </Alert>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
        <FooterHome></FooterHome>
    </>;
}