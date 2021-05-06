import React, { useState } from "react";

interface Props {
  data: any;
}

const SimpleInfo: React.FC<Props> = ({ data }) => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(true);

  return (
    <div className='cardContainer'>
      <h3>Shiny List</h3>
      <button onClick={() => setShow(!show)}>
        {show ? <span>Hide</span> : <span>Show</span>}
      </button>

      {show && (
        <div>
          <p>Click to toggle Shiny</p>
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
                  src={
                    x.sprites.versions["generation-iii"].emerald.front_default
                  }
                  alt='pokemonIcon'
                  className='sprites nonShiny'></img>
              </div>
              <p>{x.id}</p>
              <p>{x.name}</p>
              <div className='types'>
                {x.types.map((x: any) => (
                  <img className='types' src={``} alt={x.type.name}></img>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SimpleInfo;
