import { FooterHome } from "@/components/footer";
import { MapSergio } from "@/components/mapSergio";
import { NavbarHome } from "@/components/navbar";
import { GetUser } from "@/database/users";
import { GetAddress } from "@/database/address";
import { RouteContext } from "@/lib/route";
import { notFound } from "next/navigation";
import { GetMap } from "@/database/map";
interface RouteParams {
    id: string
}


export default async function home(context: RouteContext<RouteParams>) {
	const userID = context.params.id;

    const user = await GetUser(userID);
    if (user === null) {
        notFound();
    }
	console.log("user1");
	console.log(user);
	const userJSON = user.ToJSON();
	const address = await GetAddress(userJSON.Direccion);
	console.log("address1");
	console.log(address);
	if(address === null){
		return <h1>ERROR ADDRESS NULL</h1>;
	}
	
    const mapa = await GetMap(address.ID.toHexString());
    console.log("mapa1");
    console.log(mapa);
	if(mapa === null){
		return <h1>ERROR MAPA NULL</h1>;
	}
	console.log("longitud");
	const longitud = Number(mapa.Lon);
	const latitud = Number(mapa.Lat);
	
	console.log(longitud);
	console.log("latitud");
	console.log(latitud);
	
 //address={address.ToJSON()}
	return <>
		<NavbarHome></NavbarHome>
		<p>Aqui tienes la dirección:</p>

		<div style={{width:"100%", height:"500px", backgroundColor:"red"}}>
			<MapSergio  
			
            longitud={longitud}
			latitud={latitud}
			
			></MapSergio>
		</div>
		

		<FooterHome></FooterHome>
	</>;
}

