import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  data: object[];
}

const ShinyCard: React.FC<Props> = ({ data }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      {data.map((x: any, key: number) => (
        <div
          key={`card${key}`}
          className='pokemonCard'
          id={`${x.id}`}
          onMouseDown={() => setActive(!active)}>
          {x.id < 385 ? (
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
          ) : (
            <div className='photoWrapper'>
              <img
                className={active ? "shiny sprites" : "sprites"}
                src={
                  x.sprites.versions["generation-iv"]["diamond-pearl"]
                    .front_shiny
                }
                alt='pokemonIcon'></img>
              <img
                src={
                  x.sprites.versions["generation-iv"]["diamond-pearl"]
                    .front_default
                }
                alt='pokemonIcon'
                className='sprites nonShiny'></img>
            </div>
          )}
          <Link className='id-link' to={`search/${x.id}`} key={`link${x.id}`}>
            {`ID : ${x.id}`}
          </Link>
          <p>{x.name}</p>
          <div className='types'>
            {x.types.map((x: any) => (
              <img
                className='types'
                src={
                  require(`../types/Type_${
                    x.type.name.charAt(0).toUpperCase() + x.type.name.slice(1)
                  }.gif`).default
                }
                alt={x.name}></img>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ShinyCard;
