import { DashboardBar } from './DashboardBar';
import { DashboardFilter } from './DashboardFilter';

export const DashboardFilterModal = ({ onModalFilter, getAllData }) => {
  return (
    <div className="w-screen h-screen backdrop-brightness-50 absolute flex justify-center -top-12 left-0 z-30">
        <div className="py-8 px-10 bg-white dark:bg-dark-700 w-1/2 h-2/3 rounded-xl mt-24 relative">
          <h2 className="text-gray-700 dark:text-white text-md text-center mb-5 tracking-wider">Filtrar datos de usuario</h2>
          <DashboardFilter 
            getAllData={ getAllData } 
          />
          <DashboardBar onModalFilter={ onModalFilter} />
        </div>
    </div>
  )
}
