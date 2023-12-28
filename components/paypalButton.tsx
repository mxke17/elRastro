"use client";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export function ButtonPaypal(){
 return <><PayPalScriptProvider options={{
    clientId:"Ae27EEkmerEC8Xc6KkPh5_2KRbC0rZ0AdDV_7WFxlW8q3-LxoZFiAGsZleNe5KnSyQHr7giYeDGCsFRS",
    currency:"EUR"
}}>
<PayPalButtons style={{color:"blue", layout:"horizontal"}} createOrder={async ()=> {
    const res = await fetch("/api/checkout", {method: "POST",
   body: JSON.stringify({Precio: 100.00})
        });
    const order = await res.json();
    console.log(order.id);
    return order.id;
}}>
    
</PayPalButtons>
</PayPalScriptProvider>
</>;
}