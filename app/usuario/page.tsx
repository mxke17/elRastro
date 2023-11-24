//import { AuctionList } from "@/components/auctionList";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
//import { Auction } from "@/database/auctions";
import { Profile } from "@/components/profile";
import { User } from "@/database/users";

export default function home() {
    return <>
        <NavbarHome></NavbarHome>


        <Profile user={new User}></Profile>

        <FooterHome></FooterHome>
    </>;
}