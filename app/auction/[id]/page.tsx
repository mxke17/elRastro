import { AuctionDetailed, AuctionMini } from "@/components/auction";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { Auction, GetAuction } from "@/database/auctions";

export default async function auction(){
    const auctionDetallada = await GetAuction("653be2fb5ee549bea86cd45a");

    if(!auctionDetallada){
        return <>SUBASTA NO ENCONTRADA</>;
    }

    return <>
        <NavbarHome></NavbarHome>
        <AuctionDetailed auction={auctionDetallada}></AuctionDetailed>
        <FooterHome></FooterHome>
    </>;
}