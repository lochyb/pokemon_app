import React, {useState} from 'react';
import './App.css';
import {Card} from "./Card";

const App: React.FC<{}> = () => {
  const [apiData, setApiData] = useState("");
  const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => response.json())
    .then((y) => setApiData(y))
  }

  return (
<div>
  <button onClick={fetchData}>Fetch Api Data</button>
  <p>{apiData !== "" && <Card name={JSON.stringify(apiData)} />}</p>
    
</div>
  );
}


export default App;
