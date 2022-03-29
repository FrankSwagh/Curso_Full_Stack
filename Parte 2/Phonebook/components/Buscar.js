import React from "react";

const Busqueda = ({ buscarPersona }) => {
  return (
    <div>
      filter shown with <input onChange={buscarPersona} />
    </div>
  );
};
export default Busqueda;
