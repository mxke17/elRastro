import { Auction } from "@/database/auctions";
import { AuctionMini } from "./auction";

interface auctionListProps {
    auctions: Auction[];
}

export function AuctionList(props: auctionListProps) {
    return <>
        <table style={{width:"100%"}}>
            <tbody>
                {props.auctions.map((auction) => (
                    <tr key={auction.ID.toHexString()}>
                        <td>
                            <AuctionMini auction={auction}></AuctionMini>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>;
}