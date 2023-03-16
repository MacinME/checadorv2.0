// Import React librarys and components
import { HiCheckCircle, HiChevronLeft, HiChevronRight, HiOutlineArrowSmDown, HiOutlineMail, HiXCircle} from 'react-icons/hi';
import { users } from './data'


const dataTH = [
    {id: 1, name: 'Nombre'}, 
    {id: 2, name: 'Estado'}, 
    {id: 3, name: 'Id Docente'}, 
    {id: 4, name: 'Correo'}
];

export const TableUsers = () => {    

  return (
    <div className=''>
      <div className="table-section relative rounded-lg">
        <table className="table w-full">
            <thead className='bg-gray-700 sticky top-0 w-full z-10'>
                <tr>
                    {
                        dataTH.map(({ id, name }) => (
                            <th key={ id }>
                                <div className="flex items-center gap-1 p-3 text-white">
                                    { name  }
                                    <HiOutlineArrowSmDown />
                                </div>
                            </th>
                        ))
                    }
                </tr>
            </thead>

            <tbody>
                {
                    users.map(user => (
                        <tr key={ user.id }>
                        <th>
                            <div className='flex flex-wrap items-center gap-4 py-1'>
                                <div className={`userPhoto w-10 rounded rounded-full relative ${user.status ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1': null} `}>
                                    <img 
                                        src={ user.img } 
                                        alt={ user.alt }
                                        className='w-12 rounded rounded-full' 
                                    />
                                </div>
                                <p className='flex flex-col text-gray-700'>
                                    { user.name }
                                    <span className='user-rol text-gray-500 font-normal italic'> { user.rol } </span>
                                </p>
                            </div>
                        </th>
                        <td>
                            <div className='flex items-center gap-1'>
                                { user.status ? <span className='bg-green-100 flex items-center gap-2 rounded-full px-3 text-green-500'> <HiCheckCircle /> online </span> : <span className='bg-gray-200 flex items-center gap-2 rounded-full px-3 text-gray-700'> <HiXCircle /> offline </span> }
                            </div>
                        </td>
                        <td> 
                            <span className='flex items-center gap-1'>
                                <span className='flex items-center gap-2 rounded-full px-3 text-gray-900 bg-gray-100 text-gray-600'> { user.idCEUT } </span>
                            </span>    
                        </td>
                        <td> 
                            <div className='flex items-center gap-3'>
                                <HiOutlineMail />
                                email@gmail.com
                            </div>
                        </td>
                    </tr>  
                    ))
                }              
            </tbody>
        </table>
    </div>
    <div className='w-full flex items-center justify-between py-4 px-5 bg-bgc_white-50'>
        <button className='border border-gray-300 text-gray-900 flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-700 hover:text-white'> <HiChevronLeft /> Anterior</button>
        <div className='grid grid-cols-6 py-2 px-4 gap-4 rounded'>
            {
                [{id: 1, status: true},{id: 2, status: false},{id: 3, status: false},{id: 4, status: false},{id: 5, status: false}].map(pag => (
                    <div 
                        key={ pag.id }
                        className={ `${ pag.status ? 'border bg-primary text-white' : 'border border-gray-300 bg-white text-gray-900'} w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer`}
                    > { pag.id } </div>
                ))
            }
        </div>
        <button className='border border-gray-300 bg-white text-gray-900 flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white'>Siguiente <HiChevronRight /> </button>
    </div>
          
    </div>
  )
}
