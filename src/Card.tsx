import React from "react";

interface Props {
  data: any;
}
export const Card: React.FC<Props> = ({ data }) => {
  const gens: any = data.sprites.versions;
  //   const games = gens.map((x: any) => Object.entries(x));

  //   const eachGame: any = games.map((x: any) => x.map((x: any) => x[1]));
  //   const names: any = games.map((x: any) => x.map((x: any) => x));

  for (const [key, value] of Object.entries(gens)) {
  }

  const names = Object.entries(gens).map((generation: any) => generation);

  console.log(names);

  return (
    <div>
      <p>{data.name}</p>
      {/* <img src={data.sprites.front_default} alt={data.name}></img> */}
      <p>{data.id}</p>

      {names.map((x: any) => (
        <div>
          <p>{x[0]}</p>
          {Object.values(x[1]).map((p:any) => <img src={p.front_default} alt="pokemon"></img>)}
        </div>
      ))}
      {/* {names[0].map((x: any) => (
        <p>{x[0]}</p>
      ))}
      {eachGame[1].map((x: any) => (
        <img src={x.front_default} alt="sprite"></img>
      ))}
      {eachGame[2].map((x: any) => (
        <img src={x.front_default} alt="sprite"></img>
      ))}
      {eachGame[3].map((x: any) => (
        <img src={x.front_default} alt="sprite"></img>
      ))}
      {eachGame[4].map((x: any) => (
        <img src={x.front_default} alt="sprite"></img>
      ))}
      {eachGame[5].map((x: any) => (
        <img src={x.front_default} alt="sprite"></img>
      ))}
      {eachGame[6].map((x: any) => (
        <img src={x.front_default} alt="sprite"></img>
      ))}
      {eachGame[7].map((x: any) => (
        <img src={x.front_default} alt="sprite"></img>
      ))} */}
    </div>
  );
};
