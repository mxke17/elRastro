"use client";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Col, Row } from "react-bootstrap";

export function ButtonPaypal(){
 return <>
        <PayPalScriptProvider options={{
    clientId:"Ae27EEkmerEC8Xc6KkPh5_2KRbC0rZ0AdDV_7WFxlW8q3-LxoZFiAGsZleNe5KnSyQHr7giYeDGCsFRS",
    currency:"EUR"
}}>
    <Row>
        <Col xs={4}></Col>
        <Col>
    <div style={{alignItems:"central", maxWidth:"45%", justifyItems:"center", left:"50%"}}>
<PayPalButtons style={{color:"blue", layout:"horizontal", label:"pay", disableMaxWidth:true}} createOrder={async ()=> {
    const res = await fetch("/api/checkout", {method: "POST",
   body: JSON.stringify({Precio: 100.00})
        });
    const order = await res.json();
    console.log(order.id);
    return order.id;
}}>
    
</PayPalButtons>
</div>
</Col>
<Col xs={1}></Col>
</Row>
</PayPalScriptProvider>
</> ;

}