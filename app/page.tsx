/* eslint-disable @next/next/no-async-client-component */
"use client";
import { FooterHome } from "@/components/footer";
import { NavbarLite } from "@/components/navbarLite";
import Carousel from "react-bootstrap/Carousel";
import Figure from "react-bootstrap/Figure";


export default async function Home() {
  return (
    <>
    <NavbarLite></NavbarLite>
    <Carousel>
      <Carousel.Item>
        <Figure.Image src="/coche.jpg" style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "700px" }}/>
        <Carousel.Caption>
          <h3>Automóviles</h3>
          <p>Vendo mi coche porque mi sueño de ser piloto de carreras fue solo un sueño, y ahora necesito espacio para mis otras fantasías</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Figure.Image src="/pc.jpg" style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "700px" }}/>
        <Carousel.Caption>
          <h3>Ordenadores</h3>
          <p>Se vende ordenador de segunda mano: ha visto más memes de los que puedes imaginar, pero todavía le queda mucha risa en su disco duro.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Figure.Image src="/movil.jpg" style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "700px" }}/>
        <Carousel.Caption>
          <h3>Smartphones</h3>
          <p>Este móvil es como un superhéroe retirado: ya no es el más nuevo, pero sigue siendo increíblemente útil cuando lo necesitas. ¡Dale una nueva misión!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <FooterHome></FooterHome></>
  );
}
