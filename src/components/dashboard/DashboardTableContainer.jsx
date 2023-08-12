import { HiDatabase } from 'react-icons/hi';
import { DashboardUsersTable, DashboardRegistersTable } from './';
import { FilterProvider } from '../../context';

export const DashboardTableContainer = ({ selectedOption, onModalFilter, modalState, onModal, userState }) => {
  return (
    <FilterProvider>
      <div className="flex flex-col overflow-y-scroll bg-bgc_white-50 dark:bg-dark-900 p-2 h-screen">
          <div className="bg-bgc_white-50 dark:bg-dark-900 rounded-lg h-full">
              {
                selectedOption === 'opt2' 
                  ? <DashboardUsersTable 
                      onModal={ onModal } 
                      userState={ userState } 
                    /> 
                  : selectedOption === 'opt3' 
                  ? <DashboardRegistersTable 
                      onModalFilter={ onModalFilter } 
                      modalState={ modalState } 
                    /> 
                  : <h2 className="text-gray-800 dark:text-gray-300 text-2xl text-center flex justify-center items-center gap-4 mt-60"> <HiDatabase /> Seleccionar base de datos</h2>
              }
          </div>
      </div>
    </FilterProvider>
  )
}
