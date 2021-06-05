import React, { useState, Suspense } from "react";
// import ShinyPokemonToggle from "./ShinyListLayout";
import { Loader } from "./Loader";

interface Props {
  data: any;
  loading: boolean;
}

const ShinyLoader: any = React.lazy(() => {
  return import("./ShinyListLayout");
});
const SimpleInfo: React.FC<Props> = ({ data, loading }) => {
  return (
    <div>
      {/* <ShinyPokemonToggle data={data} loading={loading} /> */}
      <Suspense fallback={<Loader />}>
        <ShinyLoader data={data} loading={loading} />
      </Suspense>
    </div>
  );
};
export default SimpleInfo;
