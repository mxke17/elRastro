import { AuctionDetailed, AuctionMini } from "@/components/auction";
import { BidMasAlta } from "@/components/bid";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { Auction, GetAuction } from "@/database/auctions";
import { GetHighestBidForAuction } from "@/database/bid";
import { GetAllUsers, GetUser } from "@/database/users";
import { RouteContext } from "@/lib/route";
import { notFound } from "next/navigation";
import { Button, Col, Container, Row } from "react-bootstrap";

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

    if(!bidMasAlta){
        return <>
        <NavbarHome></NavbarHome>

        <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                <AuctionDetailed auction={auctionDetallada} usuario={usuario} ></AuctionDetailed>
                Chooollo a la vista ¡Sé el primero en pujar!<br></br>
                <Button href={`/auction/${auctionDetallada.ID.toHexString()}/pujar`}>PUJAR</Button>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>

        <FooterHome></FooterHome>
    </>;
    }

    return <>
        <NavbarHome></NavbarHome>

        <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                <AuctionDetailed auction={auctionDetallada} usuario={usuario}></AuctionDetailed>
                <BidMasAlta bid={bidMasAlta}></BidMasAlta>
                <Button href={`/auction/${auctionDetallada.ID.toHexString()}/pujar`}>PUJAR</Button>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>

        <FooterHome></FooterHome>
    </>;
}