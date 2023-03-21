async function GetFromDataBase(page) {
  const resultados = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );

  return await resultados.json();
}

export { GetFromDataBase };
