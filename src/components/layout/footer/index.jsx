import { Col, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <>
      <Navbar expand="lg" className="footer">
        <Row href="/">
          <h1 className="nombreFooter">Steven Astur</h1>
        </Row>
        <Row href="/" className="contactoFooter">
          <div className="datosFooter">
            <NavLink className="linkFooter">LinkId</NavLink>
            <NavLink className="linkFooter">Git hub</NavLink>
            <NavLink className="linkFooter">CV</NavLink>
          </div>
        </Row>
      </Navbar>
    </>
  );
};

export { Footer };
