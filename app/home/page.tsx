import { AuctionList } from "@/components/auctionList";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { GetAllAuctions } from "@/database/auctions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Filter } from "@/components/filter";

export default async function home(){
    const auctions = await GetAllAuctions(); 

    if (auctions === null){
        return <>
            <NavbarHome></NavbarHome>
            <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                    <h4>Actualmente no existen subastas disponibles</h4>
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
                    <Filter></Filter>
                    <AuctionList auctions={auctions}></AuctionList>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
        <FooterHome></FooterHome>
    </>;
}