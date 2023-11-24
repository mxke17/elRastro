import { AuctionList } from "@/components/auctionList";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { Auction } from "@/database/auctions";

export default function home(){
    return <>
        <NavbarHome></NavbarHome>
        <AuctionList auctions={[new Auction, new Auction, new Auction]}></AuctionList>
        <FooterHome></FooterHome>
    </>;
}