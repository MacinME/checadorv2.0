// Import React librarys and components
import profileImg from '../assets/profile.png';

export const ProfileAdmin = () => {

  return (
    <div className='flex flex-col gap-3 justify-center border-yellow-700'> 
        <div className='flex gap-2 items-center justify-center'>
          <span className='bg-green-500 rounded-full h-2 w-2 flex items-center justify-center text-white text-sm'>
              &nbsp;
          </span>

          <div className='rounded-full'>
            <img 
                src={ profileImg } 
                alt='Perfil de Administrador' 
                className='w-10 h-10 rounded-full border-2'
            />

          </div>
          <div 
            className='cursor-pointer'
          >
            <p className='text-gray-800 text-md flex items-center gap-2 justify-center'>Lucas Stuff</p> 
          </div>
        </div>
    </div>
  )
}
