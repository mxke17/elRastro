"use client";
import { Message } from "@/database/messages";
import { MessageDetailed } from "./messageDetailed";
import {Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FormEvent, useState } from "react";
import { CreateNewMessage } from "@/database/message_ops";

interface MessageListProp{
    messageList: Message[];
    chatId: string;
}


export function MessageList(props: MessageListProp){
    const [message, setMessage] = useState("");
    const handleMessage = (event: React.ChangeEvent) => {event.preventDefault(); 
        const text = event.target.value;
        if(text) {
            console.log(text);
            setMessage(text);
        }
    };
    const handleSumbit = (event: FormEvent) => {
        event.preventDefault();

        CreateNewMessage({
            Message: message,
            Sender: "653be37c5ee549bea86cd462",
            Chat: props.chatId,
        });
        window.location.href = `/chats/${props.chatId}`;
    };
    return <>
    <Container className ="align-bottom" style={{minHeight: "700px", maxWidth:"800px", marginTop:"100px"}}>
        
        <Card style={{minHeight:"500px"}}>
        <Row>
            {
                props.messageList.map(message => {
                    const key = message.id.toString();
                    return <div key={key}><MessageDetailed message={message}></MessageDetailed></div>;
                })}
        </Row>
            </Card>
            <br></br>
            <Form onSubmit={handleSumbit}>
            <Row>
                <Col>
            <Form.Control type="text" id="message" onChange={handleMessage}/>
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