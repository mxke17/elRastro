
import { NewAuction } from "@/components/newAuction";
import { GetUserByEmail } from "@/database/users";
import { getServerSession } from "next-auth";
import { Card, Col, Container, Figure, Row } from "react-bootstrap";

export const dynamic = "force-dynamic";


export default async function newAuction() {
    const session = await getServerSession();

    const sessionUser = session?.user;


    if (!sessionUser) {
        return <></>;
    }

    if(!sessionUser.email || !sessionUser.image || !sessionUser.name) {
        return <h1>Error fetching user info from session.</h1>;
    }

    const user = await GetUserByEmail(sessionUser.email);



    if(!user) {
        return <></>;
    }

    return <>
        <Container fluid="md">
            <Row>
                <Col xs={1}></Col>
                <Col>
                    <Card style={{ marginBottom: "20px" }}>
                        <Figure.Image
                            style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "75px" }}
                            src="/newAuction.jpg"
                        />
                        <Card.Body>¡Tu tesoro merece su momento de gloria! Sube los datos de tu producto y comencemos la puja. ¡La aventura está a punto de empezar!</Card.Body>
                    </Card>
                    <NewAuction userID={user.ID.toHexString()}></NewAuction>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    </>;
}