import React, { useState, useEffect } from "react";
import "./App.css";
import Info from "./components/Info";
import SimpleInfo from "./components/SimpleInfo";
import { getPokemon } from "./fetch";

const App = () => {
  const [singlePokemon, setSinglePokemon] = useState({});
  const [singleLoading, setSingleLoading] = useState(true);
  const [manyPokemon, setManyPokemon] = useState({});
  const [manyLoading, setManyLoading] = useState(true);
  const [pokemonSearch, setPokemonSearch] = useState("bulbasaur");
  const [singlePokemonData, setSinglePokemonData] = useState({
    data: null,
    loading: true,
  });

  async function getData() {
    const response: any = await getPokemon(
      "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"
    );
    const set = await loadingPokemon(response.results);
    const update = await setManyLoading(false);
  }

  const loadingPokemon = async (data: any) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon: any) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setManyPokemon(_pokemonData);
    console.log(manyPokemon);
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
        />
        <button>Search</button>
      </form>

      {
        <div>
          <button onClick={() => setSingleLoading(!singleLoading)}>
            {singleLoading ? <span>Show</span> : <span>Hide</span>}
          </button>
          {!singleLoading && <Info data={singlePokemon} />}
        </div>
      }
      <hr></hr>
      {
        <div>
          <button onClick={getData}>Fetch All Data</button>
          {!manyLoading && (
            <SimpleInfo data={manyPokemon} loadingState={manyLoading} />
          )}
        </div>
      }
    </div>
  );
};

export default App;
