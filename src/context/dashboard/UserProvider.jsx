import { useState } from 'react';
import { UserContext } from './';

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const onGetUserData = async(id) => {
        try {
            const response = await fetch(`http://localhost:8081/users/api/user/${ id }`);
            if(response.ok){
                const { user } = await response.json();
                setUser( user )
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
