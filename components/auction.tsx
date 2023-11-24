"use client";
import { Auction } from "@/database/auctions";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

interface auctionMiniProps {
    auction: Auction;
}

export function AuctionMini(props: auctionMiniProps) {
    const auction = props.auction;

    return <>
        <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                    <Card>
                        <Image src="/pruebaFoto.jpg"/>
                        <Card.Body>
                            <Card.Header>{auction.Title}</Card.Header>
                            <Card.Text>{auction.Description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    </>;
}