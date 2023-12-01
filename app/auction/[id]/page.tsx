import { AuctionDetailed, AuctionMini } from "@/components/auction";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { Auction, GetAuction } from "@/database/auctions";
import { GetHighestBidForAuction } from "@/database/bid";

export default async function auction(){
    const auctionDetallada = await GetAuction("653be2fb5ee549bea86cd45a");

    if(!auctionDetallada){
        return <>SUBASTA NO ENCONTRADA</>;
    }

    await GetHighestBidForAuction(auctionDetallada.ID.toHexString());

    return <>
        <NavbarHome></NavbarHome>
        <AuctionDetailed auction={auctionDetallada}></AuctionDetailed>
        
        PUJA MÁS ALTA: AQUI VA LA PUJA MÁS ALTA Y POR TANTO EL QUE SE LA VA A LLEVAR ESPABILA Y COMPRALO ANTES TÚ
        <FooterHome></FooterHome>
    </>;
}