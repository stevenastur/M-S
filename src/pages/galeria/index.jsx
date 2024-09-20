import { Container } from "react-bootstrap";
import "./style.scss";
import juntos01 from "../../assets/juntos01.jpg";
import juntos02 from "../../assets/juntos02.jpg";
import juntos03 from "../../assets/juntos03.jpg";
import juntos04 from "../../assets/juntos04.jpg";
import juntos05 from "../../assets/juntos05.jpg";
import juntos06 from "../../assets/juntos06.jpg";
import juntos07 from "../../assets/juntos07.jpg";
import juntos08 from "../../assets/juntos08.jpg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const images = [
  juntos01,
  juntos02,
  juntos04,
  juntos05,
  juntos03,
  juntos06,
  juntos07,
  juntos08,
]

const Galeria = () => {
  return (
    <Container id="contenedorGaleria">
      <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                            className="imagenJuntos"
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>

    </Container>
  );
};

export { Galeria };
