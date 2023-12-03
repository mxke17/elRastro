import { Message } from "@/database/messages";
import { Card, Col, Container, Row } from "react-bootstrap";

interface messageProp{
    message: Message;
}

export function MessageDetailed(props: messageProp){
    const message = props.message;
    const user = "653be37c5ee549bea86cd462";
    const sender = message.sender.toHexString();
    if(!(sender.localeCompare(user))){
        return  <>
        <Container style={{margin:"20px"}}>
            <Row xs = "auto">
                <Col xs = "auto" className="text-center">
            <Card>
            <p>{message.message}</p>
            </Card>
                </Col>
                <Col><sub>{message.time.getHours()}:{message.time.getMinutes()}</sub></Col>
            </Row>
            </Container>
            
        </>;
    }

    return <>
    <Container style = {{alignItems: "center", margin:"20px"}}>
        <Row xs = "auto">
            <Col xs = "auto" className="text-center">
        <Card bg = "success" text="white">
        <p>{message.message}</p>
        </Card>
            </Col>
            <Col><sub>{message.time.getHours()}:{message.time.getMinutes()}</sub></Col>
        </Row>
        </Container>
        
    </>;
}