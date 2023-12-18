"use client";

import { useSession } from "next-auth/react";
import { NavbarHome } from "./navbar";
import { NavbarLite } from "./navbarLite";

export function SelectNavbar(){

    const { data: session } = useSession();

    if (session?.user) {
        return <NavbarHome></NavbarHome>;
    } else {
        return <NavbarLite></NavbarLite>;
    }

}