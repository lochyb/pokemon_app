import React, { useState } from "react";

interface Props {
  data: any;
}

const ShinyPokemonToggle: React.FC<Props> = ({ data }) => {
  const [active, setActive] = useState(false);
  return (
    <div className='cardContainer'>
      <div>
        {data.map((x: any) => (
          <div
            className='pokemonCard'
            id={`${x.id}`}
            onMouseDown={() => setActive(!active)}>
            <div className='photoWrapper'>
              <img
                className={active ? "shiny sprites" : "sprites"}
                src={x.sprites.versions["generation-iii"].emerald.front_shiny}
                alt='pokemonIcon'></img>
              <img
                src={x.sprites.versions["generation-iii"].emerald.front_default}
                alt='pokemonIcon'
                className='sprites nonShiny'></img>
            </div>
            <p>{x.id}</p>
            <p>{x.name}</p>
            <div className='types'>
              {x.types.map((x: any) => (
                <img
                  className='types'
                  src='images/Type_Normal.webp'
                  alt={x.type.name}></img>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShinyPokemonToggle;
