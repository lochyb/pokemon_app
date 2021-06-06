import React from "react";
import Details from "./Details";
import SpritesGrid from "./SpritesGrid";

interface Props {
  data: any;
}
const Info: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <Details data={data} />
      <SpritesGrid data={data} />
    </div>
  );
};

export default Info;
