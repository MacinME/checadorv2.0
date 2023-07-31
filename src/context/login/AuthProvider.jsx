import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {

    const [userState, setUserState] = useState({
        logged: false,
        user: null
    });

    const onLogin = ( user ) => {
        setUserState( user );
    }

    const handleSingInGoogle = async () => {

      await fetch('http://localhost:8081/api/auth/sigin', {
          method: 'POST',
          headers: {
              'Content-Type': "application/json"
          },        
          credentials: 'include'
      })
      .then( resp => {
          return resp.json()
      })
      .then( data => {
        const user = {
          ...data,
          logged: true
        }
        onLogin( user  )
      })
      .catch( console.error );
  }
  useEffect( () => {
    handleSingInGoogle();
  }, [])

  return (
    <AuthContext.Provider value={{ userState, onLogin }}>
        { children }
    </AuthContext.Provider>
  )
}
