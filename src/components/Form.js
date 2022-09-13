import '../styles/styles.css'

const Form = ({ handleSubmit, handleChange, user }) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" name="name" value={user.name} placeholder="Ingresa un nombre" onChange={handleChange} />
        <input className="input" type="text" name="lastName" value={user.lastName} placeholder="Ingresa su apellido" onChange={handleChange} />
        <select className="input" onChange={handleChange} name="gender">
          <option value="Estado">Género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="No binario">No binario</option>
        </select>
        <button className="btn-save">Guardar</button>
      </form>
    </div>
  )
}

export default Form
