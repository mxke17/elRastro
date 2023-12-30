import { ButtonPaypal } from "@/components/paypalButton";
import { GetAuction } from "@/database/auctions";
import { GetUserByEmail } from "@/database/users";
import { RouteContext } from "@/lib/route";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

interface RouteParams {
    id: string
    cantidad: string
}

export default async function auction(context: RouteContext<RouteParams>){
    const auctionDetallada = await GetAuction(context.params.id); 
    if(!auctionDetallada){
        return <>SUBASTA NO ENCONTRADA</>;
    }
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
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", margin: "16px", padding: "16px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", alignItems: "center" }}>
        <h1>Metodos de Pago<br/><br/></h1>

        <ButtonPaypal subasta={auctionDetallada.ID.toHexString()} user={user.ID.toHexString()} cantidad={Number.parseFloat(context.params.cantidad)}></ButtonPaypal>
    </div>
    </>;
}