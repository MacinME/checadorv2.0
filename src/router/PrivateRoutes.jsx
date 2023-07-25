import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Auth/context/AuthContext';

export const PrivateRoutes = ({ children }) => {

    const { userState } = useContext( AuthContext );
    const { logged } = userState;

  return (logged)
    ? children
    : <Navigate to="/login" />
}
