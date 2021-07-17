import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className='home'>
      <h3>Pokemon Shiny Application</h3>
      <p>Created by Lochyb</p>
      <p>
        Uses the <a href='https://pokeapi.co/'>Pokeapi</a> found here
      </p>
      <div>
        <a href='https://github.com/lochyb'>Lochyb Github</a>
      </div>

      <div>
        <h3>How to use</h3>
        <p>Press the pokemon image to toggle shiny mode</p>
        <p>Please the Id number to see more information</p>
      </div>

      <div className='go'>
        <Link to='/shinylist'>See Shiny Pokemon</Link>
      </div>
    </div>
  );
};
