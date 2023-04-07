import { HiCheckCircle, HiClipboardList, HiPencil } from 'react-icons/hi';
import logo from '../assets/fondo.png';

export const UserBackground = ({ handleModal, status, userInfo }) => {
  
  return (
    <div className='bg-blueColor-50 rounded-lg'>
      <div className='h-44 w-full bg-blueDarkColor-700 relative'>
      <div 
          onClick={ () => handleModal( status ) }
          className='h-32 w-32 absolute rounded-full -bottom-16 left-12 flex flex-wrap items-center gap-6 cursor-pointer'
      >
          <div className='relative border border-white border-4 rounded-full'>
              <img src={ userInfo.img } alt={ userInfo.alt } className='rounded-full '/>
              <div className='text-over w-full h-full rounded-full absolute'>
              <HiPencil />
              </div>
          </div>
      </div>
      <div className='font-semibold text-gray-700 -bottom-16 absolute left-48'>
          <p className='text-lg text-gray-900'> { userInfo.name } </p>
          <span className='italic text-sm font-normal text'>{ userInfo.rol }</span>
      </div>

      {/* CEUT BACKGROUND */}
      <div className='background flex items-center gap-2 text-white xl:text-3xl font-bold tracking-wider text-lg text-center absolute'>
          <img src={ logo } alt="" />
      </div>
      </div>
      <div className='rounded-bl-xl rounded-br-xl w-full pb-10 px-12'>
          <div className='w-full flex gap-4 justify-end mt-6'>
              <button className='border flex items-center justify-center gap-2 text-gray-800 py-2 px-2 rounded-lg'>
                  <div className='text-lg'>
                      <HiClipboardList />
                  </div>
                  3 / 7
              </button>
              <button className='bg-yellowColor-800 flex items-center justify-center gap-2 text-gray-900 py-2 px-4 rounded-lg'>
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
