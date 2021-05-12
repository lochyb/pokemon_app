import React from "react";

interface Props {
  data: any;
}
export const Card: React.FC<Props> = ({ data }) => {
  const gens: any = data.sprites.versions;
  const names = Object.entries(gens).map((generation: any) => generation);
  return (
    <div>
      <div className='wrapper'>
        {names.map((x: any) => (
          <div className='left'>
            <p>{x[0]}</p>
            {Object.values(x[1]).map(
              (p: any) =>
                p.front_default !== null && (
                  <img src={p.front_default} alt='pokemon'></img>
                )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
