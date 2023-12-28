import { GetUserByEmail, CreateUser } from "@/database/users";
import { NavbarHome } from "./navbar";
import { NavbarLite } from "./navbarLite";
import { getServerSession } from "next-auth";
import { CreateAddress, GetAddressByProvincia } from "@/database/address";

export async function SelectNavbar(){
    const session = await getServerSession();
    const sessionUser = session?.user;

    if (sessionUser) {
        if(!sessionUser.email || !sessionUser.image || !sessionUser.name) {
            return <h1>Error fetching user info from session.</h1>;
        }
    
        const user = await GetUserByEmail(sessionUser.email);
    
        if(!user){
            await CreateAddress({
                Localidad: "",
                Provincia: sessionUser.name,
                Calle: " ",
                Numero: 0,
                ["Codigo postal"]: " ",
                Pais: ""
            });
            const newAddress = await GetAddressByProvincia(sessionUser.name);
            const newAddresID = newAddress?.ID.toHexString();
            await CreateUser({
                ["Nombre usuario"]: sessionUser.name,
                Email: sessionUser.email,
                Foto: sessionUser.image,
                Direccion: newAddresID
            });
        }


        const newUser = await GetUserByEmail(sessionUser.email);
        console.log(newUser);
        const userID = newUser?.ID.toHexString();
       
        return <NavbarHome userID={userID}></NavbarHome>;
    } else {

        return <NavbarLite></NavbarLite>;
    }

}


