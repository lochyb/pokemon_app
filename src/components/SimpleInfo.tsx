import React, { useState } from "react";

interface Props {
  data: any;
}

const SimpleInfo: React.FC<Props> = ({ data }) => {
  const [active, setActive] = useState(false);

  function toggleMouseDown() {
    setActive(!active);
  }

  return (
    <div className='cardContainer'>
      <h3>Shiny List</h3>
      <p>Click to toggle Shiny</p>
      {data.map((x: any) => (
        <div
          className='pokemonCard'
          id={`${x.id}`}
          onMouseDown={() => toggleMouseDown()}>
          <div className='photoWrapper'>
            <img
              className={active ? "shiny sprites" : "sprites"}
              src={x.sprites.versions["generation-iii"].emerald.front_shiny}
              alt='pokemonIcon'></img>
            <img
              src={x.sprites.versions["generation-iii"].emerald.front_default}
              alt='pokemonIcon'
              className='sprites'></img>
          </div>
          <p>{x.id}</p>
          <p>{x.name}</p>
          <div className='types'>
            {x.types.map((x: any) => (
              <p>{x.type.name}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimpleInfo;
