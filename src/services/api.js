async function GetFromDataBase(page) {
  const resultados = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );

  return await resultados.json();
}

async function GetFromDataBaseByIdCharacters(id) {
  const resultado = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return await resultado.json();
}

async function GetFromDataBaseLocation(page) {
  const resultados = await fetch(
    `https://rickandmortyapi.com/api/location?page=${page}`
  );

  return await resultados.json();
}

async function GetFromDataBaseCharacter(page) {
  const resultados = await fetch(
    `https://rickandmortyapi.com/api/episode?page=${page}`
  );

  return await resultados.json();
}

export {
  GetFromDataBase,
  GetFromDataBaseLocation,
  GetFromDataBaseCharacter,
  GetFromDataBaseByIdCharacters,
};
