"use client";
import { CreateNewBid } from "@/database/bids_ops";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Col, Row } from "react-bootstrap";

interface paypalProps {
    subasta: string;
    user: string;
    cantidad: number;
}

export function ButtonPaypal(props: paypalProps){
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
   body: JSON.stringify({Precio: props.cantidad})
        });
    const order = await res.json();
    console.log(order.id);
    return order.id;
}} onApprove={async () => { await CreateNewBid({
    "Fecha de puja": new Date(),
    "Cantidad": props.cantidad,
    Postor: props.user,
    Subasta: props.subasta
});
window.location.href = "/auction/" + props.subasta;
}}>
    
</PayPalButtons>
</div>
</Col>
<Col xs={1}></Col>
</Row>
</PayPalScriptProvider>
</> ;

}