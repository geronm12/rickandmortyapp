import { useEffect, useState, useContext } from "react";

import Container from "react-bootstrap/Container";

import CardRickAndMorty from "../Tarjeta/CardRickAndMorty";
import Loader from "../Loader/Loader";

import { GetFromDataBase } from "../../services/api";

import "./TarjetasPaginadas.css";
import { DataProvider } from "../../context/DataContext";
import useApiCall from "../../hooks/useApiCall";
import { Paginator } from "../Paginator/Paginator";
import { AddPage, DeletePage } from "../../helpers/paginate-helper";

//ciclo de vida
//Mount
//Update
//Umount
function TarjetasPaginadas() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { data, error, error_message } = useApiCall(
    GetFromDataBase,
    page,
    setIsLoading
  );

  return (
    <div className="App">
      {!isLoading && (
        <Paginator
          addPage={() => AddPage(42, page, setPage)}
          deletePage={() => DeletePage(setPage, page)}
        />
      )}
      <Container className="contenedor-tarjetas">
        {isLoading ? (
          <Loader />
        ) : (
          data?.map((element, index) => (
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
