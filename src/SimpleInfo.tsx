import React, { useEffect, useState } from "react";

interface Props {
  data: any;
}

// document.querySelectorAll("cardContainer").hover((x: any) => x.css("background-color","red"));


const SimpleInfo: React.FC<Props> = ({data }) => {
  

    return (
    <div className="cardContainer">
      {data.map((x: any) => 
     <div className="pokemonCard" key={x.id}>
        <div className="photoWrapper">
       <img src={x.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_default} alt="pokemonIcon" className="sprites"></img>
       <img className="shiny sprites" src={x.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_shiny} alt="pokemonIcon" ></img>
       </div>
       <p>{x.id}</p>
       <p>{x.name}</p>
       <p>{x.types.map((x:any) => <p>{x.type.name}</p>)}</p>
       </div>)} 
    </div>
  );
};

export default SimpleInfo;
