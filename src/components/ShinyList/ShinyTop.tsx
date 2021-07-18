import { useState } from "react";
import Footer from "../Home/Footer";
import ShinyList from "./ShinyList";

const ShinyCards = () => {
  const [genSelect, setGenSelect] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );

  return (
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
      <div className='cardContainer'>
        <ShinyList urlString={genSelect} />
      </div>
      <Footer />
    </div>
  );
};

export default ShinyCards;
