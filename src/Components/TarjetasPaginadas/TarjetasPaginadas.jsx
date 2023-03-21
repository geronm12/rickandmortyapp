import { useEffect, useState } from "react";

import Pagination from "react-bootstrap/Pagination";
import Container from "react-bootstrap/Container";

import CardRickAndMorty from "../Tarjeta/CardRickAndMorty";
import Loader from "../Loader/Loader";

import { GetFromDataBase } from "../../services/api";

import "../../App.css";

//ciclo de vida
//Mount
//Update
//Umount
function TarjetasPaginadas() {
  const [resultado, setResultado] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    GetFromDataBase(page)
      .then(({ results }) => setResultado(results))
      .catch((err) => console.log(err));
  }, [page]);

  function AddPage() {
    if (page === 42) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  }

  return (
    <div className="App">
      <Pagination>
        <Pagination.Prev onClick={() => setPage(page - 1)}></Pagination.Prev>
        <Pagination.Next onClick={() => AddPage()}></Pagination.Next>
      </Pagination>
      <Container className="contenedor-tarjetas">
        {resultado.length === 0 ? (
          <Loader />
        ) : (
          resultado.map((element, index) => (
            <CardRickAndMorty
              name={element.name}
              image={element.image}
              key={index}
            />
          ))
        )}
      </Container>
    </div>
  );
}

export default TarjetasPaginadas;
