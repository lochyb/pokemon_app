import React, { useState, useEffect } from "react";
import Info from "./Info";
import ShinyList from "./ShinyList";
import { getPokemon } from "../fetch";
import { SkeletonCard } from "./skeleton/SkeletonCard";

const Front = () => {
  const [tab, setTab] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [pokemonName, setPokemonName] = useState("ditto");
  const [singlePokemon, setSinglePokemon] = useState({});
  const [singleLoading, setSingleLoading] = useState(true);
  const [manyPokemon, setManyPokemon] = useState({});
  const [manyLoading, setManyLoading] = useState(true);

  async function getData(url: any) {
    setManyLoading(true);
    const response: any = await getPokemon(url);
    const set = await loadingPokemon(response.results);
    // const update = await setManyLoading(false);

    setTimeout(() => {
      const update = setManyLoading(false);
    }, 1000);
  }
  useEffect(() => {
    setTimeout(() => {
      getData("https://pokeapi.co/api/v2/pokemon?limit=151");
    }, 2000);
    // getData("https://pokeapi.co/api/v2/pokemon?limit=151");
    return () => {};
  }, []);

  const loadingPokemon = async (data: any) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon: any) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setManyPokemon(_pokemonData);
  };

  useEffect(() => {
    getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response: any) => setSinglePokemon(response))
      .then(() => setSingleLoading(false));
    return () => {};
  }, [pokemonName]);

  function updateName(e: any) {
    e.preventDefault();
    setPokemonName(searchInput);
  }

  function scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  const amount = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  return (
    <div>
      <div className='heading-section'>
        {/* <h1>Pokemon Search App</h1> */}
        <button
          className='tab-button'
          style={tab ? { background: "white" } : { background: "#67c5ff" }}
          onClick={() => setTab(true)}>
          <h3>Shiny List</h3>
        </button>
        <button
          className='tab-button'
          style={tab ? { background: "#67c5ff" } : { background: "white" }}
          onClick={() => setTab(false)}>
          <h3>Search</h3>
        </button>
      </div>
      {tab ? (
        <div className='shiny-list-wrapper'>
          <div className='shiny-list-header'>
            <button
              className='btn'
              onClick={() =>
                getData("https://pokeapi.co/api/v2/pokemon?limit=151")
              }>
              Generation 1
            </button>
            <button
              className='btn'
              onClick={() =>
                getData(
                  "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"
                )
              }>
              Generation 2
            </button>

            <button
              className='btn'
              onClick={() =>
                getData(
                  "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"
                )
              }>
              Generation 3
            </button>
            <button
              className='btn'
              onClick={() =>
                getData(
                  "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386"
                )
              }>
              Generation 4
            </button>
          </div>
          <h3>Click to see shiny</h3>
          {!manyLoading ? (
            <ShinyList data={manyPokemon} />
          ) : (
            <div className='skeleton-wrapper'>
              <div>
                {amount.map((n) => (
                  <SkeletonCard />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <form
            className='wrap'
            onSubmit={(x) => {
              updateName(x);
            }}>
            <input
              className='searchTerm'
              type='text'
              placeholder='Pokemon Name or Number'
              onChange={(x) => setSearchInput(x.target.value.toLowerCase())}
              required={true}
            />
            <button className='searchButton'>Search</button>
          </form>
          {!singleLoading && <Info data={singlePokemon} />}
        </div>
      )}
      <button className='top-button' onClick={scrollTop}>
        <span className='arrow'></span>
      </button>
    </div>
  );
};

export default Front;
