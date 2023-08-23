import { useState } from 'react';
import { AlertContext } from './AlertContext';

export const AlertProvider = ({ children }) => {

    const [showAlert, setshowAlert] = useState({
        type: '',
        display: false,
        message: '',
    })

    const onDisplayAlert = (obj) => {
        setshowAlert(obj);
    }

  return (
    <AlertContext.Provider value={ { onDisplayAlert, showAlert } } >
        { children }
    </AlertContext.Provider>
  )
}
