import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export const Home = () => {
  return (
    <div className='home'>
      <h1>Pokemon Shiny App</h1>

      <p>
        Uses the <a href='https://pokeapi.co/'>Pokeapi</a> found here
      </p>

      <div>
        <h3>How to use</h3>
        <p>Press the pokemon image to toggle shiny mode</p>
        <p>Please the Id number to see more information</p>
      </div>

      <div className='go'>
        <Link to='/shinylist'>See Shiny Pokemon</Link>
      </div>
      <Footer />
    </div>
  );
};
