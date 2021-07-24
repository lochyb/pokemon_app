import React from "react";
import { Link } from "react-router-dom";

interface Props {
  data: any;
  state: boolean;
}

export const ShinyCard: React.FC<Props> = ({ data, state }) => {
  return (
    <div className='pokemonCard' id={`${data.id}`}>
      {data.id < 385 ? (
        <div className='photoWrapper'>
          <img
            className={state ? "shiny sprites" : "sprites"}
            src={data.sprites.versions["generation-iii"].emerald.front_shiny}
            alt='pokemonIcon'></img>
          <img
            src={data.sprites.versions["generation-iii"].emerald.front_default}
            alt='pokemonIcon'
            className='sprites nonShiny'></img>
        </div>
      ) : (
        <div className='photoWrapper'>
          <img
            className={state ? "shiny sprites" : "sprites"}
            src={
              data.sprites.versions["generation-iv"]["diamond-pearl"]
                .front_shiny
            }
            alt='pokemonIcon'></img>
          <img
            src={
              data.sprites.versions["generation-iv"]["diamond-pearl"]
                .front_default
            }
            alt='pokemonIcon'
            className='sprites nonShiny'></img>
        </div>
      )}
      <Link className='id-link' to={`search/${data.id}`} key={`link${data.id}`}>
        `ID : ${data.id}`
      </Link>
      <p>{data.name}</p>
      <div className='types'>
        {data.types.map((x: any) => (
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
  );
};
