import img1 from '../assets/p1.png'

export const UserBackground = () => {
  return (
    <div className='h-44 w-full bg-gradient-to-r from-purple-500 to-pink-500 relative rounded'>
        <div className='h-32 w-32 absolute rounded-full -bottom-16 left-12 flex flex-wrap items-center gap-6'>
            <img src={ img1 } alt="user profile settings" className='rounded-full'/>
            <div className='absolute -right-52 top-16 font-semibold text-gray-700'>
                <p>Ahamd Ekstrom Bothman</p>
                <span className='italic text-sm font-normal'>Administrativo</span>
            </div>
        </div>
    </div>
  )
}
