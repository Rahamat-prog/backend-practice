import { useState, useEffect } from 'react'

import './App.css'


function App() {
  
const [users, setUsers] = useState([]);

useEffect( () => {
  fetch("http://localhost:3000/api/user")

  .then(res => {
    // console.log("inside res", res)
    return res.json()
  })
  .then(data => {
    // console.log("data", data)
    setUsers(data.data)
  })
  .catch(err => err)
},[])

  return (
   <div>
    <div>My react app</div>

   {users.map((user, index) => (
    <p key={index}>
      {user.name} - {user.age}
    </p>
   ))}
   
   </div>
   
  )
}

export default App
