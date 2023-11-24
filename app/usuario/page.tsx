//import { AuctionList } from "@/components/auctionList";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
//import { Auction } from "@/database/auctions";
import { Profile } from "@/components/profile";
import { GetUser } from "@/database/users";

export default async function home() {
   const user = await GetUser("653be37c5ee549bea86cd462");
   if(user===null){
         return <h1>ERROR</h1>;
    }
   return <>
        <NavbarHome></NavbarHome>


        <Profile user={user}></Profile>

        <FooterHome></FooterHome>
    </>;
}