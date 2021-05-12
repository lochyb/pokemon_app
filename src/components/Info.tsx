import React, { useState } from "react";
import Details from "./Details";
import SpritesGrid from "./SpritesGrid";

interface Props {
  data: any;
}
const Info: React.FC<Props> = ({ data }) => {
  const [ready, setReady] = useState(true);

  return (
    <div>
      <button onClick={() => setReady(!ready)}>
        {!ready ? <span>Show</span> : <span>Hide</span>}
      </button>
      {ready && (
        <div>
          <Details data={data} />
          <SpritesGrid data={data} />
        </div>
      )}
    </div>
  );
};

export default Info;
