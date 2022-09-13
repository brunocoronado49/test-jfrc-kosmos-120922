import '../styles/styles.css'

const Card = ({ user, index, setUsers, users }) => {
  const deleteUser = (uid) => {
    const newUsers = [...users]
    newUsers.splice(uid, 1)
    setUsers(newUsers)
  }

  return (
    <div className="card">
      <div className="container">
        <h2 className="userInfo">{user.name} {user.lastName}</h2>
        <h3 className="userGender">{user.gender}</h3>
        <button className="btn-delete" onClick={() => deleteUser(index)}>Eliminar</button>
      </div>
    </div>
  )
}

export default Card