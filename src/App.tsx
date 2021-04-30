import React, { useState } from "react";
import "./App.css";
import { Card } from "./SpirteCard";
import Info  from "./Info";
const App: React.FC<{}> = () => {
  const [apiData, setApiData] = useState(Object);
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/evee")
      .then((response) => response.json())
      .then((y) => setApiData(y))
      .then(() => setLoading(false));
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Api Data</button>
    {<div>{loading? <p>Loading...</p>: <Info data={apiData}/>}</div>}
      {/* <div>{loading ? <p>Loading...</p> : <Card data={apiData} />}</div> */}
    </div>
  );
};

export default App;
