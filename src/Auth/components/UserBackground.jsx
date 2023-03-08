import img1 from '../assets/p2.png';
import { HiCheckCircle, HiClipboardList, HiPencil } from 'react-icons/hi'

export const UserBackground = ({handleModal, status }) => {


  return (
    <div className='p-5 pb-0 h-auto'>
        <div className='h-44 w-full bg-gradient-to-b from-orange-200 via-yellow-100 to-amber-200 relative rounded-tl-xl rounded-tr-xl'>
          <div 
            onClick={ () => handleModal( status ) }
            className='h-32 w-32 absolute rounded-full -bottom-16 left-12 flex flex-wrap items-center gap-6 cursor-pointer'
          >
              <div className='relative border border-white border-4 rounded-full'>
                <img src={ img1 } alt="user profile settings" className='rounded-full '/>
                <div className='text-over w-full h-full rounded-full absolute'>
                <HiPencil />
                </div>
              </div>
          </div>
          <div className='font-semibold text-gray-700 -bottom-16 absolute left-48'>
            <p className='text-lg text-gray-900'>Ahamd Ekstrom Bothman</p>
            <span className='italic text-sm font-normal text'>Administrativo</span>
          </div>
      </div>
      <div className='rounded-bl-xl rounded-br-xl w-full pb-10 px-12 drop-shadow-user'>
      <div className='w-full flex gap-4 justify-end mt-6'>
            <button className='border border-blueColor-900 hover:bg-blueColor-600 hover:text-white flex items-center justify-center gap-2 text-gray-800 py-2 px-2 rounded-lg'>
            <div className='text-lg'>
                <HiClipboardList />
              </div>
              3 / 7
            </button>
            <button className='bg-primary hover:bg-blueColor-700 flex items-center justify-center gap-2 text-white py-2 px-4 rounded-lg'>
              <div className='text-lg'>
                <HiCheckCircle />
              </div>
              Cuenta Activada
            </button>
          </div>
      </div>
    </div>
  )
}
