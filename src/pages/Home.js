import { useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'
import '../styles/styles.css'

const Home = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    gender: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (Object.keys(user.name).length === 0 || user.name.trim() === "") {
      alert("No dejes el campo vacío")
      return
    }

    if (Object.keys(user.lastName).length === 0 || user.lastName.trim() === 0) {
      alert("No dejes el campo vacío")
      return
    }

    setUsers([...users, user])
    setUser({
      name: "",
      lastName: ""
    })
  }

  return (
    <div className="row">
      <div className="column">
        <Form handleSubmit={handleSubmit} handleChange={handleChange} user={user} />
      </div>
      <div className="column">
        <List users={users} setUsers={setUsers} />
      </div>
    </div>
  )
}

export default Home