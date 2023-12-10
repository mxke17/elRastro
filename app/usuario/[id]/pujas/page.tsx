
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
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
import { ProfilePujas } from "@/components/profilePujas";


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
    const address = await GetAddress(user.Address.toHexString());
    const bids = await GetAllBidsOfUser(userID);
    const auctionsAchieved = await GetAllAuctionsOfBuyer(userID);
    const reviews = await GetAllReviewsOfUser(userID);
    const reviewsScore = await GetAverageScoreOfUser(userID);

    if (address === null) {
        return <h1>ERROR ADDRESS NULL</h1>;
    }
    if (auctions === null) {
        return <h1>ERROR AUCTION NULL</h1>;
    }
    if (bids === null) {
        return <h1>ERROR BIDS NULL</h1>;
    }
    if (auctionsAchieved === null) {
        return <h1>ERROR AUCTIONS ACHIEVED NULL</h1>;
    }
    if (reviews === null) {
        return <h1>ERROR REVIEWS NULL</h1>;
    }

    const mappedAuctions = auctions.map(auction => auction.ToJSON());
    const mappedBids = bids.map(bid => bid.ToJSON());
    const mappedAuctionsAchieved = auctionsAchieved.map(auction => auction.ToJSON());
    const mappedReviews = reviews.map(review => review.ToJSON());

    return <>
        <NavbarHome></NavbarHome>

        <ProfilePujas
            user={user.ToJSON()}
            address={address.ToJSON()}
            auctions={mappedAuctions}
            bids={mappedBids}
            auctionsAchieved={mappedAuctionsAchieved}
            reviews={mappedReviews}
            reviewsScore={reviewsScore}
        ></ProfilePujas>
        

        <FooterHome></FooterHome>
    </>;
}

export async function generateStaticParams() {
    const users = (await GetAllUsers()) ?? [];

    return users.map((user) => ({
        id: user.ID.toHexString(),
    }));
}