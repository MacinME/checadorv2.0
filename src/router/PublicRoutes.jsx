import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Auth/context/AuthContext';

export const PublicRoutes = ({ children }) => {

    const { userState } = useContext( AuthContext );
    const { logged } = userState;

  return (logged)
    ? <Navigate to="/" />
    : children
}
