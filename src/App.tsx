import React, { useState } from "react";
import "./App.css";
import Info from "./components/Info";
import SimpleInfo from "./components/SimpleInfo";
import { getPokemon } from "./fetch";

const App = () => {
  const [singlePokemon, setSinglePokemon] = useState({});
  const [singleLoading, setSingleLoading] = useState(true);
  const [manyPokemon, setManyPokemon] = useState({});
  const [manyLoading, setManyLoading] = useState(true);
  const [pokemonSearch, setPokemonSearch] = useState('ditto');

  const fetchData = async (e: any) => {
    e.preventDefault();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`
    );
    const data = await response.json();
    setSinglePokemon(data);
    setSingleLoading(false);
  };

  async function getData() {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"
    );
    const data = await response.json();
    const set = await loadingPokemon(data.results);
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
  };

  return (
    <div>
      <h1>Pokemon Search App</h1>
      <form onSubmit={fetchData}>
        <input
          type="text"
          placeholder="Pokemon Name or Number"
          onChange={(x) => setPokemonSearch(x.target.value.toLowerCase())}
        />
        <button>Search</button>
      </form>


      {
        <div>
      <button onClick={() => setSingleLoading(!singleLoading)}>Show/Hide</button>
          {singleLoading ? <p>Loading...</p> : <Info data={singlePokemon} />}
        </div>
      }
      <hr></hr>
      {
        <div>
                <button onClick={getData}>Fetch All Data</button>
      <button onClick={() => setManyLoading(!manyLoading)}>Show/Hide</button>
          {manyLoading ? <p>Loading...</p> : <SimpleInfo data={manyPokemon} />}{" "}
        </div>
      }
    </div>
  );
};

export default App;
