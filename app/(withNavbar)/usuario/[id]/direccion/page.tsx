import { Map } from "@/components/map";
import { GetUser } from "@/database/users";
import { GetAddress } from "@/database/address";
import { RouteContext } from "@/lib/route";
import { notFound } from "next/navigation";
import { GetMap } from "@/database/map";

export const dynamic = "force-dynamic";

interface RouteParams {
    id: string
}

export default async function home(context: RouteContext<RouteParams>) {
	const userID = context.params.id;

    const user = await GetUser(userID);
    if (user === null) {
        notFound();
    }

	const userJSON = user.ToJSON();
	const address = await GetAddress(userJSON.Direccion || "");
	if(address === null){
		notFound();
	}
	
    const mapa = await GetMap(address.ID.toHexString());
	if(mapa === null){
		notFound();
	}

	const longitud = Number(mapa.lon);
	const latitud = Number(mapa.lat);
	
	return <>
		<p>Aqui tienes la dirección:</p>

		<div style={{width:"100%", height:"500px", backgroundColor:"red"}}>
			<Map longitud={longitud} latitud={latitud}></Map>
		</div>
	</>;
}

