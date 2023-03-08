import img1 from '../assets/p5.png';
import { HiPencil } from 'react-icons/hi'
import { useNewModal } from '../Helpers/useNewModal';

export const UserBackground = ({handleModal, status }) => {

  console.log(status)

  return (
    <div className='p-5 h-auto'>
        <div className='h-44 w-full bg-gradient-to-r from-purple-500 to-pink-500 relative rounded-tl-xl rounded-tr-xl'>
          <div 
            onClick={ () => handleModal( status ) }
            className='h-32 w-32 absolute rounded-full -bottom-16 left-12 flex flex-wrap items-center gap-6 cursor-pointer'
          >
              <div className='relative'>
                <img src={ img1 } alt="user profile settings" className='rounded-full'/>
              </div>
              <div className='text-over w-full h-full rounded-full absolute'>
                <HiPencil />
              </div>
          </div>
      </div>
      <div className='rounded-bl-xl rounded-br-xl w-full pt-24 pb-10 px-12 drop-shadow-user'>
          <div className='font-semibold text-gray-700'>
              <p>Ahamd Ekstrom Bothman</p>
              <span className='italic text-sm font-normal'>Administrativo</span>
          </div>
      </div>
    </div>
  )
}
