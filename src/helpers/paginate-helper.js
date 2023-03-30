function AddPage(maxPage, page, setPage) {
  if (page === maxPage) {
    setPage(1);
  } else {
    setPage(page + 1);
  }
}

function DeletePage(setPage, page) {
  setPage(page - 1);
}

export { AddPage, DeletePage };
