import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';
import { useFetch } from '../../hooks';

export const CheckerLogoutBtn = () => {

    const { onLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const { onFetchData } = useFetch('http://localhost:8081/api/auth/logout', 'POST');

    const logout = async () => {
        const getData = await onFetchData();
        onLogin(getData);
        navigate('/login');
    }

  return (
    <button
        onClick={ logout }
        className="w-24 py-2 px-4 rounded-xl text-white tracking-wider hover:underline"
    >
        Salir
    </button>
  )
}
