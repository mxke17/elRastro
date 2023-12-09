import { AuctionDetailed, AuctionMini } from "@/components/auction";
import { BidMasAlta } from "@/components/bid";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { Auction, GetAuction } from "@/database/auctions";
import { GetHighestBidForAuction } from "@/database/bid";
import { RouteContext } from "@/lib/route";

interface RouteParams {
    id: string
}

export default async function auction(context: RouteContext<RouteParams>){
    const auctionDetallada = await GetAuction(context.params.id); 

    if(!auctionDetallada){
        return <>SUBASTA NO ENCONTRADA</>;
    }

    let bidMaxima = await GetHighestBidForAuction(auctionDetallada.ID.toHexString());
    let valorMinimo = auctionDetallada.InitialPrice;;
    if(bidMaxima){
        valorMinimo = bidMaxima.Quantity;
    }
    
    return <>
        <NavbarHome></NavbarHome>
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", margin: "16px", padding: "16px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
    <div style={{ marginBottom: "16px" }}>
        <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <label style={{ marginBottom: "8px" }} htmlFor="amount">Cantidad:</label>
            <input
              style={{
                padding: "10px",
                marginBottom: "16px",
              }}
              type="number"
              id="amount"
              name="amount"
              required
              min={valorMinimo} // Establecer el valor mínimo
            />
            <button style={{ backgroundColor: "green", color: "#fff", padding: "10px", border: "none", borderRadius: "4px", cursor: "pointer", transition: "background-color 0.3s" }} type="submit">Enviar</button>
        </form>
        </div>
    </div>
        <FooterHome></FooterHome>
    </>;
}