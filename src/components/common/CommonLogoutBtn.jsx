import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiLogout } from 'react-icons/hi';
import { AuthContext } from '../../context';
import { useFetch } from '../../hooks';

export const CommonLogoutBtn = () => {

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
        className="w-auto bg-white dark:bg-dark-700 p-1 rounded-xl text-white tracking-wider mt-2 hover:bg-blueColor-50 dark:hover:bg-dark-900"
    >
       <div className="w-12 flex justify-center gap-2 items-center text-md p-1 rounded-md">
          <div className='text-red-500 py-1 rounded-md'>
            <HiLogout />
          </div>
       </div>
    </button>
  )
}
