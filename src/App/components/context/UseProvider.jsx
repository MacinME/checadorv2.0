import React, { useState } from 'react'
import { LoginContext } from './UseContext'

export const UseProvider = ({ children }) => {

    const [userAuthentication, setUserAuthentication] = useState(false)

  return (
    <LoginContext.Provider value={ { userAuthentication , setUserAuthentication } } >
        { children }
    </LoginContext.Provider>
  )
}
