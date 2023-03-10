// Import React librarys and components
import { HiChevronDown, HiOutlineLogout, HiOutlineSun, HiPencil } from 'react-icons/hi';
import profileImg from '../assets/profile.png';

export const ProfileAdmin = ({ handleModal, itemThree }) => {

  return (
    <div className='flex flex-col gap-3 justify-center border-yellow-700'> 
        <div className='flex flex-col flex-wrap gap-2 items-center justify-center relative'>
          <img 
              src={ profileImg } 
              alt='Perfil de Administrador' 
              className='w-12 h-12 rounded-full'
          />
          <div 
            onClick={() => handleModal(itemThree) }
            className='cursor-pointer'
          >
            <p className='text-gray-700 text-1xl flex items-center gap-2 justify-center'>Lucas Stuff 
            <HiChevronDown /> </p> 
          </div>
        </div>
        { itemThree.status && (
            <ul className="py-4 px-5 flex flex-col gap-2 bg-white rounded-lg drop-shadow-sm" >
              <li className='w-full flex items-center gap-2 cursor-pointer hover:bg-blueColor-50 p-2 rounded-lg'>
                <p>Tema </p>
                <div className='text-lg'>
                  <HiOutlineSun />
                </div>
              </li> 
              <li className='w-full flex items-center gap-2 cursor-pointer hover:bg-blueColor-50 p-2 rounded-lg '>
                <p>Cerrar Sesion</p>
                <div className='text-red-600 text-lg'>
                  <HiOutlineLogout />
                </div>
              </li> 
            </ul>
          ) }
    </div>
  )
}
