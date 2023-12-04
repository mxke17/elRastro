import { AuctionDetailed, AuctionMini } from "@/components/auction";
import { BidMasAlta } from "@/components/bid";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { Auction, GetAuction } from "@/database/auctions";
import { GetHighestBidForAuction } from "@/database/bid";

export default async function auction(){
    const auctionDetallada = await GetAuction("653be2fb5ee549bea86cd459");

    if(!auctionDetallada){
        return <>SUBASTA NO ENCONTRADA</>;
    }

    const bidMaxima = await GetHighestBidForAuction(auctionDetallada.ID.toHexString());

    if(!bidMaxima){
        return <>PUJA NO ENCONTRADA</>;
    }
    

    return <>
        <NavbarHome></NavbarHome>
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", margin: "16px", padding: "16px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
    <div style={{ marginBottom: "16px" }}>
        <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <label style={{ marginBottom: "8px" }} htmlFor="amount">Cantidad:</label>
            <input style={{ padding: "10px", marginBottom: "16px" }} type="number" id="amount" name="amount" required />
            <button style={{ backgroundColor: "green", color: "#fff", padding: "10px", border: "none", borderRadius: "4px", cursor: "pointer", transition: "background-color 0.3s" }} type="submit">Enviar</button>
        </form>
        </div>
    </div>
        <FooterHome></FooterHome>
    </>;
}