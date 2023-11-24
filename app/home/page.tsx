import { AuctionList } from "@/components/auctionList";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { GetAllAuctions } from "@/database/auctions";

export default async function home(){
    const auctions = await GetAllAuctions(); 

    if (auctions === null){
        return <>
            <NavbarHome></NavbarHome>
            <h3>No hay subastas</h3>
            <FooterHome></FooterHome>
        </>;
    }

    return <>
        <NavbarHome></NavbarHome>
        <AuctionList auctions={auctions}></AuctionList>
        <FooterHome></FooterHome>
    </>;
}