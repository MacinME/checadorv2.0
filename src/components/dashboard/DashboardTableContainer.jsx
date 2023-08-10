import { HiDatabase } from 'react-icons/hi';
import { DashboardUsersTable, DashboardRegistersTable } from './';
import { FilterProvider } from '../../context';

export const DashboardTableContainer = ({ selectedOption, onModalFilter, modalState }) => {
  return (
    <FilterProvider>
      <div className='flex flex-col overflow-y-scroll bg-bgc_white-50 dark:bg-dark-900 p-2 h-screen'>
          <div className='bg-bgc_white-50 dark:bg-dark-900 rounded-lg h-full'>
              {
                  selectedOption === 'opt2' ? <DashboardUsersTable /> : selectedOption === 'opt3' ? <DashboardRegistersTable onModalFilter={ onModalFilter } modalState={ modalState } /> : selectedOption === 'opt4' ? <div className='text-center mt-48 text-2xl text-gray-700'>Datos Administrativos</div> : <h2 className='text-gray-800 dark:text-gray-300 text-2xl text-center flex justify-center items-center gap-4 mt-60'> <HiDatabase /> Selecciona una base de datos</h2>
              }
          </div>
      </div>
    </FilterProvider>
  )
}
