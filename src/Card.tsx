import React from 'react'

interface Props{
    name: string;
}
export const Card: React.FC<Props> = ({name}) => {
    
    
    
    
    return (
        <div>
         <p>{name}</p>   
        </div>
    )
}
