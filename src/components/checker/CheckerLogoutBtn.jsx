import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';

export const CheckerLogoutBtn = () => {

    const { onLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {

        try {
            const response = await fetch('http://localhost:8081/api/auth/logout', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                credentials: 'include'
            });
            if(response.ok){
                const data = await response.json();
                onLogin( data );
                navigate('/login');
            } else {
                console.log("Logout failed " + response.status );
            }
        } catch (error) {
            console.log(error);
        }
        
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
