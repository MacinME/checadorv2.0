import { useContext, useEffect, useState } from 'react';
import { RegisterContext } from './';
import { AuthContext } from '../login';

export const RegisterProvider = ({ children }) => {

    const [registeredData, setRegisteredData] = useState({});
    const { userState } = useContext(AuthContext);
    const { user } = userState;

    const onGetLastRegister = async( id ) => {
      try {
        const body = { id }
        const resp = await fetch('http://localhost:8081/users/api/lastRegister', {
          method: 'POST',
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify(body)
        });

        if(!resp.ok) return;

        const data = await resp.json();
        setRegisteredData( data )

      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      onGetLastRegister( user.uid );
    }, [])

    const onUpdateData = ( data ) => {
      setRegisteredData( data );
    }

  return (
    <RegisterContext.Provider value={{ registeredData, onUpdateData }}>
        { children }
    </RegisterContext.Provider>
  )
}
