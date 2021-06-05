import React from "react";
import ShinyPokemonToggle from "./ShinyListLayout";
interface Props {
  data: any;
}

const SimpleInfo: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <ShinyPokemonToggle data={data} />
    </div>
  );
};
export default SimpleInfo;
