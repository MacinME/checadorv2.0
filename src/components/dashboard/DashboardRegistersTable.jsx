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
    const [postPerPage, serPostPerPage] = useState(10);

    const getAllData = async( evt, state) => {
        evt.preventDefault();
        const data = await onFetchData( state );
        const allData = !!data.registers[0]?.sortedData ? data.registers[0].sortedData  : [];
        onDataFiltered( allData );
        onModalFilter();
    }

    const lastIndex = currentPage * postPerPage;
    const firstIndex = lastIndex - postPerPage;
    const data = dataFiltered.slice(firstIndex, lastIndex);

  return (
    <div>
        <div className="bg-blueColor-50 dark:bg-dark-800 rounded-lg px-4">
            <div className="w-full py-2 px-4 mb-2">
                <p className="text-gray-800 dark:text-gray-300">Datos Filtrados: <span className="bg-primary text-white p-1 px-4 rounded-md text-sm"> { dataFiltered.length } </span></p>
            </div>
            <div className="table-section relative">
                <table className="table w-full">
                    <thead className="dark:bg-dark-800 bg-blueColor-50 dark:border-gray-700 border-b border-gray-300 sticky top-0 w-full z-10">
                        <tr>
                            <>
                                {
                                    dataFiltered.length > 0
                                        && dataTH.map( th => (
                                            dataFiltered[0][th.name] !== null 
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
                            data.map( (reg, index) => (
                                <tr key={ reg.id_Register } className={`hover:bg-blueColor-100 dark:hover:bg-dark-900 cursor-pointer ${ index % 2 === 0 ? "bg-white dark:bg-dark-700" : "bg-blueColor-50 dark:bg-dark-800"}`}>
                                    <th>
                                        <div className="flex items-center flex-wrap gap-2 py-1">
                                            <div className="userPhoto w-10 rounded rounded-full relative">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${ colorsFrontend[reg.img.color] }`}>
                                                    <p className="text-center font-bold text-md">{ reg.img.letter }</p>
                                                </div>
                                            </div>
                                            <p className="flex flex-col text-gray-800 dark:text-gray-300 font-normal">
                                                { reg.name }
                                            </p>
                                        </div>
                                    </th>
                                
                                    {
                                        dataTH.map( th => (
                                            reg[th.name] !== null && th.name !== 'name'
                                                ?  (<td
                                                        key={ th.name }
                                                    >
                                                        <div className={`text-gray-700 dark:text-gray-400 font-normal ${
                                                            th.name === 'tolerance' && Number(reg[th.name]) > 0 ? 'text-red-500 dark:text-red-400' : ''
                                                        }` }>
                                                        { 
                                                            th.name === 'tolerance' || 
                                                            th.name === 'delayedTime'
                                                                ? reg[th.name] + ' min'
                                                                : th.name === 'date' ? new Date(reg[th.name]).toISOString()
                                                                : reg[th.name]
                                                        }
                                                        </div>
                                                    </td>)
                                                : false
                                        )) 
                                    }
                                </tr> 
                            ))
                        }              
                    </tbody>
                </table>
            </div>

            <DashboardPagination totalPosts={ dataFiltered.length } postPerPage={ postPerPage } currentPage={ currentPage } setCurrentPage={ setCurrentPage } />
        </div>
        {
            modalState.status && (<DashboardFilterModal onModalFilter={ onModalFilter } getAllData={ getAllData } />)
        }
    </div>
  )
}
