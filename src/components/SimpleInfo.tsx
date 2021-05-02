import React from "react";
import { createDocumentRegistry } from "typescript";

interface Props {
  data: any;
}



const SimpleInfo: React.FC<Props> = ({data }) => {
  
// function showShiny(){
//   document.getElementById('252').className="shinyOn"
// }

    return (
    <div className="cardContainer">
      <h3>Shiny List</h3>
      <p>Click to see normal version</p>
      {data.map((x: any) => 
     <div className="pokemonCard" key={x.id}>
        <div className="photoWrapper">
       <img src={x.sprites.versions['generation-iii'].emerald.front_default} alt="pokemonIcon" className="sprites"></img>
       <img id={x.id} className="shiny sprites" src={x.sprites.versions['generation-iii'].emerald.front_shiny} alt="pokemonIcon" ></img>
       </div>
       <p>{x.id}</p>
       <p>{x.name}</p>
       <div className="types">{x.types.map((x:any) => <p>{x.type.name}</p>)}</div>
       </div>)} 
    </div>
  );
};

export default SimpleInfo;
