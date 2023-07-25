import { useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {

    const [userState, setUserState] = useState({
        logged: false
    });

    const onLogin = ( user ) => {
        setUserState( user );
    }

  return (
    <AuthContext.Provider value={{ userState, onLogin }}>
        { children }
    </AuthContext.Provider>
  )
}
