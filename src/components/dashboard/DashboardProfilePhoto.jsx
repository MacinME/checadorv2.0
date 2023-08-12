import { useContext } from 'react';
import Profile from '../../assets/profile.png';
import { AuthContext } from '../../context';

export const DashboardProfilePhoto = () => {

  const { userState } = useContext(AuthContext);
  const { user } = userState;

  return (
    <div className="w-full flex items-center gap-4 justify-center my-5"> 
          <div className="w-8 rounded-full cursor-pointer">
            <img 
                src={ Profile } 
                alt="Perfil de Administrador" 
                className="w-8 rounded-full"
            />
        </div>
        <p className="font-semibold text-gray-800 dark:text-gray-300">{ user.name }</p>
    </div>
  )
}
