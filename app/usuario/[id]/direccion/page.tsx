

import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { MapSergio } from "@/components/mapSergio";
import { GetAllUsers, GetUser } from "@/database/users";
import { RouteContext } from "@/lib/route";
//import { AuctionList } from "@/components/auctionList";
import { GetAddress } from "@/database/address";

//interface RouteParams {
    //id: string
//}
//context: RouteContext<RouteParams>
export default  function home() {
  //  const userID = context.params.id;
    
    
   
    
//
   return <>
        <NavbarHome></NavbarHome>
        <p>hola</p>

       <div> <MapSergio></MapSergio></div>

        <FooterHome></FooterHome>
    </>;
}

