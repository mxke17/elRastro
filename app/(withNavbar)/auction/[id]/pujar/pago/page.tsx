import { ButtonPaypal } from "@/components/paypalButton";
import { GetAuction } from "@/database/auctions";
import { RouteContext } from "@/lib/route";

export const dynamic = "force-dynamic";

interface RouteParams {
    id: string
}

export default async function auction(context: RouteContext<RouteParams>){
    const auctionDetallada = await GetAuction(context.params.id); 

    if(!auctionDetallada){
        return <>SUBASTA NO ENCONTRADA</>;
    }

    return <>
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", margin: "16px", padding: "16px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", alignItems: "center" }}>
        <h1>Metodos de Pago<br/><br/></h1>

        <ButtonPaypal></ButtonPaypal>
    </div>
    </>;
}