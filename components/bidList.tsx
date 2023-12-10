import {  BidJSON } from "@/database/bid";
import { BidMini } from "./bidMini";
import { GetUser, UserJSON } from "@/database/users";
import { AuctionJSON, GetAuction } from "@/database/auctions";


interface bidListProps {
    bids: BidJSON[];
}

interface BidData {
    bid: BidJSON;
    user: UserJSON;
    auction: AuctionJSON;
}

export async function BidList(props: bidListProps) {
    const listaData: BidData[]=[];
    for (let i = 0; i < props.bids.length; i++) {
        const auction = await GetAuction(props.bids[i].Subasta);
        const user = await GetUser(props.bids[i].Postor);
        if(auction===null){
            return <h1>ERROR AUCTION NULL</h1>;
        }
        if(user===null){
            return <h1>ERROR USER NULL</h1>;
        }

        listaData.push({
            bid: props.bids[i],
            auction: auction?.ToJSON(),
            user: user?.ToJSON()
        });

    }

    return <>
        <table style={{ width: "100%" }}>
            <tbody>
                {listaData.map( (bid) => (
                    
                    <tr key={bid.bid._id}>
                        <td>
                            <BidMini auctionJSON={bid.auction } userJSON={bid.user} bidJSON={bid.bid}></BidMini>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>;
}

