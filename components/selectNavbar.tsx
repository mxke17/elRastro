import { GetUserByEmail, CreateUser } from "@/database/users";
import { NavbarHome } from "./navbar";
import { NavbarLite } from "./navbarLite";
import { getServerSession } from "next-auth";
import { CreateAddress } from "@/database/address";

export async function SelectNavbar(){
    const session = await getServerSession();
    const sessionUser = session?.user;

    if (sessionUser) {
        if(!sessionUser.email || !sessionUser.image || !sessionUser.name) {
            return <h1>Error fetching user info from session.</h1>;
        }
    
        const user = await GetUserByEmail(sessionUser.email);
    
        let userID;

        if(!user){
            const newAddressInfo = await CreateAddress({
                Localidad: "",
                Provincia: "",
                Calle: "",
                Numero: 0,
                ["Codigo postal"]: "",
                Pais: ""
            });
            const addressID = newAddressInfo.id;
            const newUserInfo = await CreateUser({
                ["Nombre usuario"]: sessionUser.name,
                Email: sessionUser.email,
                Foto: sessionUser.image,
                Direccion: addressID
            });

            userID = newUserInfo.id;
        } else {
            userID = user.ID.toHexString();
        }
       
        return <NavbarHome userID={userID}></NavbarHome>;
    } else {

        return <NavbarLite></NavbarLite>;
    }

}


