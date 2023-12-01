import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { Profile } from "@/components/profile";
import { GetAllUsers, GetUser } from "@/database/users";
import { RouteContext } from "@/lib/route";

interface RouteParams {
    id: string
}

export default async function home(context: RouteContext<RouteParams>) {
    const userID = context.params.id;
    const user = await GetUser(userID);

    if(!user) {
        return <h1>WTF NO HAY</h1>;
    }

    const json = user.ToJSON();

    return <>
        <NavbarHome></NavbarHome>

        <Profile user={json} ></Profile>

        <FooterHome></FooterHome>
    </>;
}


export async function generateStaticParams() {
    const users = (await GetAllUsers()) ?? [];
 
    return users.map((user) => ({
        id: user.ID.toHexString(),
    }));
}


// // This also gets called at build time
// export const getStaticProps = (async (context: GetStaticPropsContext) => {
//     const params = context.params;
//     const id = params?.id as string | undefined;

//     let user = undefined;
//     if (id) {
//         user = await GetUser(id);
//     }

//     return { props: { user } };
// }) satisfies GetStaticProps;

// export const getStaticPaths = (async () => {
//     const users = await GetAllUsers();
//     const paths = users?.map(user => {
//         return {
//             params: {
//                 id: user.ID.toHexString()
//             }
//         };
//     });
//     return {
//         paths: paths ?? [],
//         fallback: true, // false or "blocking"
//     };
// }) satisfies GetStaticPaths;