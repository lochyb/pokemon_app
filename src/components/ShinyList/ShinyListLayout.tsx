import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
	data: any;
}

const ShinyPokemonToggle: React.FC<Props> = ({ data }) => {
	const [active, setActive] = useState(false);
	return (
		<div className='cardContainer'>
			<div>
				{data.map((x: any) => (
					<div
						className='pokemonCard'
						id={`${x.id}`}
						onMouseDown={() => setActive(!active)}>
						{data.id < 385 ? (
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
						) : (
							<div className='photoWrapper'>
								<img
									className={active ? "shiny sprites" : "sprites"}
									src={
										x.sprites.versions["generation-iv"]["diamond-pearl"]
											.front_shiny
									}
									alt='pokemonIcon'></img>
								<img
									src={
										x.sprites.versions["generation-iv"]["diamond-pearl"]
											.front_default
									}
									alt='pokemonIcon'
									className='sprites nonShiny'></img>
							</div>
						)}
						{/* <p>{x.id}</p> */}
						<Link to={`search/${x.id}`}>{`ID : ${x.id}`}</Link>
						<p>{x.name}</p>
						<div className='types'>
							{x.types.map((x: any) => (
								<img
									className='types'
									src={`images/types/Type_${
										x.type.name.charAt(0).toUpperCase() + x.type.name.slice(1)
									}.gif`}
									alt={x.type.name}></img>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default ShinyPokemonToggle;
