import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import "./CardRickAndMorty.css";

function CardRickAndMorty({ name, image, id }) {
  return (
    <Card style={{ width: "18rem" }} className="tarjeta">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={`/characters/${id}`} className="btn btn-dark">
          Detalle
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardRickAndMorty;
