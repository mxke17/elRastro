import { Auction } from "@/database/auctions";
import { AuctionMini } from "./auction";

interface auctionListProps{
    auctions: Auction[];
}

export function AuctionList(props: auctionListProps){
    return <>
        <ul>
            {
                props.auctions.map(auction => {
                    return <li key={auction.id.toHexString()}><AuctionMini auction={auction}></AuctionMini></li>;
                })
            }
        </ul>
    </>;
}