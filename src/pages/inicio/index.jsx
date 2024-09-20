import { Container, Image, Row } from "react-bootstrap";
import "./style.scss";
import fondo from "../../assets/fondoRecortado.png";


const Inicio = () => {
  return (
    <>
      <Container id="contenedorInicio">
        <Image className="imagenfondo" src={fondo}/>
        <Row id="inicio">

        </Row>
      </Container>
    </>
  );
};

export { Inicio };
