import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import "./style.scss";
import perfil from "../../assets/perfil.jpg";

const Home = () => {
  return (
    <>
      <Container > 
        <Row id="home">
          <Col className="presentacionPerfil">
            <div>
              <h1>I'm Steven Astur</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                consectetur ab aspernatur? Fugit minima, ullam velit quo placeat
                porro assumenda nihil optio, est, consequuntur possimus
                similique ratione cum cumque perspicia tis ipsum architecto
                voluptates?
              </p>
            </div>
          </Col>
          <Col className="presentacionImagen">
            <div>
              <Image className="imagenPerfil" src={perfil} rounded />
            </div>
          </Col>
        </Row>

        <Row id="aboutMe">
          <Col className="aboutMeImagen">
            <div>
              <Image className="imagenAbotMe" src={perfil} rounded />
            </div>
          </Col>
          <Col className="presentacionAboutMe">
            <div>
              <h1>About me</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias libero eveniet ullam adipisci doloribus ipsam
                laboriosam, incidunt atque reprehenderit necessitatibus error?
                Reprehenderit.
              </p>
            </div>
          </Col>
        </Row>

        <Row id="portafolio">
          <div className="nombrePortafolio">
            <h1>My Portafolio</h1>
          </div>
          <div className="tarjetaProyecto">
            <div className="losSimpsons">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Los simpsons</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="eCommerce">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>eCommerce</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Row>
        
        <Row id="contact">
          <div>
            <h1>Keep in touch</h1>
          </div>
          <div>
            <p>formulario de contacto mas algunos datos</p>
          </div>
        </Row>
      </Container>
    </>
  );
};

export { Home };
