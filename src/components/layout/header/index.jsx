import {
  Col,
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [headerColor, setHeaderColor] = useState("transparent"); // Color inicial

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderColor("#1a1a32"); // Cambia el color al hacer scroll
      } else {
        setHeaderColor("transparent"); // Vuelve al color transparente
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <Navbar expand="lg" style={{ backgroundColor: headerColor }} className="header">
      <Container fluid className="contenedorHeader">
      <Col className="pintadoHeader">
          <Nav className="">
            <Nav.Link href="/" className="linkHeader">Inicio</Nav.Link>
            <Nav.Link href="galeria" className="linkHeader">Galeria</Nav.Link>
          </Nav>
        </Col>
        <Col className="nombreHeader">
          <NavLink to="/" className="nombreHeader izquierda">
            M
          </NavLink>
          <NavLink to="/" className="nombreHeader">
            S
          </NavLink>
        </Col>
        <Col className="pintadoHeader">
          <Nav className="">
            <Nav.Link href="notas" className="linkHeader">Notas</Nav.Link>
            <Nav.Link href="nosotros" className="linkHeader">Nosotros</Nav.Link>
          </Nav>
        </Col>
      </Container>
    </Navbar>
  );
};

export { Header };

