import { Profile } from "@/components/profile";
import { GetAllUsers, GetUser, GetUserByEmail } from "@/database/users";
import { RouteContext } from "@/lib/route";
import { GetAddress } from "@/database/address";
import { notFound } from "next/navigation";
import { GetAllAuctionsOfBuyer, GetAllAuctionsOfUser } from "@/database/auctions";
import { GetAllBidsOfUser, GetHighestBidForAuction } from "@/database/bid";
import { GetAllReviewsOfUser, GetAverageScoreOfUser } from "@/database/reviews";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

interface RouteParams {
    id: string
}

export default async function home(context: RouteContext<RouteParams>) {
    const session = await getServerSession();
    const sessionUser = session?.user;

    if (!sessionUser) {
        return <></>;
    }

    if(!sessionUser.email || !sessionUser.image || !sessionUser.name) {
        return <h1>Error fetching user info from session.</h1>;
    }

    const user = await GetUserByEmail(sessionUser.email);

    if(!user) {
        return <></>;
    }

    const userID = context.params.id;

    const profileUser = await GetUser(userID);
    if (profileUser === null) {
        notFound();
    }
    const auctions = await GetAllAuctionsOfUser(userID);
    let address = null;
    if (profileUser.Address != null) {
        address = await GetAddress(profileUser.Address.toHexString());
        
    }
    if (address === null) {
        return <h1>ERROR ADDRESS NULL</h1>;
    }
    const bids = await GetAllBidsOfUser(userID);
    const auctionsAchieved = await GetAllAuctionsOfBuyer(userID);
    const reviews = await GetAllReviewsOfUser(userID);
    const reviewsScore = await GetAverageScoreOfUser(userID);

    let mappedAuctions = null;
    let showReviewButton = false;
    if (auctions != null) {
        mappedAuctions = auctions.map(auction => auction.ToJSON());

        let numWonAuctions = 0;
        for (let i = 0; i < auctions.length; i++) {
            const auction = auctions[i];

            if(auction.Deadline < new Date()) {
                const bid = await GetHighestBidForAuction(auction.ID.toHexString());
                if(bid?.Bidder.toHexString() === user.ID.toHexString()) {
                    numWonAuctions += 1;
                }
            }
        }

        let numReviews = 0;
        if(reviews) {
            numReviews = reviews.filter(x => x.Buyer.toHexString() === user.ID.toHexString()).length;
        }

        showReviewButton = numReviews < numWonAuctions;
    }

    let mappedBids = null;
    if (bids != null) {
        mappedBids = bids.map(bid => bid.ToJSON());
    }
    
    let mappedAuctionsAchieved = null;
    if (auctionsAchieved != null) {
        mappedAuctionsAchieved = auctionsAchieved.map(auction => auction.ToJSON());
    }
    
    let mappedReviews = null;
    if (reviews != null) {
        mappedReviews = reviews.map(review => review.ToJSON());
    }

    return <>
        <Profile
            user={profileUser.ToJSON()}
            address={address.ToJSON() ?? null}
            auctions={mappedAuctions ?? []}
            bids={mappedBids ?? []}
            auctionsAchieved={mappedAuctionsAchieved ?? []}
            reviews={mappedReviews ?? []}
            reviewsScore={reviewsScore ?? 0}
            showReviewButton={showReviewButton}
        ></Profile>
    </>;
}

export async function generateStaticParams() {
    const users = (await GetAllUsers()) ?? [];

    return users.map((user) => ({
        id: user.ID.toHexString(),
    }));
}