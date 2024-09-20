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
  const [isScrolled, setIsScrolled] = useState(false); // Estado para detectar el scroll

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true); // Cuando el scroll es mayor a 100px
      } else {
        setIsScrolled(false); // Cuando el scroll es menor a 100px
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <Navbar
      expand="lg"
      className={`header ${isScrolled ? "scrolled" : ""}`} // Aplica la clase "scrolled" al hacer scroll
    >
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

