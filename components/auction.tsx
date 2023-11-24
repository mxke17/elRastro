import { Auction } from "@/database/auctions";

interface auctionMiniProps{
    auction: Auction;
}

export function AuctionMini(props: auctionMiniProps){
    const auction = props.auction;

    return <>
        <h2>{auction.Title}</h2>
        <p>{auction.Description}</p>
    </>;
}