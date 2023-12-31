import { Message } from "@/database/messages";
import { Card, Col, Container, Row } from "react-bootstrap";

interface messageProp {
    message: Message;
    user: string;
}

export function MessageDetailed(props: messageProp) {
    const message = props.message;
    const user = props.user;
    const sender = message.sender.toString();
    console.log(user);
    console.log(sender);
    if (!(user === sender)) {
        return <>
            <Container style={{ alignItems: "center", margin: "20px" }}>
                <Row xs="auto">
                    <Col xs="auto" className="text-center">
                        <Card bg="secondary" text="white">
                            <p style={{ margin: "5px", maxWidth: "500px" }}>{message.message}</p>
                        </Card>
                    </Col>
                    <Col><sub>{message.time.getDate()}/{message.time.getMonth()}/{message.time.getFullYear()} {message.time.getHours()}:{message.time.getMinutes()}</sub></Col>
                </Row>
            </Container>

        </>;
    } else {

        return <>
            <Container style={{ alignItems: "center", margin: "20px" }}>
                <Row xs="auto">
                    <Col xs="auto" className="text-center">
                        <Card bg="success" text="white">
                            <p style={{ margin: "5px", maxWidth: "500px" }}>{message.message}</p>
                        </Card>
                    </Col>
                    <Col><sub>{message.time.getDate()}/{message.time.getMonth()}/{message.time.getFullYear()} {message.time.getHours()}:{message.time.getMinutes()}</sub></Col>
                </Row>
            </Container>

        </>;
    }
}