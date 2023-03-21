import Card from "react-bootstrap/Card";

import "./CardRickAndMorty.css";

function CardRickAndMorty({ name, image }) {
  return (
    <Card style={{ width: "18rem" }} className="tarjeta">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardRickAndMorty;
