import React, { useState, useEffect } from "react";
import Info from "./Info";
import ShinyList from "./ShinyList";
import { getPokemon } from "../fetch";

const Front = () => {
  const [singlePokemon, setSinglePokemon] = useState({});
  const [singleLoading, setSingleLoading] = useState(true);
  const [manyPokemon, setManyPokemon] = useState({});
  const [manyLoading, setManyLoading] = useState(true);
  const [pokemonSearch, setPokemonSearch] = useState("bulbasaur");
  const [singlePokemonData, setSinglePokemonData] = useState({
    data: null,
    loading: true,
  });

  async function getData(url: any) {
    setManyLoading(true);
    const response: any = await getPokemon(url);
    const set = await loadingPokemon(response.results);
    const update = await setManyLoading(false);
  }
  useEffect(() => {
    console.log("Changed");
    return () => {};
  }, [manyPokemon]);

  const loadingPokemon = async (data: any) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon: any) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setManyPokemon(_pokemonData);
  };

  // Testing Function Here

  function getSinglePokemon(e: any) {
    e.preventDefault();
    getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`)
      .then((response: any) => setSinglePokemon(response))
      .then(() => setSingleLoading(false));
  }

  // Testing Function Ends

  return (
    <div>
      <h1>Pokemon Search App</h1>
      <form onSubmit={getSinglePokemon}>
        <input
          type='text'
          placeholder='Pokemon Name or Number'
          onChange={(x) => setPokemonSearch(x.target.value.toLowerCase())}
          required={true}
        />
        <button>Search</button>
      </form>

      <div>{!singleLoading && <Info data={singlePokemon} />}</div>

      <hr></hr>
      {
        <div>
          <button
            onClick={() =>
              getData("https://pokeapi.co/api/v2/pokemon?limit=151")
            }>
            Gen 1
          </button>
          <button
            onClick={() =>
              getData("https://pokeapi.co/api/v2/pokemon?limit=100&offset=151")
            }>
            Gen 2
          </button>

          <button
            onClick={() =>
              getData("https://pokeapi.co/api/v2/pokemon?limit=135&offset=251")
            }>
            Gen 3
          </button>
          <button
            onClick={() =>
              getData("https://pokeapi.co/api/v2/pokemon?limit=135&offset=251")
            }>
            Gen 4
          </button>
          <p>{manyLoading && "loading"}</p>

          {/* {!manyLoading && (
            <ShinyList data={manyPokemon} loading={manyLoading} />
          )} */}

          <ShinyList data={manyPokemon} loading={manyLoading} />
        </div>
      }
    </div>
  );
};

export default Front;
