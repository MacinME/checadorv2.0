// Import React librarys and components
import { HiCheckCircle, HiChevronLeft, HiChevronRight, HiOutlineArrowSmDown, HiOutlineMail, HiUserRemove, HiXCircle} from 'react-icons/hi';
import { users } from './data';
import { SearchField } from './SearchField';
import { ModalUser } from './ModalUser';


const dataTH = [
    {id: 1, name: 'Nombre'}, 
    {id: 2, name: 'Estado'}, 
    {id: 3, name: 'Id Docente'}, 
    {id: 4, name: 'Correo'},
    {id: 5, name: 'Eliminar'}
];

export const TableUsers = ({ onShowModal, userSettings , userInfo}) => {    



  return (
    <div className='bg-bgc_white-100 dark:bg-dark-800 dark:border-gray-700 border rounded-lg px-4'>

        {/* Filter Datas */}
        <div className='w-full flex flex-col gap-2 py-2 px-4 mb-2'>
            <div className='flex items-center gap-5'>
                <p className='text-gray-800 dark:text-gray-300'>Datos Filtrados: <span className='bg-primary text-white p-1 px-3 rounded-full text-sm'>430</span></p>
                <button 
                    onClick={ () => onShowModal(userSettings) }
                    className='w-44 bg-white dark:bg-dark-700 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 border border-gray-300 py-1 px-3 rounded-lg hover:bg-gray-200'
                >
                    { userSettings.status ? 'Usuarios' : 'Configurar usuarios' }
                </button>
                <button className='w-44 bg-white dark:bg-dark-700 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 border border-gray-300 py-1 px-3 rounded-lg hover:bg-gray-200'>
                    Eliminar Todo
                </button>
            </div>
            <SearchField />
        </div>

        {/* Content */}
        {
            userSettings.status
            ?
            <ModalUser userInfo={ userInfo } />
            : 
            <div className="table-section relative">
            <table className="table w-full">
                <thead className='bg-gray-800 sticky top-0 w-full z-10'>
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
                        users.map((user, index) => (
                            <tr key={ user.id } className={ index % 2 === 0? 'bg-bgc_white-50 hover:bg-gray-200 dark:bg-dark-700 dark:hover:bg-gray-900 cursor-pointer' : 'bg-bgc_white-100 hover:bg-gray-200 dark:bg-dark-800 dark:hover:bg-gray-900 cursor-pointer'}>
                            <th>
                                <div className='flex flex-wrap items-center gap-4 py-1'>
                                    <div className={`userPhoto w-10 rounded rounded-full relative ${user.status ? 'bg-yellowColor-800 p-1': null} `}>
                                        <img 
                                            src={ user.img } 
                                            alt={ user.alt }
                                            className='w-12 rounded rounded-full' 
                                        />
                                    </div>
                                    <p className='flex flex-col text-gray-700 dark:text-gray-300'>
                                        { user.name }
                                        <span className='user-rol text-gray-500 dark:text-gray-400 font-normal italic'> { user.rol } </span>
                                    </p>
                                </div>
                            </th>
                            <td>
                                <div className='flex items-center gap-1'>
                                    { user.status ? <span className='bg-green-200 flex items-center gap-2 rounded-full px-3 text-green-600'> <HiCheckCircle /> online </span> : <span className='bg-gray-300 flex items-center gap-2 rounded-full px-3 text-gray-700'> <HiXCircle /> offline </span> }
                                </div>
                            </td>
                            <td> 
                                <span className='flex items-center gap-1'>
                                    <span className='flex items-center gap-2 rounded-full px-3 text-gray-900 bg-gray-300 text-gray-600'> { user.idCEUT } </span>
                                </span>    
                            </td>
                            <td> 
                                <div className='flex items-center gap-3 text-gray-700 dark:text-gray-300'>
                                    <HiOutlineMail />
                                    email@gmail.com
                                </div>
                            </td>
                            <td> 
                                <div className='bg-red-300 w-8 p-1 flex items-center justify-center rounded-lg cursor-pointer'>
                                    <HiUserRemove />
                                </div>
                            </td>
                        </tr>  
                        ))
                    }              
                </tbody>
            </table>
            </div>
        }


        <div className='w-full flex items-center justify-between py-4 px-5 bg-bgc_white-100 dark:bg-dark-800 dark:border-gray-700 border-t border-gray-300 h-24'>
            {
                !userSettings.status && (
                    <>
                        <button className='dark:border-gray-700 border border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800 text-gray-900 flex items-center gap-2 py-2 px-4 rounded-full hover:bg-gray-300'> <HiChevronLeft /> Anterior</button>
                        <div className='grid grid-cols-6 py-2 px-4 gap-4 rounded'>
                            {
                                [{id: 1, status: true},{id: 2, status: false},{id: 3, status: false},{id: 4, status: false},{id: 5, status: false}].map(pag => (
                                    <div 
                                        key={ pag.id }
                                        className={ `${ pag.status ? 'bg-primary text-white' : 'dark:border-gray-700 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-gray-800 border border-gray-300 bg-white text-gray-900'} w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-300 cursor-pointer`}
                                    > { pag.id } </div>
                                ))
                            }
                        </div>
                        <button className='dark:border-gray-700 border border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800 text-gray-900 flex items-center gap-2 py-2 px-4 rounded-full hover:bg-gray-300'>Siguiente <HiChevronRight /> </button>
                    </>
                )
            }
        </div>
          
    </div>
  )
}
