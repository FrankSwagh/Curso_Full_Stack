import React from "react";

const Total = ({parts}) =>{
  const arreglo = []
  console.log(parts)
  const result = Object.keys(parts).map(indice=>{    
    return arreglo.push(parts[indice].exercises)
  })
  console.log(result);
  const sum = (arreglo).reduce((s,p)=>{
    return s+p
  })
  return <p>Total of {sum} exercises</p>
}
export default Total