import { useContext } from 'react';
import { HiCheckBadge } from 'react-icons/hi2';
import { UserContext } from '../../context/dashboard/UserContext';
import { colorsFrontend } from '../../data';
import Background from '../../assets/fondo.png';

export const DashboardUserBackground = () => {

    const { user } = useContext(UserContext);
    const isActive = user.status;
  
  return (
    <div className="bg-white dark:bg-dark-700">
      <div className="h-32 w-full bg-blueDarkColor-700 relative mb-20">
        <div className="h-32 w-32 absolute rounded-full -bottom-16 left-12 flex flex-wrap items-center gap-6 cursor-pointer">
            <div className="userPhoto rounded rounded-full relative border-4 border-white dark:border-dark-700">
                <div className={`sm:w-20 sm:h-20 rounded rounded-full xl:h-20 xl:w-20 flex justify-center items-center text-3xl ${ colorsFrontend[user.img.color] }`}>
                    { user.img.letter }
                </div>  
            </div>
        </div>

        <div className="font-semibold text-gray-700 -bottom-20 absolute left-40">
            <p className="text-lg text-gray-800 dark:text-gray-300 relative"> { user.name } </p>
            <div className="flex items-center gap-2">
                <span className="text-md font-semibold text-gray-500 dark:text-gray-400 lowercase">{ user.rol }</span>
                <p className="text-red-400 rounded-full">{ isActive ? <HiCheckBadge className="text-primary text-xl absolute top-0 -right-6" /> : 'Cuenta desactivada' }</p>
            </div>
        </div>

        <div className="background flex items-center gap-2 text-white xl:text-3xl font-bold tracking-wider text-lg text-center absolute">
            <img 
                src={ Background } 
                alt="Logo CEUT" 
            />
        </div>
      </div>
    </div>
  )
}
