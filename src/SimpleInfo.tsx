import React, { useEffect, useState } from "react";

interface Props {
  data: any;
}
const SimpleInfo: React.FC<Props> = ({ data}) => {
  

 function mapCards(){
  return data.map((x: any) => <p>{x.name}</p>)

}

// function delaymapCards(){
//   return  <p>{data !== [] && data[0].name}</p>

// }


    return (
    <div>
      <hr></hr>
      <div>{data !== Array && mapCards()}</div>
      {/* <div>{delaymapCards()}</div> */}
      <p>Hello</p>
      {/* {data === Array && <p>UNDEFINED</p>} */}
    </div>
  );
};

export default SimpleInfo;
