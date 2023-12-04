//import { AuctionList } from "@/components/auctionList";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import {Profile }from "@/components/profile";
import { GetAddress } from "@/database/address";
//imprt { Auction } from "@/database/auctions";
//import { Profile2 } from "@/components/profile2";
import { GetUser } from "@/database/users";
import { notFound } from "next/navigation";
import auction from "../auction/[id]/page";
import {GetAllAuctionsOfUser } from "@/database/auctions";
import { GetAllBidsOfUser } from "@/database/bid";

export default async function home() {
    const user = await GetUser("65510cc12ff250a1f12645c6");
    const auctions = await GetAllAuctionsOfUser("653be37c5ee549bea86cd466");
    //const address = await GetAddress(user.Address.toHexString());
    const address = await GetAddress("654b4eec02b50741b0ddf897");
    const bids = await GetAllBidsOfUser("653be37c5ee549bea86cd466");
    
    console.log(auctions?.length);
   if(user===null){
        return notFound();
    }
    if(address===null){
            return <h1>ERROR ADDRESS NULL</h1>;
    }
    if (auctions===null){
        return <h1>ERROR AUCTION NULL</h1>;
    }
    const mappedAuctions = auctions.map(auction => auction.ToJSON());
      console.log(mappedAuctions);
//
   return <>
        <NavbarHome></NavbarHome>

    
        <Profile user={user.ToJSON()} address={address.ToJSON()} auctions={mappedAuctions}  ></Profile>

        <FooterHome></FooterHome>
    </>;
}