import React from "react";

interface Props {
  data: any;
}
export const Card: React.FC<Props> = ({ data }) => {
  const gens: any = data.sprites.versions;
  const names = Object.entries(gens).map((generation: any) => generation);



  return (
    <div>
      <p>{data.name}</p>
      <p>{data.id}</p>

      {names.map((x: any) => (
        <div>
          <p>{x[0]}</p>
          {Object.values(x[1]).map((p:any) => <img src={p.front_default} alt="pokemon"></img>)}
        </div>
      ))}
    </div>
  );
};
