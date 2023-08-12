import Profile from '../../assets/profile.png';

export const DashboardProfilePhoto = () => {
  return (
    <div className="w-full flex justify-center my-5"> 
          <div className="w-8 rounded-full cursor-pointer">
            <img 
                src={ Profile } 
                alt="Perfil de Administrador" 
                className="w-8 rounded-full"
            />
        </div>
    </div>
  )
}
