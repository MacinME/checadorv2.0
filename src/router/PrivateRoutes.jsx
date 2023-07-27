import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Auth/context/AuthContext';

export const PrivateRoutes = ({ children }) => {

    const { userState } = useContext( AuthContext );
    const { logged, user } = userState;

  return (logged && user?.status)
    ? children
    : <Navigate to="/login" />
}
