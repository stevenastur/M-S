import { Col, Container, Nav, Navbar, NavbarToggle, NavbarCollapse } from "react-bootstrap";
import "./style.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="header">
      <Container fluid className="contenedorHeader">
        <Col className="nombreHeader" xs={5}>
          <NavLink to="/" className="nombreHeader izquierda">S</NavLink>
          <NavLink to="/" className="nombreHeader">A</NavLink>
        </Col>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Col className="pintadoHeader" xs={7}>
            <a href="#home" className="linkHeader">Home</a>
            <a href="#aboutMe" className="linkHeader">About me</a>
            <a href="#portafolio" className="linkHeader">Portafolio</a>
            <a href="#contact" className="linkHeader">Contact</a>
          </Col>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export { Header };