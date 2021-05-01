import React, { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./SpriteCard";
import Info from "./Info";
import SimpleInfo from "./SimpleInfo";

const App = () => {
  const [singlePokemon, setSinglePokemon] = useState({});
  const [singleLoading, setSingleLoading] = useState(true);
  const [manyPokemon, setManyPokemon] = useState({});
  const [manyLoading, setManyLoading] = useState(true);
  
  
  const newArray: any = [];

  
  const  fetchData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await response.json();
    const moveData = await setSinglePokemon(data);
    const update = await setSingleLoading(false);

  };


  const fetchData2 = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=99&offset=151")
    const data =  await response.json();
    const set =  await data.results.forEach((pokemon: any) =>fetchData2Data((pokemon)))
    const update = await setManyPokemon(newArray);
    const updateState = await setTimeout(function () {setManyLoading(false)},2000)
  };

  function fetchData2Data(x: any) {
    fetch(x.url)
              .then((res) => res.json())
              .then((x) => newArray.push(x))
  }


  return (
    <div>
      <button onClick={fetchData}>Fetch Api Data</button>
      <button onClick={fetchData2}>Fetch All Data</button>



      {<div>{singleLoading ? <p>Loading...</p> : <Info data={singlePokemon} />}</div>}
      {<div>{manyLoading ? <p>Loading...</p> : <SimpleInfo data={manyPokemon} />} </div>}



    </div>
  );
};

export default App;
