import { Message } from "@/database/messages";
import { MessageDetailed } from "./messageDetailed";
import {Button, Card, Col, Container, Form, Row } from "react-bootstrap";

interface MessageListProp{
    messageList: Message[];
}


export function MessageList(props: MessageListProp){

    const user = "653be37c5ee549bea86cd462";
    
    return <>
    <Container className ="align-bottom" style={{minHeight: "700px",maxHeight:"700", maxWidth:"800px", display:"grid", marginTop:"100px"}}>
        <Card style={{height:"500px"}}>
                {props.messageList.map(message => {
                    if(message.sender.toHexString().localeCompare(user)){
                return <div key={message.id.toHexString()} style={{alignSelf:"right"}}><MessageDetailed message={message}></MessageDetailed></div>;
                    }else{
                    return <div key={message.id.toHexString()}><MessageDetailed message={message}></MessageDetailed></div>;
                    }
                })}

            </Card>
            <br></br>
            <Form >
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