import { AuctionList } from "@/components/auctionList";
import { FooterHome } from "@/components/footer";
import { NavbarHome } from "@/components/navbar";
import { GetAllAuctions } from "@/database/auctions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default async function home(){
    const auctions = await GetAllAuctions(); 

    if (auctions === null){
        return <>
            <NavbarHome></NavbarHome>
            <h3>No hay subastas</h3>
            <FooterHome></FooterHome>
        </>;
    }

    return <>
        <NavbarHome></NavbarHome>
        <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                    <AuctionList auctions={auctions}></AuctionList>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
        <FooterHome></FooterHome>
    </>;
}