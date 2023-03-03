import { useState, useEffect } from 'react'

export default function Fetch () {
  const [users, setUsers] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        setUsers(users)
        setIsFetching(false)
      })
  }, [])

  return (
    <>
      {isFetching && <h1>Cargando consulta...</h1>}
      <ul>
        {
          users.map(user => (
            <li key={user.id}>
              {user.name}
            </li>
          ))
        }
      </ul>
    </>
  )
}
