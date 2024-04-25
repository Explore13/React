import React from 'react'
import userContext from './UserContext'
import { useState } from 'react'

function UserContextProvider({children}) {
  const [User, setUser] = useState('')

  return (
    <userContext.Provider value={{User,setUser}}>
      {children}
    </userContext.Provider>
  )
}

export default UserContextProvider