import { useContext } from 'react';
import { HiCheckCircle, HiClipboardList } from 'react-icons/hi';
import Background from '../../assets/fondo.png';
import { UserContext } from '../../context/dashboard/UserContext';
import { colorsFrontend } from '../../data';

export const DashboardUserBackground = ({ handleModal, status, userInfo }) => {

    const { user } = useContext(UserContext);
    const { oneUser }= !!user && user;
  
  return (
    <div className='bg-blueColor-50 dark:bg-dark-800 rounded-lg'>
      <div className='h-20 w-full bg-blueDarkColor-700 relative rounded-lg'>
        <div 
            // onClick={ () => handleModal( status ) }
            className='h-32 w-32 absolute rounded-full -bottom-16 left-12 flex flex-wrap items-center gap-6 cursor-pointer'
        >
            {/* <div className='relative dark:border-dark-800 border border-white border-4 rounded-full'>
                <img src={ userInfo.img } alt={ userInfo.alt } className='rounded-full '/>
                <div className='text-over w-full h-full rounded-full absolute'>
                <HiPencil />
                </div>
            </div> */}
            <div className={`userPhoto rounded rounded-full relative border-4 dark:border-dark-800 `}>
                <div className={`xl:w-24 sm:w-20 rounded rounded-full xl:h-24 sm:h-20 flex justify-center items-center text-3xl ${ colorsFrontend[oneUser.img.color] }`}>
                    { oneUser.img.letter }
                </div>  
            </div>
        </div>
      <div className='font-semibold text-gray-700 -bottom-16 absolute left-40'>
          <p className='text-lg text-gray-800 dark:text-gray-300'> { oneUser.name } </p>
          <span className='italic text-sm font-normal text-gray-800 dark:text-gray-400'>{ oneUser.rol }</span>
      </div>

      {/* CEUT BACKGROUND */}
      <div className='background flex items-center gap-2 text-white xl:text-3xl font-bold tracking-wider text-lg text-center absolute'>
        <img 
            src={ Background } 
            alt="Logo CEUT" 
        />
      </div>
      </div>
      <div className='rounded-bl-xl rounded-br-xl w-full pb-10 px-12'>
          <div className='w-full flex gap-4 justify-end mt-6'>
              <button className='dark:border-gray-700 dark:text-gray-300 border flex items-center justify-center gap-2 text-gray-800 py-2 px-2 rounded-lg'>
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