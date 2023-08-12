import { HiOutlineArrowSmDown } from 'react-icons/hi';
import { colorsFrontend, dataTH } from '../../data';
import { useFetch } from '../../hooks/useFetch';
import { useContext, useState } from 'react';
import { DashboardFilterModal } from './DashboardFilterModal';
import { FilterContext } from '../../context';
import { DashboardPagination } from './DashboardPagination';


export const DashboardRegistersTable = ({ onModalFilter, modalState}) => {

    const { onFetchData } = useFetch('http://localhost:8081/users/api/registers', 'POST');
    const { dataFiltered, onDataFiltered } = useContext(FilterContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, serPostPerPage] = useState(5);

    const getAllData = async( evt, state) => {
        evt.preventDefault();
        const { registers } = await onFetchData( state );
        onDataFiltered( registers );
        onModalFilter();
    }
    let total = 0;

    dataFiltered.map((item) => {
        total += item.allData.length
    })

  return (
    <div>
        {/* Registers Table */}
        <div className="bg-blueColor-50 dark:bg-dark-800 rounded-lg px-4">
            <div className="w-full py-2 px-4 mb-2">
                <p className="text-gray-800 dark:text-gray-300">Datos Filtrados: <span className="bg-primary text-white p-1 px-4 rounded-md text-sm"> { total } </span></p>
            </div>
            <div className="table-section relative">
                <table className="table w-full">
                    <thead className="dark:bg-dark-800 bg-blueColor-50 dark:border-gray-700 border-b border-gray-300 sticky top-0 w-full z-10">
                        <tr>
                            <>
                                <th>
                                    <div className="flex items-center gap-1 p-3 text-gray-700 dark:text-gray-300">
                                        Nombre
                                    <HiOutlineArrowSmDown />
                                </div>
                                </th>
                                {
                                    dataTH.map( th => (
                                        dataFiltered[0]?.allData[0][th.name] !== null 
                                            &&  (<th key={ th.name }>
                                                    <div className="flex items-center gap-1 p-3 text-gray-700 dark:text-gray-300">
                                                        { th.field }
                                                        <HiOutlineArrowSmDown />
                                                    </div>
                                                </th>)
                                    )) 
                                }
                            </>    
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataFiltered.map( (register) => (
                                register.allData.map( (reg, index) => (
                                    <tr key={ reg.id_Register } className={ index % 2 === 0 ? "bg-white dark:bg-dark-700 dark:hover:bg-gray-900 cursor-pointer" : "bg-blueColor-50 dark:bg-dark-800 dark:hover:bg-gray-900 cursor-pointer"}>
                                        <th>
                                            <div className="flex items-center flex-wrap gap-2 py-1">
                                                <div className="userPhoto w-10 rounded rounded-full relative">
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${ colorsFrontend[register.img.color] }`}>
                                                        <p className="text-center font-bold text-md">{ register.img.letter }</p>
                                                    </div>
                                                </div>
                                                <p className="flex flex-col text-gray-800 dark:text-gray-300 font-normal">
                                                    { register.name }
                                                </p>
                                            </div>
                                        </th>
                                    
                                        {
                                            dataTH.map( th => (
                                                reg[th.name] !== null 
                                                ?  (<td key={ th.name }>
                                                        <div className="text-gray-700 dark:text-gray-400 font-normal">
                                                        { reg[th.name] }
                                                        </div>
                                                    </td>)
                                                : false
                                            )) 
                                        }
                                    </tr>  
                                ))
                            ))
                        }              
                    </tbody>
                </table>
            </div>

            <DashboardPagination totalPosts={ total } postPerPage={ postPerPage } currentPage={ currentPage } setCurrentPage={ setCurrentPage } />
        </div>
        {
            modalState.status && (<DashboardFilterModal onModalFilter={ onModalFilter } getAllData={ getAllData } />)
        }
    </div>
  )
}
