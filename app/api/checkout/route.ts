import { NextRequest, NextResponse } from "next/server";
import paypal from "@paypal/checkout-server-sdk";
const client_id = process.env.PAYPAL_CLIENT_ID;
const client_secret = process.env.PAYPAL_CLIENT_SECRET;
export async function POST(req: NextRequest){
    if(!client_id || !client_secret){
        return NextResponse.json({},{status:406});
        
        }
const environment = new paypal.core.SandboxEnvironment(client_id, client_secret);
const client = new paypal.core.PayPalHttpClient(environment);
  const json = await req.json();

  const precio = json.Precio;
 const request = new paypal.orders.OrdersCreateRequest();
 console.log(precio.toFixed());
 request.requestBody({
     intent: "CAPTURE",
     purchase_units: [
         {
             amount: {
                 currency_code: "EUR",
                 value: precio.toFixed()
                 
             }
             
         }
     ]
     
 });
 const order = await client.execute(request);
 console.log(order);
 return NextResponse.json({id: order.result.id});

}