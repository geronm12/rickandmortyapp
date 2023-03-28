import { useEffect, useState } from "react";

import Pagination from "react-bootstrap/Pagination";
import Container from "react-bootstrap/Container";

import CardRickAndMorty from "../Tarjeta/CardRickAndMorty";
import Loader from "../Loader/Loader";

import { GetFromDataBase } from "../../services/api";

import "./TarjetasPaginadas.css";

//ciclo de vida
//Mount
//Update
//Umount
function TarjetasPaginadas() {
  const [resultado, setResultado] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    GetFromDataBase(page)
      .then(({ results }) => {
        setResultado(results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [page]);

  function AddPage() {
    if (page === 42) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  }

  function DeletePage() {
    setPage(page - 1);
  }

  return (
    <div className="App">
      {!isLoading && (
        <Pagination>
          <Pagination.Prev onClick={DeletePage}></Pagination.Prev>
          <Pagination.Next onClick={AddPage}></Pagination.Next>
        </Pagination>
      )}
      <Container className="contenedor-tarjetas">
        {isLoading ? (
          <Loader />
        ) : (
          resultado.map((element, index) => (
            <CardRickAndMorty
              name={element.name}
              image={element.image}
              key={index}
              id={element.id}
            />
          ))
        )}
      </Container>
    </div>
  );
}

export default TarjetasPaginadas;
