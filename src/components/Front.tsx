import React, { useState } from "react";
import Info from "./Search/Info";
import ShinyList from "./ShinyList/ShinyList";

const Front = () => {
  const [tab, setTab] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [pokemonName, setPokemonName] = useState("ditto");
  const [genSelect, setGenSelect] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );

  function updateName(e: any) {
    e.preventDefault();
    setPokemonName(searchInput);
  }

  function scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

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
                setGenSelect("https://pokeapi.co/api/v2/pokemon?limit=151")
              }>
              Generation 1
            </button>
            <button
              className='btn'
              onClick={() =>
                setGenSelect(
                  "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"
                )
              }>
              Generation 2
            </button>

            <button
              className='btn'
              onClick={() =>
                setGenSelect(
                  "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"
                )
              }>
              Generation 3
            </button>
            <button
              className='btn'
              onClick={() =>
                setGenSelect(
                  "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386"
                )
              }>
              Generation 4
            </button>
          </div>
          <h3>Click to see shiny</h3>
          {<ShinyList urlString={genSelect} />}
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
          <Info pokemonName={pokemonName} />
        </div>
      )}
      <button className='top-button' onClick={scrollTop}>
        <span className='arrow'></span>
      </button>
    </div>
  );
};

export default Front;
