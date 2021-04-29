import React, { useState } from "react";
import "./App.css";
import { Card } from "./Card";



const App: React.FC<{}> = () => {
  const [apiData, setApiData] = useState(Object);
  const [loading, setLoading] = useState(true)
  const fetchData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/200")
      .then((response) => response.json())
      .then((y) => setApiData(y))
      .then(() => setLoading(false))
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Api Data</button>
      <p>{loading ? <p>Loading...</p> : <Card data={apiData} />}</p>
      
      </div>
  );
};

export default App;
