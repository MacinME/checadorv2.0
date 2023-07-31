import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const PublicRoutes = ({ children }) => {

    const { userState } = useContext( AuthContext );
    const { logged , user} = userState;

  return (logged && user?.status)
    ? <Navigate to="/" />
    : children
}
