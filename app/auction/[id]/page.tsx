import { AuctionDetailed, AuctionMini } from "@/components/auction";
import { BidMasAlta } from "@/components/bid";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { Auction, GetAuction } from "@/database/auctions";
import { GetHighestBidForAuction } from "@/database/bid";
import { notFound } from "next/navigation";
import { Button, Col, Container, Row } from "react-bootstrap";

export default async function auction(){
    const auctionDetallada = await GetAuction("653be2fb5ee549bea86cd459");

    if(!auctionDetallada){
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
                <AuctionDetailed auction={auctionDetallada}></AuctionDetailed>
                Chooollo a la vista ¡Sé el primero en pujar!
                <Button href="/auction/{[auctionDetallada.ID.toString()]}">PUJAR</Button>
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
                <AuctionDetailed auction={auctionDetallada}></AuctionDetailed>
                <BidMasAlta bid={bidMasAlta}></BidMasAlta>
                <Button href="/auction/{[auctionDetallada.ID.toString()]}">PUJAR</Button>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>

        <FooterHome></FooterHome>
    </>;
}