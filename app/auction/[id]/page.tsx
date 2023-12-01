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

    return <>
        <NavbarHome></NavbarHome>
        <AuctionDetailed auction={auctionDetallada}></AuctionDetailed>
        <BidMasAlta bid={bidMaxima}></BidMasAlta>
        
        <FooterHome></FooterHome>
    </>;
}