//import { AuctionList } from "@/components/auctionList";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import {Profile }from "@/components/profile";
import { GetAddress } from "@/database/address";
//imprt { Auction } from "@/database/auctions";
//import { Profile2 } from "@/components/profile2";
import { GetUser } from "@/database/users";
import { notFound } from "next/navigation";
import {GetAllAuctionsOfBuyer, GetAllAuctionsOfUser } from "@/database/auctions";
import { GetAllBidsOfUser } from "@/database/bid";
import { GetAllReviewsOfUser, GetAverageScoreOfUser } from "@/database/reviews";

export default async function home() {
    const user = await GetUser("653be37c5ee549bea86cd466");
    const auctions = await GetAllAuctionsOfUser("653be37c5ee549bea86cd466");
    //const address = await GetAddress(user.Address.toHexString());
    const address = await GetAddress("654b4eec02b50741b0ddf897");
    const bids = await GetAllBidsOfUser("653be37c5ee549bea86cd466");
    const auctionsAchieved = await GetAllAuctionsOfBuyer("653be37c5ee549bea86cd466");
    const reviews = await GetAllReviewsOfUser("653be37c5ee549bea86cd466");
    const reviewsScore = await GetAverageScoreOfUser("653be37c5ee549bea86cd466");
    console.log("averageScore: " + reviewsScore);
    
//console.log(auctions?.length);
   if(user===null){
        return notFound();
    }
    if(address===null){
            return <h1>ERROR ADDRESS NULL</h1>;
    }
    if (auctions===null){
        return <h1>ERROR AUCTION NULL</h1>;
    }
    if(bids === null){
        return <h1>ERROR BIDS NULL</h1>;
    }
    if(auctionsAchieved === null){
        return <h1>ERROR AUCTIONS ACHIEVED NULL</h1>;
    }
    if(reviews === null){
        return <h1>ERROR REVIEWS NULL</h1>;
    }
 

    const mappedAuctions = auctions.map(auction => auction.ToJSON());
    //console.log(mappedAuctions);

    const mappedBids = bids.map(bid => bid.ToJSON());
    //console.log(mappedBids);

    const mappedAuctionsAchieved = auctionsAchieved.map(auction => auction.ToJSON());
    const mappedReviews = reviews.map(review => review.ToJSON());
    
    
//
   return <>
        <NavbarHome></NavbarHome>

        <Profile 
            user={user.ToJSON()} 
            address={address.ToJSON()} 
            auctions={mappedAuctions} 
            bids={mappedBids} 
            auctionsAchieved={mappedAuctionsAchieved} 
            reviews={mappedReviews} 
            reviewsScore={reviewsScore} 
            
        ></Profile>

        <FooterHome></FooterHome>
    </>;
}