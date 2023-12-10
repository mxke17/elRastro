import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { GetAuction } from "@/database/auctions";
import { GetHighestBidForAuction } from "@/database/bid";
import { RouteContext } from "@/lib/route";
import { NewBid } from "@/components/bid";

interface RouteParams {
    id: string
}

export default async function auction(context: RouteContext<RouteParams>){
    const auctionDetallada = await GetAuction(context.params.id); 

    if(!auctionDetallada){
        return <>SUBASTA NO ENCONTRADA</>;
    }

    const bidMaxima = await GetHighestBidForAuction(auctionDetallada.ID.toHexString());
    let valorMinimo = auctionDetallada.InitialPrice;
    if(bidMaxima){
        valorMinimo = bidMaxima.Quantity;
    }
    
    return <>
        <NavbarHome></NavbarHome>
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", margin: "16px", padding: "16px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <NewBid subasta={auctionDetallada.ID.toHexString()}></NewBid>
    </div>
        <FooterHome></FooterHome>
    </>;
}