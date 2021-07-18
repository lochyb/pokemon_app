import React, { useState, useEffect } from "react";
import ShinyPokemonToggle from "./ShinyListLayout";
import { getPokemon } from "../fetch";
import { SkeletonCard } from "../skeleton/SkeletonCard";

interface Props {
  urlString: string;
}

const ShinyList: React.FC<Props> = ({ urlString }) => {
  const [obj, setObj] = useState({});
  const [loading, setLoading] = useState(true);

  // sets the amount of skeleton Cards for the page
  const amount = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  useEffect(() => {
    getData(urlString);
    async function getData(url: any) {
      setLoading(true);
      const response: any = await getPokemon(url);
      const set = await loadingPokemon(response.results);
      const wait = await setLoading(false);
    }
    return () => {};
  }, [urlString]);

  const loadingPokemon = async (data: any) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon: any) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setObj(_pokemonData);
  };

  return (
    <div>
      {loading ? (
        <div className='skeleton-wrapper'>
          <div>
            {amount.map((n, id) => (
              <SkeletonCard key={`skeleton${id}`} />
            ))}
          </div>
        </div>
      ) : (
        <ShinyPokemonToggle data={obj} key={"toggleKey"} />
      )}
    </div>
  );
};
export default ShinyList;
