// Import React librarys and components
import { HiCheckCircle, HiChevronLeft, HiChevronRight, HiOutlineArrowSmDown, HiXCircle} from 'react-icons/hi';
import { users } from './data'

export const TableUsers = () => {    

  return (
    <>
      <div className="table-section border border-gray-200 bg-white rounded-lg p-5 overflow-y-scroll">
        <table className="table w-full">
            <thead>
                <tr>
                    <td className="text-gray-900">
                        <input type="checkbox" name='1292'/>
                        
                    </td>
                    <th>
                        <div className="flex items-center gap-1 p-3 text-gray-900">
                            Nombre
                            <HiOutlineArrowSmDown />
                        </div>
                    </th>
                    <th>
                        <div className="flex items-center p-3 text-gray-900">
                            Estado
                            <HiOutlineArrowSmDown />
                        </div>
                    </th>
                    <th>
                        <div className="flex items-center p-3 text-gray-900">
                            ID Docente
                            <HiOutlineArrowSmDown />
                        </div>
                    </th>
                    <th>
                        <div className="flex items-center p-3 text-gray-900">
                            Correo
                            <HiOutlineArrowSmDown />
                        </div>
                    </th>
                </tr>
            </thead>

            <tbody>

                {
                    users.map(user => (
                        <tr key={ user.id }>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <th>
                            <div className='flex flex-wrap gap-4 py-3'>
                                <div className='userPhoto w-12 rounded rounded-full relative'>
                                    <img 
                                        src={ user.img } 
                                        alt={ user.alt }
                                        className='w-12 rounded rounded-full' 
                                    />
                                </div>
                                <p className='flex flex-col'>
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
                                <span className='bg-blueColor-100 flex items-center gap-2 rounded-full px-3 text-gray-900'> { user.idCEUT } </span>
                            </span>    
                        </td>
                        <td>email@gmail.com</td>
                    </tr>  
                    ))
                }              
            </tbody>
        </table>
    </div>
    <div className='w-full flex items-center justify-between py-4 px-5 bg-white border-b border-l border-r rounded-lg'>
        <button className='bg-gray-600 text-white flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-700'> <HiChevronLeft /> Anterior</button>
        <div className='grid grid-cols-6 bg-white py-2 px-4 gap-4 rounded'>
            {
                [{id: 1, status: true},{id: 2, status: false},{id: 3, status: false},{id: 4, status: false},{id: 5, status: false}].map(pag => (
                    <div 
                        key={ pag.id }
                        className={ `${ pag.status ? 'border border-gray-600 bg-white text-gray-900' : 'bg-gray-600 text-white'} w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer`}
                    > { pag.id } </div>
                ))
            }
        </div>
        <button className='bg-gray-600 text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-700'>Siguiente <HiChevronRight /> </button>
    </div>
    </>
  
  )
}
