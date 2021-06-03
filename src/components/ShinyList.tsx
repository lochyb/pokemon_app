import React, { useState, Suspense } from "react";
// import { Loader } from "./Loader";
import ShinyPokemonToggle from "./ShinyListLayout";
interface Props {
  data: any;
}

// const ShinyLoader: any = React.lazy(() => {
//   return import("./ShinyListLayout");
// });

const SimpleInfo: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div>
        <ShinyPokemonToggle data={data} />
      </div>
      {/* <div>
        <Suspense fallback={<Loader />}> */}
      {/* <ShinyLoader data={data} /> */}
      {/* </Suspense>{" "}
      </div> */}
    </div>
  );
};
export default SimpleInfo;
