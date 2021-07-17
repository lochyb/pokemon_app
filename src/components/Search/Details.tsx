import React from "react";
interface Props {
	data: any;
}
const Details: React.FC<Props> = ({ data }) => {
	return (
		<div className='single-info'>
			<h1>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h1>
			<p>{data.id}</p>
			{data.types.map((x: any) => (
				<img
					key={data.types.slot}
					className='types'
					src={`images/types/Type_${
						x.type.name.charAt(0).toUpperCase() + x.type.name.slice(1)
					}.gif`}
					alt={x.type.name}></img>
			))}
			<img
				src={data.sprites.other["official-artwork"].front_default}
				alt='sprite'></img>
		</div>
	);
};

export default Details;
