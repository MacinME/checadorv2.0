import { useState } from 'react';
import { UserContext } from './';

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const onGetUserData = async(id) => {
        try {
            const response = await fetch(`http://localhost:8081/users/user/${ id }`);
            if(response.ok){
                const { user } = await response.json();
                setUser( user )
            }
            
        } catch (error) {
            console.log(error);
        }

    }

    const onRemoveUser = () => {
        setUser(null)
    }

  return (
    <UserContext.Provider value={{ onGetUserData, onRemoveUser, user }}>
        { children }
    </UserContext.Provider>
  )
}
