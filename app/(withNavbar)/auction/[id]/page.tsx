import { AuctionDetailed } from "@/components/auction";
import { BidMasAlta } from "@/components/bid";
import { HuellaCarbono } from "@/components/huellaCarbono";
import { GetAddress } from "@/database/address";
import { GetAuction } from "@/database/auctions";
import { GetHighestBidForAuction } from "@/database/bid";
import { GetMap } from "@/database/map";
import { GetUser, GetUserByEmail } from "@/database/users";
import { RouteContext } from "@/lib/route";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { Button, Col, Container, Row } from "react-bootstrap";

export const dynamic = "force-dynamic";

interface RouteParams {
    id: string
}

export default async function auction(context: RouteContext<RouteParams>){
   
    const session = await getServerSession();
    const sessionUser = session?.user;

    const auctionDetallada = await GetAuction(context.params.id);
    

    if(!auctionDetallada){
        return notFound();
    }

    const usuario = await GetUser(auctionDetallada.Seller.toHexString());

    if(!usuario){
        return notFound();
    }

    const userJSON = usuario.ToJSON();
	const address = await GetAddress(userJSON.Direccion || "");
	if(address === null){
		notFound();
	}
	
    const mapa = await GetMap(address.ID.toHexString());
	if(mapa === null){
		notFound();
	}

	const longitud = Number(mapa.lon);
	const latitud = Number(mapa.lat);

    const bidMasAlta = await GetHighestBidForAuction(auctionDetallada.ID.toHexString());

    if (auctionDetallada.Deadline.getTime() < Date.now() && bidMasAlta?.Bidder.toHexString() === usuario.ID.toHexString()) {
        return <div>
            <Container fluid="md">
                <Row>
                    <Col xs={1}></Col>
                    <Col>
                        <AuctionDetailed auction={auctionDetallada.ToJSON()} usuario={usuario.ToJSON()}></AuctionDetailed>
                        <p>Subasta finalizada! Enhorabuena, has ganado!!</p>
                        <Button href={`/usuario/${usuario.ID}/valorar/${bidMasAlta?.Bidder.toHexString()}`}>Valorar al vendedor</Button>
                        <p></p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
            </Container>
        </div>;

    }

    if (auctionDetallada.Deadline.getTime() < Date.now()) {
        return <div>
            <Container fluid="md">
                <Row>
                    <Col xs={1}></Col>
                    <Col>
                        <AuctionDetailed auction={auctionDetallada.ToJSON()} usuario={usuario.ToJSON()}></AuctionDetailed>
                        <p>Subasta finalizada</p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
            </Container>
        </div>;

    }


    if(!bidMasAlta){
        return <>
        <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                <AuctionDetailed auction={auctionDetallada.ToJSON()} usuario={usuario.ToJSON()} ></AuctionDetailed>
                Chooollo a la vista ¡Sé el primero en pujar!<br></br>
                <Button href={`/auction/${auctionDetallada.ID.toHexString()}/pujar`}>PUJAR</Button>
                </Col>
                <Col xs={1}></Col>
            </Row>
            <div style={{width:"100%", height:"500px", backgroundColor:"red"}}>
			<Map longitud={longitud} latitud={latitud}></Map>
		</div>
        </Container>
    </>;
    }
    const origen = usuario.Address?.toHexString();
    
    if(!sessionUser || !sessionUser.email || !sessionUser.image || !sessionUser.name) {
        return <>
        <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                <AuctionDetailed auction={auctionDetallada.ToJSON()} usuario={usuario.ToJSON()}></AuctionDetailed>
                <BidMasAlta bid={bidMasAlta}></BidMasAlta>
                </Col>
                <Col xs={1}></Col>
            </Row>
            <div style={{width:"100%", height:"500px", backgroundColor:"red"}}>
			<Map longitud={longitud} latitud={latitud}></Map>
		</div>
        </Container>
    </>;
    }

    const user = await GetUserByEmail(sessionUser.email);
    const destino = user?.Address?.toHexString();
    return <>
        <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                <AuctionDetailed auction={auctionDetallada.ToJSON()} usuario={usuario.ToJSON()}></AuctionDetailed>
                <BidMasAlta bid={bidMasAlta}></BidMasAlta>
                <HuellaCarbono origen = {origen} destino = {destino}></HuellaCarbono>
                <Button href={`/auction/${auctionDetallada.ID.toHexString()}/pujar`}>PUJAR</Button>
                </Col>
                <Col xs={1}></Col>
            </Row>
            <div style={{width:"100%", height:"500px", backgroundColor:"red"}}>
			<Map longitud={longitud} latitud={latitud}></Map>
		</div>
        </Container>
    </>;
}