import { Link } from 'react-router-dom'

export const MenuOptions = () => {

    const menuItems = [
        {
            text: 'Usuarios',
        }, 
        {
            text: 'Tema',
        },
        {
            text: 'Configuracion',
        },
        {
            text: 'Checador',
            navigate: '/register'
        },
        {
            text: 'Cerrar Sesion',
            navigate: '/logout'
        }
        
    ]

  return (
    <div className='bg-white border border-gray-300 flex flex-col rounded-lg px-4 py-2'>
        {
            menuItems.map( item => (

                <div key={item.text} className='flex items-center text-lg cursor-pointer rounded-full'>
                    <Link
                        to={ item?.navigate ? item.navigate : '#' }
                        target="_blank"
                        className='w-full text-gray-900 text-sm p-2 rounded-lg hover:bg-gray-100'
                    >   
                        { item.text }
                    </Link>
                </div>

            ))
        }
    </div>   
  )
}
