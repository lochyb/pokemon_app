import React from 'react'

interface Props{
    data: any;

}
export const Card: React.FC<Props> = ({data}) => {
    
   
    

  
    return(
        <div>
         <p>{data.name}</p>   
         <p>{data.height}</p>
         {/* <img src={sprites} alt="sprite"></img> */}
         <p> {(Object.values(data).map((x) => <p>{JSON.stringify(x)}</p>))}</p>
             </div>
    )
}
