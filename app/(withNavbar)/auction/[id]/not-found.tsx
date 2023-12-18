
import { Alert, Col, Container, Row } from "react-bootstrap";

export default function NotFound() {
    return <>
        <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                    <Alert variant="danger" style={{ marginBottom: "20px", marginTop: "20px"}}>
                        <h5>Subasta no encontrada</h5>
                    </Alert>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    </>;
}