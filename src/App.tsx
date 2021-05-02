import React, {useState } from "react";
import "./App.css";
import Info from "./components/Info";
import SimpleInfo from "./components/SimpleInfo";
import { getPokemon } from "./fetch";

const App = () => {
  const [singlePokemon, setSinglePokemon] = useState({});
  const [singleLoading, setSingleLoading] = useState(true);
  const [manyPokemon, setManyPokemon] = useState({});
  const [manyLoading, setManyLoading] = useState(true);


  const fetchData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await response.json();
    const update1 = await setSinglePokemon(data);
    const update2 = await setSingleLoading(false);
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
      <button onClick={fetchData}>Fetch Api Data</button>
      <button onClick={getData}>Fetch All Data</button>

      {
        <div>
          {singleLoading ? <p>Loading...</p> : <Info data={singlePokemon} />}
        </div>
      }
      <hr></hr>
      {
        <div>
          {manyLoading ? <p>Loading...</p> : <SimpleInfo data={manyPokemon} />}{" "}
        </div>
      }
    </div>
  );
};

export default App;
