import { NextRequest, NextResponse } from "next/server";
import paypal from "@paypal/checkout-server-sdk";

export async function POST(request: NextRequest){

  const json = await request.json();

  const precio = json.Precio;

 const response = await checkoutOrder(precio);

 return NextResponse.json({id: response.result.id});

}


const client_id = process.env.PAYPAL_CLIENT_ID;
const client_secret = process.env.PAYPAL_CLIENT_SECRET;

let environment: paypal.core.SandboxEnvironment;
if(client_id && client_secret){
 environment = new paypal.core.SandboxEnvironment(client_id, client_secret);

}



export function setClient(){
return new paypal.core.PayPalHttpClient(environment);
}

export async function checkoutOrder(price: number){
    const client = setClient();
    const request = new paypal.orders.OrdersCreateRequest();
    console.log(price.toFixed());
    request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "EUR",
                    value: "100.00"
                    
                }
                
            }
        ]
        
    });
    const response = await client.execute(request);
    console.log(response);
    return response;
}