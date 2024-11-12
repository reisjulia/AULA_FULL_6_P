import React, { useEffect, useState } from "react";

function ListaDeUsuarios(){
  
        const [users, setRepos] = useState([])

        useEffect(() => {
          const fetchRepos = async () => {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await users.json()
            setRepos(data)
          }
      
          fetchRepos()
        })
      
        return (
          <div className="App">
            <h1>Lista de Usuários</h1>
            <ul>
              {users.map(user => {
                return (
                  <li key={user.id}>
                    <span>{user.name}</span> | <span>{user.email}</span> | <span>{user.username}</span>  |
                 </li>
                )
              })}
            </ul>
          </div>
        );
}

export default ListaDeUsuarios