import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const agregarNombre = (event) => {
    event.preventDefault();
    const nuevoObjeto = {
      name: newName
    };
    setPersons(persons.concat(nuevoObjeto))
    setNewName("");
  };

  const cambiarNombre = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value);
  };

  const ImpriNom = ({persons})=>{
    return (<li>{persons.name}</li>)
  }
  
  console.log("Areglo",persons);

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={agregarNombre}>
        <div>
          name: <input value={newName} onChange={cambiarNombre} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(persona =>
          <ImpriNom key={persona.name} persons={persona}/>)}
      </ul>
    </div>
  );
};

export default App;
