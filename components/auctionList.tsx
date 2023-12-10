import { AuctionJSON } from "@/database/auctions";
import { AuctionMini } from "./auction";

interface auctionListProps {
    auctions: AuctionJSON[];
}

export function AuctionList(props: auctionListProps) {
    
    return <>
        <table style={{width:"100%"}}>
            <tbody>
                {props.auctions.map((auction) => (
                    <tr key={auction._id}>
                        <td>
                            <AuctionMini auction={auction}></AuctionMini>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>;
}