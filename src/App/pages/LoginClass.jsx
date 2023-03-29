
import { RegisterClass } from '../components/RegisterClass';
import logo from '../assets/p3.png'
import { useNewModal } from '../../Auth/Helpers/useNewModal';
import { MenuUser } from '../components/MenuUser';
import { Loading } from '../components/Loading';

export const LoginClass = () => {

  const {showNewModal, handleModal} = useNewModal([
    {id: 1, status: false},
    {id: 2, status: false}
  ]);

  const menuState = showNewModal[0];
  const clockState = showNewModal[1]

  return (
    <div className='bg-blueColor-50 w-screen h-screen grid justify-items-center items-center relative'>
            <div 
              className='absolute top-5 right-5 flex p-2 text-gray-90 cursor-pointer w-auto items-center gap-4'
            >
                <div>
                  <p className='text-gray-600 text-lg'>Ahamd Ekstrom</p>
                  <span className='text-sm text-gray-500 italic'>Docente</span>
                </div>
                <div
                  onClick={ () => handleModal( menuState ) }
                >
                  <img src={ logo } alt="Foto Perfil" className='w-10 rounded-full md:w-14'/>
                </div>
            </div>
        <div className='pt-4 pb-2 px-4 relative xl:rounded-lg md:rounded-lg'>
            <div className='mt-20 tracking-wider'>
              <h2 className='text-gray-500 font-semibold text-center md:text-2xl'> { clockState.status ? 'En clase...' : 'Registrar Clase' }</h2>
            </div>
            {
              clockState.status ? <Loading /> : <RegisterClass clockState={ clockState } handleModal={ handleModal }  />
            }
        </div>
        {
              menuState.status && (
                <MenuUser menuState={ menuState } handleModal={ handleModal } />
              )
        }
    </div>
  )
}
