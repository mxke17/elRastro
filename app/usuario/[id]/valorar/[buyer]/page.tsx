import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { RouteContext } from "@/lib/route";

interface RouteParams {
    id: string
    buyer: string
}

export default async function auction(context: RouteContext<RouteParams>){
    const userID = context.params.id;
    const user = await GetUser(userID);
    const buyerID = context.params.buyer;
    const buyer = await GetUser(buyerID);

    const listaCompradores = await GetBuyersOfUser(userID);
    //console.log("lista");
    //console.log(listaCompradores);
    //console.log(listaCompradores.length);
    

    if(!user){
        return <>USUARIO NO ENCONTRADO</>;
    }
    if(!buyer){
        return <>USUARIO NO ENCONTRADO</>;
    }
    if(!userID){
        return <>USUARIO NO ENCONTRADO</>;
    }
    if(!buyerID){
        return <>VENDEDOR NO ENCONTRADO</>;
    }
    if(!listaCompradores || listaCompradores.length===0){
        return <h1>VENDEDOR NO TIENE VENTAS</h1>;
    }

    const listaCompradoresJSON = listaCompradores.map(user => user.ToJSON());


    listaCompradoresJSON.forEach(element => {
        if(element._id!=buyerID ){
            console.log("no coincide");
            return <h1>VENDEDOR NO COINCIDE</h1>;
        }
        
    });
    

    return <>
        <NavbarHome></NavbarHome>
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", margin: "16px", padding: "16px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
    <div style={{ marginBottom: "16px" }}>
        <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <label style={{ marginBottom: "8px" }} htmlFor="amount">Valoración:</label>
            <input
              style={{
                padding: "10px",
                marginBottom: "16px",
              }}
              type="number"
              id="amount"
              name="amount"
              required
              min={0} // Establecer el valor mínimo
              max={5} // Establecer el valor máximo
            />
            <button style={{ backgroundColor: "green", color: "#fff", padding: "10px", border: "none", borderRadius: "4px", cursor: "pointer", transition: "background-color 0.3s" }} type="submit">Enviar</button>
        </form>
        </div>
    </div>
        <FooterHome></FooterHome>
    </>;
}