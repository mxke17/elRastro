import { AuctionList } from "@/components/auctionList";
import { AuctionFilter, GetAllAuctionsWithSpecificState } from "@/database/auctions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Filter } from "@/components/filter";

export const dynamic = "force-dynamic";

export default async function Home({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params,
    searchParams,
  }: {
    params: never;
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
    const auctionFilter: AuctionFilter = {
        Title: null,
        MinPrice: null,
        MaxPrice: null
    };

    if(searchParams) {
        const title = searchParams["title"];
        if(title && typeof(title) === "string" && title.length > 0) {
            auctionFilter.Title = title;
        }

        const minPrice = searchParams["minPrice"];
        if(minPrice && typeof(minPrice) === "string" && minPrice.length > 0) {
            const parsedMinPrice = parseInt(minPrice);
            if(!isNaN(parsedMinPrice)) {
                auctionFilter.MinPrice = parsedMinPrice;
            }
        }

        const maxPrice = searchParams["maxPrice"];
        if(maxPrice && typeof(maxPrice) === "string" && maxPrice.length > 0) {
            const parsedMaxPrice = parseInt(maxPrice);
            if(!isNaN(parsedMaxPrice)) {
                auctionFilter.MaxPrice = parsedMaxPrice;
            }
        }
    }

    const auctions = await GetAllAuctionsWithSpecificState("running", auctionFilter);

    if (auctions === null || auctions.length === 0) {
        return <>
            <Container fluid="md">
                <Row>
                    <Col xs={1}></Col>
                    <Col>
                        <Filter></Filter>
                        <h4>Actualmente no existen subastas disponibles</h4>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
            </Container>
        </>;
    }

    const parsedAuctions = auctions.map(auction => auction.ToJSON());

    return <>
        <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                    <Filter></Filter>
                    <AuctionList auctions={parsedAuctions}></AuctionList>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    </>;
}