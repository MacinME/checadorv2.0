// Import React librarys and components
import { HiChevronDown, HiOutlineSun, HiOutlineLogout } from 'react-icons/hi';
import profileImg from '../assets/profile.png';

export const ProfileAdmin = ({ onShowModal, dispProfile}) => {


  return (
    <div className='user-profile flex items-center gap-3 justify-center border-yellow-700'>
        <div className='text-2xl cursor-pointer'>
          <HiOutlineSun />
        </div>
        <div className='cursor-pointer flex gap-2 items-center justify-center relative' onClick={() => onShowModal(dispProfile) }>
          <img 
              src={ profileImg } 
              alt="Profile Photo" 
              className='w-12 h-12 rounded-full'
          />
          <p className='text-gray-500 text-1xl flex items-center gap-2 justify-center'>Lucas Stuff 
          <HiChevronDown /> </p>

            <ul className={ `userSection rounded py-4 px-5 flex flex-col gap-2 absolute ${ dispProfile.className }`} >
              <li className='list-item__profile w-full justify-center flex items-center gap-2'>
                <p>Cerrar Sesion</p>
                <div className='text-red-600 text-1xl'>
                  <HiOutlineLogout />
                </div>
              </li> 
            </ul>
 
        </div>

    </div>
  )
}
