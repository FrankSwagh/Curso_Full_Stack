import React from "react";

const Total = ({parts}) =>{
  const arreglo = []
  Object.keys(parts).map(indice=>{    
    return arreglo.push(parts[indice].exercises)
  })
  const sum = (arreglo).reduce((s,p)=>{
    return s+p
  })
  return <p>Total of {sum} exercises</p>
}
export default Total