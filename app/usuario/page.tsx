//import { AuctionList } from "@/components/auctionList";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import {Profile }from "@/components/profile";
import { GetAddress } from "@/database/address";
//imprt { Auction } from "@/database/auctions";
//import { Profile2 } from "@/components/profile2";
import { GetUser } from "@/database/users";
import { notFound } from "next/navigation";

export default async function home() {
   const user = await GetUser("65510cc12ff250a1f12645c6");
    //const auctions = await GetAllAuctionsOfUser(user.ID.toHexString());
    //const address = await GetAddress(user.Address.toHexString());
    const address = await GetAddress("654b4eec02b50741b0ddf897");
   if(user===null){
        return notFound();
    }
    if(address===null){
            return <h1>ERROR ADDRESS NULL</h1>;
        }

   return <>
        <NavbarHome></NavbarHome>


        <Profile user={user.ToJSON()} address={address.ToJSON()} ></Profile>

        <FooterHome></FooterHome>
    </>;
}