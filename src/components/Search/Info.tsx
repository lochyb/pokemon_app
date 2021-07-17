import React, { useState, useEffect } from "react";
import Details from "./Details";
import SpritesGrid from "./SpritesGrid";
import { getPokemon } from "../fetch";

interface Props {
	pokemonName: string | number;
}
const Info: React.FC<Props> = ({ pokemonName }) => {
	const [singlePokemon, setSinglePokemon] = useState({});
	const [singleLoading, setSingleLoading] = useState(true);

	useEffect(() => {
		getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
			.then((response: any) => setSinglePokemon(response))
			.then(() => setSingleLoading(false));
		return () => {};
	}, [pokemonName]);

	return (
		<>
			{!singleLoading && (
				<>
					<Details data={singlePokemon} />
					<SpritesGrid data={singlePokemon} />
				</>
			)}
		</>
	);
};

export default Info;
