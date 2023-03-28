import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetFromDataBaseByIdCharacters } from "../services/api";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Loader from "../Components/Loader/Loader";

export const CharactersId = () => {
  const { id } = useParams();
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    GetFromDataBaseByIdCharacters(id)
      .then((res) => {
        setResultado(res);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!resultado) {
    return <Loader />;
  }

  return (
    <Card>
      <Card.Header>{resultado.name}</Card.Header>
      <Card.Body>
        <Card.Title>{resultado.status}</Card.Title>
        <Card.Img src={resultado.image}></Card.Img>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
