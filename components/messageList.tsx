import { Message } from "@/database/messages";
import { MessageDetailed } from "./messageDetailed";
import {Button, Card, Col, Container, Form, Row } from "react-bootstrap";

interface MessageListProp{
    messageList: Message[];
}


export function MessageList(props: MessageListProp){

    
    return <>
    <Container className ="align-bottom" style={{minHeight: "700px",maxHeight:"700", maxWidth:"800px", marginTop:"100px"}}>
        <Card style={{height:"500px"}}>
                {props.messageList.map(message => {
                    return <div key={message.id.toHexString()}><MessageDetailed message={message}></MessageDetailed></div>;
                })}

            </Card>
            <br></br>
            <Form>
            <Row>
                <Col>
            <Form.Control type="text" id="message"/>
            </Col>
            <Col xs = "auto">
      <Button variant="primary" type="submit">
        Send
      </Button>
      </Col>
        </Row>
            </Form>
            

    </Container>
    </>;

}