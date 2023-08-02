import { useState } from 'react';
import { UserContext } from './';

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const onGetUserData = async(id) => {
        try {
            const response = await fetch(`http://localhost:8081/users/api/user/${ id }`);
            if(response.ok){
                const data = await response.json();
                setUser( data )
            }
            
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <UserContext.Provider value={{ onGetUserData, user }}>
        { children }
    </UserContext.Provider>
  )
}