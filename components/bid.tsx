import { Bid } from "@/database/bid";

interface bidProps{
    bid: Bid|null;
}


export function BidMasAlta(props: bidProps) {
    const bid = props.bid;

    if (!bid) {
        return <><div style={{ border: "1px solid #ddd", borderRadius: "8px", margin: "16px", padding: "16px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ marginBottom: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>No hay ninguna puja, ¡sé el primero en pujar!</p>
            </div>
        </div>
        <button style={{ backgroundColor: "green", color: "#fff", padding: "10px", border: "none", borderRadius: "4px", cursor: "pointer", transition: "background-color 0.3s" }}>Pujar</button>
    </div></>;
    }

    return <>

<div style={{ border: "1px solid #ddd", borderRadius: "8px", margin: "16px", padding: "16px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
    <div style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Puja más alta: {bid.Quantity}</p>
            <p>Fecha de puja: {bid.Date.toString()}</p>
        </div>
    </div>
    <button style={{ backgroundColor: "green", color: "#fff", padding: "10px", border: "none", borderRadius: "4px", cursor: "pointer", transition: "background-color 0.3s"}}>Pujar</button>
</div>

    </>;
 }