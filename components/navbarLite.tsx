"use client";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";

export function NavbarLite() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/"><strong>elRastro</strong></Navbar.Brand>
                <Nav className="ms-auto" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Button variant="outline-primary" className="me-2">Regístrese</Button>
                    <Button href="/login" variant="outline-success">Identifíquese</Button>
                    <Button onClick={() => signIn()} variant="outline-success">Google</Button>
                </Nav>
            </Container>
        </Navbar>
    );
}