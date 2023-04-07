// Import React librarys and components
import profileImg from '../assets/profile.png';

export const ProfileAdmin = () => {

  return (
    <div className='w-full flex justify-center my-5'> 
          {/* Admin Image */}
          <div className='w-8 rounded-full cursor-pointer'>
            <img 
                src={ profileImg } 
                alt='Perfil de Administrador' 
                className='w-8 rounded-full'
            />
        </div>
    </div>
  )
}
