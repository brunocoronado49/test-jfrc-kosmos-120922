import Card from './Card'

const List = ({ users, setUsers }) => {
  return (
    <div className="content">
      {
        users.map((user, index) => (
          <Card key={index} user={user} setUsers={setUsers} users={users} />
        ))
      }
    </div>
  )
}

export default List