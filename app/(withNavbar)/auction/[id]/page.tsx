import { AuctionDetailed } from "@/components/auction";
import { BidMasAlta } from "@/components/bid";
import { GetAuction } from "@/database/auctions";
import { GetHighestBidForAuction } from "@/database/bid";
import { GetUser } from "@/database/users";
import { RouteContext } from "@/lib/route";
import { notFound } from "next/navigation";
import { Button, Col, Container, Row } from "react-bootstrap";

export const dynamic = "force-dynamic";

interface RouteParams {
    id: string
}

export default async function auction(context: RouteContext<RouteParams>){
   
    const auctionDetallada = await GetAuction(context.params.id);

    if(!auctionDetallada){
        return notFound();
    }

    const usuario = await GetUser(auctionDetallada.Seller.toHexString());

    if(!usuario){
        return notFound();
    }

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
        </Container>
    </>;
    }

    return <>
        <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                <AuctionDetailed auction={auctionDetallada.ToJSON()} usuario={usuario.ToJSON()}></AuctionDetailed>
                <BidMasAlta bid={bidMasAlta}></BidMasAlta>
                <Button href={`/auction/${auctionDetallada.ID.toHexString()}/pujar`}>PUJAR</Button>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    </>;
}