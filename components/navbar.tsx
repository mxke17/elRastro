"use client";

import { signOut } from "next-auth/react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export function NavbarHome() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/home"><strong>elRastro</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/chats">Chats</Nav.Link>
                        <NavDropdown title="Perfil" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/usuario/653be37c5ee549bea86cd466">Mi perfil</NavDropdown.Item>
                            <NavDropdown.Item href="/usuario/653be37c5ee549bea86cd466">Editar perfil</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Button
                                    onClick={async () => {
                                        await signOut({
                                            callbackUrl: "/",
                                        });
                                    }}
                                >
                                    Cerrar sesión
                                </Button>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className="d-flex"><Button href="/newAuction" variant="success">Nueva subasta</Button></div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}