import { useContext, useEffect, useState } from 'react';
import { RegisterContext } from './';
import { AuthContext } from '../login';
import { useFetch } from '../../hooks';

export const RegisterProvider = ({ children }) => {

    const [registeredData, setRegisteredData] = useState({});
    const { userState } = useContext(AuthContext);
    const { user } = userState;
    const { onFetchData } = useFetch('http://localhost:8081/registers/last', 'POST');

    const onGetLastRegister = async( id ) => {
      const data = { id }
      const getData = await onFetchData( data );
      setRegisteredData( getData );
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
