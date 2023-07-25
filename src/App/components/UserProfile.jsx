import { useContext } from 'react'
import logo from '../assets/p3.png'
import { AuthContext } from '../../Auth/context/AuthContext';

export const UserProfile = ({ menuState, handleModal }) => {

  const { userState } = useContext( AuthContext );
  const { user } = userState;

  return (
    <div className='p-2 rounded-lg'>
      <div
        onClick={ () => handleModal( menuState ) }
        className="flex justify-center flex-col items-center gap-2 p-2 cursor-pointer rounded-lg"
      >
        <img src={ logo } alt="Foto de Perfil" className='w-14 rounded-full md:w-20'/>
      </div>
      <p className='text-gray-700 text-center dark:text-gray-200'>{ user.name }</p>
    </div>
  )
}
