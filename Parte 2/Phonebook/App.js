import React, { useState } from "react";
import ImprimirBusqueda from "./components/ImprimirBusqueda";
import Busqueda from "./components/Buscar";
import AgregarNombre from "./components/AgregarNombre";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", number: "040-123456" },
    { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
    { id: 3, name: "Dan Abramov", number: "12-43-234345" },
    { id: 4, name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setPhone] = useState("");
  const [newSearch, setSearch] = useState("");

  const ImprimirNombres = (event) => {
    event.preventDefault();
    let sinos = Alerta();
    if (sinos) {
      const nuevoObjeto = {
        name: newName,
        number: newPhone,
        id: persons.length + 1,
      };
      console.log("verdadero");
      setPersons(persons.concat(nuevoObjeto));
      setNewName("");
      setPhone("")
    } else {
      console.log("falso");
      setNewName("");
      setPhone("");
    }
    return "";
  };

  const Alerta = () => {
    let sino = false;
    persons.map((indice) => {
      let nombres = [];
      nombres.push(indice.name);
      if (nombres.includes(newName)) {
        window.alert(`${newName} is already in phonebook`);
        sino = false;
      } else {
        sino = true;
      }
      return sino;
    });
    return sino;
  };

  const buscarPersona = (event) => {
    setSearch(event.target.value);
  };

  const cambiarNombre = (event) => {
    setNewName(event.target.value);
  };

  const cambiarTelefono = (event) => {
    setPhone(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Busqueda buscarPersona={buscarPersona} />
      <h2>Add a new</h2>
      <AgregarNombre
        ImprimirNombres={ImprimirNombres}
        newName={newName}
        newPhone={newPhone}
        cambiarNombre={cambiarNombre}
        cambiarTelefono={cambiarTelefono}
      />

      <h2>Numbers</h2>
      <ul>
        <ImprimirBusqueda persons={persons} newSearch={newSearch} />
      </ul>
    </div>
  );
};

export default App;
/*
<form onSubmit={buscarPersona}>
        <div>
          filter show with{" "}
          <input value={newSearch} onChange={cambiarBusqueda} />
        </div>
      </form>

      
        <ImprimirNombres
          Alerta={Alerta}
          persons={persons}
          newName={newName}
          newPhone={newPhone}
          cambiarNombre={cambiarNombre}
          cambiarTelefono={cambiarTelefono}
          CambiarArreglo={CambiarArreglo}
        />
*/
