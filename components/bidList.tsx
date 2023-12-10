import { Bid, BidJSON } from "@/database/bid";
import { BidMini } from "./bidMini";
import { GetUser } from "@/database/users";

interface bidListProps {
    bids: BidJSON[];
}

export async function BidList(props: bidListProps) {
    

    return <>
        <table style={{ width: "100%" }}>
            <tbody>
                {props.bids.map(async (bid) => (
                    
                    <tr key={bid._id}>
                        <td>
                            <BidMini userJSON={await GetUser(bid.Postor)} bidJSON={bid}></BidMini>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>;
}

