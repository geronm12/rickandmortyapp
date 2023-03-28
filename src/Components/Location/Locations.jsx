import React, { useState, useEffect } from "react";
import { GetFromDataBaseLocation } from "../../services/api";

import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";

import Loader from "../Loader/Loader";

import "./Location.css";

export const Locations = () => {
  const [resultado, setResultado] = useState([]);
  const [page, setPage] = useState(1);

  function AddPage() {
    if (page === 7) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  }

  useEffect(() => {
    GetFromDataBaseLocation(page)
      .then(({ results }) => {
        setResultado(results);
      })
      .catch((err) => console.log(err));
    console.log(resultado);
  }, [page]);
  return (
    <div className="father">
      <Pagination>
        <Pagination.Prev onClick={() => setPage(page - 1)}></Pagination.Prev>
        <Pagination.Next onClick={() => AddPage()}></Pagination.Next>
      </Pagination>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Dimension</th>
          </tr>
        </thead>
        <tbody>
          {resultado.length === 0 ? (
            <Loader />
          ) : (
            resultado.map((element, index) => {
              return (
                <tr>
                  <td> </td>
                  <td>{element.name}</td>
                  <td>{element.type}</td>
                  <td>{element.dimension}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </div>
  );
};
