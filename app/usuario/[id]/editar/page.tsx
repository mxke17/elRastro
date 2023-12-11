import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { GetAllUsers, GetUser } from "@/database/users";
import { RouteContext } from "@/lib/route";
//import { AuctionList } from "@/components/auctionList";
import { GetAddress } from "@/database/address";
//imprt { Auction } from "@/database/auctions";
//import { Profile2 } from "@/components/profile2";
import { notFound } from "next/navigation";
import { EditUser } from "@/components/editProfile";

interface RouteParams {
    id: string
}

export default async function home(context: RouteContext<RouteParams>) {
    const userID = context.params.id;

    const user = await GetUser(userID);
    if (user === null) {
        notFound();
    }
    
    const address = await GetAddress(user.Address.toHexString());
    

    if (address === null) {
        return <h1>ERROR ADDRESS NULL</h1>;
    }
    


    return <>
        <NavbarHome></NavbarHome>

        <EditUser
            user={user.ToJSON()}
            address={address.ToJSON()}
        ></EditUser>

        <FooterHome></FooterHome>
    </>;
}

export async function generateStaticParams() {
    const users = (await GetAllUsers()) ?? [];

    return users.map((user) => ({
        id: user.ID.toHexString(),
    }));
}