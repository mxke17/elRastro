import { GetAuction } from "@/database/auctions";
import { RouteContext } from "@/lib/route";
import { NewBid } from "@/components/bid";
import { GetUserByEmail } from "@/database/users";
import { getServerSession } from "next-auth";
import { GetHighestBidForAuction } from "@/database/bid";

export const dynamic = "force-dynamic";

interface RouteParams {
    id: string
}

export default async function auction(context: RouteContext<RouteParams>){
    const auctionDetallada = await GetAuction(context.params.id); 

    if(!auctionDetallada){
        return <>SUBASTA NO ENCONTRADA</>;
    }

    const bidMasAlta = await GetHighestBidForAuction(auctionDetallada.ID.toHexString());
    const precio = bidMasAlta?.Quantity || auctionDetallada.InitialPrice;

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

    return <>
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", margin: "16px", padding: "16px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
            <NewBid subasta={auctionDetallada.ID.toHexString()} user={user.ID.toHexString()} precioMinimo={precio}></NewBid>
        </div>
    </>;
}