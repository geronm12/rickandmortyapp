import React from "react";
import Pagination from "react-bootstrap/Pagination";

export const Paginator = ({ addPage: AddPage, deletePage: DeletePage }) => {
  return (
    <Pagination>
      <Pagination.Prev onClick={DeletePage}></Pagination.Prev>
      <Pagination.Next onClick={AddPage}></Pagination.Next>
    </Pagination>
  );
};
