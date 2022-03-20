import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
  const [newName, setNewName] = useState("");

  const agregarNombre = (event) => {
    event.preventDefault();
    let sinos = Alerta()
    if (sinos) {
      console.log(sinos);
      const nuevoObjeto = {
        name: newName,
        id: persons.length + 1,
      };
      console.log("verdadero");
      setPersons(persons.concat(nuevoObjeto));
      setNewName("");
    } else {
      console.log("falso");
      setNewName("");
    }
  };

  const cambiarNombre = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  };

  const ImpriNom = ({ persona }) => {
    return <li>{persona.name}</li>;
  };

  const Alerta = () => {
    let sino = false;
    persons.map((indice) => {
      const nombres = [];
      nombres.push(indice.name);
      if (nombres.includes(newName)) {
        window.alert(`${newName} is already in phonebook`);
        sino = false;
      }else{
        sino =true
      }
      return sino;
    });
    return sino;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={agregarNombre}>
        <div>
          <Alerta nom={newName} />
          name: <input value={newName} onChange={cambiarNombre} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((persona) => (
          <ImpriNom key={persona.id} persona={persona} />
        ))}
      </ul>
    </div>
  );
};

export default App;
