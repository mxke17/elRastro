import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { Profile } from "@/components/profile";
import { GetAllUsers, GetUser } from "@/database/users";
import { RouteContext } from "@/lib/route";
//import { AuctionList } from "@/components/auctionList";
import { GetAddress } from "@/database/address";
//imprt { Auction } from "@/database/auctions";
//import { Profile2 } from "@/components/profile2";
import { notFound } from "next/navigation";
import {GetAllAuctionsOfBuyer, GetAllAuctionsOfUser } from "@/database/auctions";
import { GetAllBidsOfUser } from "@/database/bid";
import { GetAllReviewsOfUser, GetAverageScoreOfUser } from "@/database/reviews";

interface RouteParams {
    id: string
}

export default async function home(context: RouteContext<RouteParams>) {
    const userID = context.params.id;
    
    const user = await GetUser(userID);
    if(user===null){
        return notFound();
    }
    const auctions = await GetAllAuctionsOfUser(userID);
    const address = await GetAddress(user.Address.toHexString());
    const bids = await GetAllBidsOfUser(userID);
    const auctionsAchieved = await GetAllAuctionsOfBuyer(userID);
    const reviews = await GetAllReviewsOfUser(userID);
    const reviewsScore = await GetAverageScoreOfUser(userID);
    
    
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

export async function generateStaticParams() {
    const users = (await GetAllUsers()) ?? [];
 
    return users.map((user) => ({
        id: user.ID.toHexString(),
    }));
}


// // This also gets called at build time
// export const getStaticProps = (async (context: GetStaticPropsContext) => {
//     const params = context.params;
//     const id = params?.id as string | undefined;

//     let user = undefined;
//     if (id) {
//         user = await GetUser(id);
//     }

//     return { props: { user } };
// }) satisfies GetStaticProps;

// export const getStaticPaths = (async () => {
//     const users = await GetAllUsers();
//     const paths = users?.map(user => {
//         return {
//             params: {
//                 id: user.ID.toHexString()
//             }
//         };
//     });
//     return {
//         paths: paths ?? [],
//         fallback: true, // false or "blocking"
//     };
// }) satisfies GetStaticPaths;