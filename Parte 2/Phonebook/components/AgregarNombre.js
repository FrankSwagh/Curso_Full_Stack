const agregarNombre = ({
  newName,
  newPhone,
  cambiarNombre,
  cambiarTelefono,
  ImprimirNombres
}) => {
  return (
    <div>
      <form onSubmit={ImprimirNombres}>
        <div>
          name: <input value={newName} onChange={cambiarNombre} />
        </div>
        <div>
          number: <input value={newPhone} onChange={cambiarTelefono} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default agregarNombre;
