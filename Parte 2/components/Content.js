import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  console.log(parts);
  console.log(parts[0]);
  return (
    <div>
      {parts.map((partes) => {
          console.log("partes ",partes)
          console.log("partes ",partes.id)
        return (
          <Part
            key={partes.id}
            nombre={partes.name}
            exercise={partes.exercises}
          />
        );
      })}
    </div>
  );
};

export default Content;
