import React, { useState, useEffect } from "react";
import Info from "./Info";

interface Props {
  selectedId: string;
}
const Searchpage: React.FC<Props> = ({ selectedId }) => {
  const [searchInput, setSearchInput] = useState("");
  const [pokemonName, setPokemonName] = useState("1");

  function updateName(e: any) {
    e.preventDefault();
    setPokemonName(searchInput);
  }

  useEffect(() => {
    setPokemonName(selectedId);
    return () => {};
  }, [selectedId]);
  return (
    <>
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
    </>
  );
};

export default Searchpage;
