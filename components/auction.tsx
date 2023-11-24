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



export function AuctionDetailed(props: auctionMiniProps){
    const auction = props.auction;

    return <>
         <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        margin: "16px",
        padding: "16px",
        backgroundColor: "#fff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <h2>{auction.Title}</h2>
        <p>{auction.Description}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>Precio inicial: {auction.InitialPrice}</p>
          <p>Fecha de cierre: {auction.Deadline.toString()}</p>
        </div>
        <p>{auction.Picture}</p>
      </div>
    </div>

    </>;
}

