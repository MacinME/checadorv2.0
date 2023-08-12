import { useContext } from 'react';
import { AuthContext } from '../context';
import { LoginLoader } from '../components';

export const PrivateAuth = ({ children }) => {

    const { userState } = useContext( AuthContext );
    const { user } = userState;

    const isAdministrator = ( user ) => {
        return user && user.rol === 'ADMINISTRADOR';
    }

    const loadingUser = (user) => {
        if(user === null || user.rol !== 'ADMINISTRADOR'){  
            return <LoginLoader />
        }
    }

    return (isAdministrator(user))
    ? children
    : loadingUser(user)
}
