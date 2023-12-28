import { GetUserByEmail, CreateUser } from "@/database/users";
import { NavbarHome } from "./navbar";
import { NavbarLite } from "./navbarLite";
import { getServerSession } from "next-auth";

export async function SelectNavbar(){
    const session = await getServerSession();
    const sessionUser = session?.user;

    if (sessionUser) {
        if(!sessionUser.email || !sessionUser.image || !sessionUser.name) {
            return <h1>Error fetching user info from session.</h1>;
        }
    
        const user = await GetUserByEmail(sessionUser.email);
    
        if(!user){
            await CreateUser({
                ["Nombre usuario"]: sessionUser.name,
                Email: sessionUser.email,
                Foto: sessionUser.image
            });
        }

        return <NavbarHome></NavbarHome>;
    } else {

        return <NavbarLite></NavbarLite>;
    }

}