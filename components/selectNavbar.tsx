"use client";

import { useSession } from "next-auth/react";
import { NavbarHome } from "./navbar";
import { NavbarLite } from "./navbarLite";

export function SelectNavbar(){

    const { data: session } = useSession();

   


    if (session?.user) {
        console.log("SelectNavbar1");
        console.log(session?.user?.email);
        console.log(session?.user?.name);
        console.log(session?.user?.image);
        return <NavbarHome></NavbarHome>;
    } else {
        console.log("SelectNavbar2");
        console.log(session?.user?.email);
        console.log(session?.user?.name);
        console.log(session?.user?.image);
        return <NavbarLite></NavbarLite>;
    }

}