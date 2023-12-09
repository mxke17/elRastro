import { FooterHome } from "@/components/footer";
import { MapaDetallado } from "@/components/mapas";
import { NavbarHome } from "@/components/navbar";
import { Profile } from "@/components/profile";
import { GetAddress } from "@/database/address";
import { GetAllUsers, GetUser } from "@/database/users";
import { RouteContext } from "@/lib/route";
import { Mapa } from '@/components/Map/Mapa';

interface RouteParams {
    id: string
}

export default async function home(context: RouteContext<RouteParams>) {
    const userID = context.params.id;
    const user = await GetUser(userID);

    if(!user) {
        return <h1>Usuario no encontrado</h1>;
    }

    const direccion =  await GetAddress(user.Address.toHexString());

    if(!direccion) {
        return <h1>Usuario sin direccion</h1>;
    }

    return <>
        <NavbarHome></NavbarHome>
        <div>
            <h1>Hola soy un mapa</h1>
            <Mapa></Mapa>
        </div>
        <FooterHome></FooterHome>
    </>;
}