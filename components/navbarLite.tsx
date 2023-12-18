"use client";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

const registerLogin = async (userData: any) => {
    try {
      // Realiza la llamada a tu API o función del backend para almacenar la información en la base de datos
      await fetch("/api/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
    } catch (error) {
      console.error("Error registrando el inicio de sesión:", error);
    }
  };


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