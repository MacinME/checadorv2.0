import { useEffect, useState } from 'react';
import { HiCheckCircle, HiMinus, HiOutlineArrowSmDown, HiOutlineMail, HiXCircle} from 'react-icons/hi';
import { DashboardPagination, DashboardUserContainer } from './';
import { colorsFrontend, dataTHUsers } from '../../data';

export const DashboardUsersTable = ({ userState, onModal }) => { 

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, serPostPerPage] = useState(20);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(`http://localhost:8081/users/api`);
            const data = await response.json();

            setUsers(data)
        }

        fetchUsers();
    }, []);

    
    const lastIndex = currentPage * postPerPage;
    const firstIndex = lastIndex - postPerPage;
    const dataFiltered = users.slice(firstIndex, lastIndex);

  return (
    <div>
        <div className='bg-blueColor-50 100 dark:bg-dark-800 rounded-lg px-4'>
        {/* Filter Datas */}
        <div className='w-full flex flex-col gap-2 py-2 px-4 mb-2'>
            <div className='flex items-center gap-5'>
                <p className='text-gray-800 dark:text-gray-300'>Datos Filtrados: <span className='bg-primary text-white p-1 px-4 rounded-md text-sm'>{ users.length }</span></p>
            </div>
        </div>

        {/* Content */}
        <div className="table-section relative dark:bg-dark-800">
            <table className="table w-full">
                <thead className="bg-blueColor-50 sticky top-0 w-full z-10 dark:bg-dark-800">
                    <tr>
                        {
                            dataTHUsers.map(({ id, name }) => (
                                <th key={ id }>
                                    <div className="flex items-center gap-1 p-3 text-gray-700 dark:text-gray-300">
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
                        dataFiltered.map((user, index) => (
                            <tr key={ index } className={ index % 2 === 0? 'bg-bgc_white-50 hover:bg-gray-200 dark:bg-dark-700 dark:hover:bg-gray-900 cursor-pointer' : 'bg-bgc_white-100 hover:bg-gray-200 dark:bg-dark-800 dark:hover:bg-gray-900 cursor-pointer'}>
                            <th>
                                <div className='flex flex-wrap items-center gap-4 py-1'>
                                    <div className={`userPhoto w-10 rounded rounded-full relative `}>
                                        <div className={`w-10 rounded rounded-full h-10 flex justify-center items-center ${ colorsFrontend[user.img.color] }`}>
                                            { user.img.letter }
                                        </div>  
                                    </div>
                                    <p className='flex flex-col text-gray-700 dark:text-gray-300'>
                                        { user.name }
                                        <span className='user-rol text-gray-500 dark:text-gray-400 font-normal italic lowercase'> { user.rol } </span>
                                    </p>
                                </div>
                            </th>
                            <td>
                                <div className='flex items-center gap-1'>
                                    { user.status ? <span className='flex items-center gap-2 rounded-full px-3 text-green-600'> <HiCheckCircle /> online </span> : <span className='bg-gray-300 flex items-center gap-2 rounded-full px-3 text-gray-700'> <HiXCircle /> offline </span> }
                                </div>
                            </td>
                            <td> 
                                <span className='flex items-center gap-1'>
                                    <span className='flex items-center gap-2 rounded-full px-3 text-gray-900 bg-gray-200 dark:bg-gray-800 dark:text-gray-300 text-gray-600'> { user.idCeut } </span>
                                </span>    
                            </td>
                            <td> 
                                <div className='flex items-center gap-3 text-gray-700 dark:text-gray-300'>
                                    <HiOutlineMail />
                                    { user.email }
                                </div>
                            </td>
                            <td> 
                                <div className='bg-red-400 w-8 p-1 flex items-center justify-center rounded-lg cursor-pointer'>
                                    <HiMinus />
                                </div>
                            </td>
                        </tr>  
                        ))
                    }              
                </tbody>
            </table>
        </div>
        
        <DashboardPagination totalPosts={ users.length } postPerPage={ postPerPage } setCurrentPage={ setCurrentPage } currentPage={ currentPage }/>
        </div>
        {
            userState.status && (<DashboardUserContainer onModal={ onModal } />)
        }
    </div>

  )
}
