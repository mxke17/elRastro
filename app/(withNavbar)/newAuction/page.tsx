import { NewAuction } from "@/components/newAuction";
import { GetUserByEmail } from "@/database/users";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";


export default async function newAuction() {
    const session = await getServerSession();

    const sessionUser = session?.user;

    if (!sessionUser) {
        return <></>;
    }

    if(!sessionUser.email || !sessionUser.image || !sessionUser.name) {
        return <h1>Error fetching user info from session.</h1>;
    }

    const user = await GetUserByEmail(sessionUser.email);

    if(!user) {
        return <></>;
    }

    return <>
        <NewAuction userID={user.ID.toHexString()}></NewAuction>
    </>;
}