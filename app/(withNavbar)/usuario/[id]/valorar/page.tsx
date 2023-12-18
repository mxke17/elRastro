import { Review } from "@/components/review";
import { GetUser, GetBuyersOfUser } from "@/database/users";
import { RouteContext } from "@/lib/route";

export const dynamic = "force-dynamic";

interface RouteParams {
    id: string
}

export default async function auction(context: RouteContext<RouteParams>) {
    const sellerID = context.params.id;
    const buyer = await GetUser(sellerID);

    const buyerID = "65510cc12ff250a1f12645c6";
    const user = await GetUser(buyerID);

    const listaCompradores = await GetBuyersOfUser(sellerID);

    if (!user) {
        return <>USUARIO NO ENCONTRADO</>;
    }
    if (!buyer) {
        return <>USUARIO NO ENCONTRADO</>;
    }
    if (!buyerID) {
        return <>USUARIO NO ENCONTRADO</>;
    }
    if (!sellerID) {
        return <>VENDEDOR NO ENCONTRADO</>;
    }
    if (!listaCompradores || listaCompradores.length === 0) {
        return <h1>VENDEDOR NO TIENE VENTAS</h1>;
    }

    const listaCompradoresJSON = listaCompradores.map(user => user.ToJSON());

    listaCompradoresJSON.forEach(element => {
        if (element._id != buyerID) {
            return <h1>VENDEDOR NO COINCIDE</h1>;
        }
    });

    return <>
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", margin: "16px", padding: "16px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ marginBottom: "16px" }}>
                <Review BuyerID={buyerID} SellerID={sellerID} ></Review>
            </div>
        </div>
    </>;
}