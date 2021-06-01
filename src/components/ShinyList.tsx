import React, { useState, Suspense } from "react";
import { Loader } from "./Loader";

interface Props {
  data: any;
  loading: boolean;
}

const ShinyLoader: any = React.lazy(() => {
  return import("./ShinyListLayout");
});

const SimpleInfo: React.FC<Props> = ({ data, loading }) => {
  const [ready, setReady] = useState(!loading);
  console.log(ready, loading);
  return (
    <div>
      {ready && (
        <div>
          <Suspense fallback={<Loader />}>
            <ShinyLoader data={data} loading={ready} />
          </Suspense>{" "}
        </div>
      )}
    </div>
  );
};
export default SimpleInfo;
