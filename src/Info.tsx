import React from 'react'

interface Props{
    data: any;
}
const Info: React.FC<Props> = ({data}) => {
    return (
        <div>
            <h1>{data.name}</h1>
            <p>{`Type: ${data.types[0].type.name}`}</p>
            <img src={data.sprites.other['official-artwork'].front_default} alt="sprite"></img>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${data.id}.png`} alt="sprite"></img>
        </div>
    )
}

export default Info
