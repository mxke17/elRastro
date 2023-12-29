import { Profile } from "@/components/profile";
import { GetAllUsers, GetUser } from "@/database/users";
import { RouteContext } from "@/lib/route";
//import { AuctionList } from "@/components/auctionList";
import { GetAddress } from "@/database/address";
//imprt { Auction } from "@/database/auctions";
//import { Profile2 } from "@/components/profile2";
import { notFound } from "next/navigation";
import { GetAllAuctionsOfBuyer, GetAllAuctionsOfUser } from "@/database/auctions";
import { GetAllBidsOfUser } from "@/database/bid";
import { GetAllReviewsOfUser, GetAverageScoreOfUser } from "@/database/reviews";

export const dynamic = "force-dynamic";

interface RouteParams {
    id: string
}

export default async function home(context: RouteContext<RouteParams>) {
    const userID = context.params.id;

    const user = await GetUser(userID);
    if (user === null) {
        notFound();
    }
    const auctions = await GetAllAuctionsOfUser(userID);
    let address = null;
    if (user.Address != null) {
        address = await GetAddress(user.Address.toHexString());
        
    }
    if (address === null) {
        return <h1>ERROR ADDRESS NULL</h1>;
    }
    const bids = await GetAllBidsOfUser(userID);
    const auctionsAchieved = await GetAllAuctionsOfBuyer(userID);
    const reviews = await GetAllReviewsOfUser(userID);
    const reviewsScore = await GetAverageScoreOfUser(userID);

    let mappedAuctions = null;
    if (auctions != null) {
        mappedAuctions = auctions.map(auction => auction.ToJSON());

    } let mappedBids = null;
    if (bids != null) {
        mappedBids = bids.map(bid => bid.ToJSON());
    } let mappedAuctionsAchieved = null;
    if (auctionsAchieved != null) {
        mappedAuctionsAchieved = auctionsAchieved.map(auction => auction.ToJSON());
    } let mappedReviews = null;
    if (reviews != null) {
        mappedReviews = reviews.map(review => review.ToJSON());
    }



    return <>
        <Profile
            user={user.ToJSON()}
            address={address.ToJSON() ?? null}
            auctions={mappedAuctions ?? []}
            bids={mappedBids ?? []}
            auctionsAchieved={mappedAuctionsAchieved ?? []}
            reviews={mappedReviews ?? []}
            reviewsScore={reviewsScore ?? 0}
        ></Profile>
    </>;
}

export async function generateStaticParams() {
    const users = (await GetAllUsers()) ?? [];

    return users.map((user) => ({
        id: user.ID.toHexString(),
    }));
}