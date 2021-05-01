import React, { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./SpriteCard";
import Info from "./Info";
import SimpleInfo from "./SimpleInfo";

const App: React.FC<{}> = () => {
  const [data1, setData1] = useState({ data: Object, loading: true });
  const [data2, setData2] = useState({ data: Array, loading: true });
  
  
  
  const newArray: any = [];

  const  fetchData = async () => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => response.json())
      .then((y) => setData1({ data: y, loading: false }));
  };

  const fetchData2 = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((y) =>
        y.results.forEach((pokemon: any) =>
          fetchData2Data((pokemon)
          )
        )
      ).then(() => setData2({data: newArray, loading: false}))
  };

  function fetchData2Data(x: any) {
    fetch(x.url)
              .then((res) => res.json())
              .then((x) => newArray.push(x))
  }

  function printCards(){
   return <SimpleInfo data={data2.data} />;
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Api Data</button>
      <button onClick={fetchData2}>Fetch All Data</button>
      {<div>{data1.loading ? <p>Loading...</p> : <Info data={data1.data} />}</div>}
      {<div>{printCards()}</div>}
    </div>
  );
};

export default App;
