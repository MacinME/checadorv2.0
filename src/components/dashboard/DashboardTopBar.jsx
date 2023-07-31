import { GoTriangleDown } from 'react-icons/go';
import { useNewModal } from '../../hooks';
import { DashboardMenu, DashboardProfilePhoto, DashboardSelectDB } from './';

export const DashboardTopBar = ({ selectedOption, handleSelectedOption }) => {

    const { showModal, onShowModal } = useNewModal([
        {id: 1, className: 'invisible', status: false},
    ]);

    const stateOptions = showModal[0];

  return (
    <div className='bg-blueColor-50 dark:bg-dark-800 dark:border-gray-700 border-b flex items-center gap-5 w-full fixed top-0 z-20 h-12'>
        {/* Profile Admin */}
        <div
            className="relative flex items-center gap-2 ml-6 cursor-pointer"
            onClick={ () => onShowModal(stateOptions)  }
        >   
            <DashboardProfilePhoto /> <GoTriangleDown className={`${ stateOptions.status ? 'text-gray-800 dark:text-gray-400' : 'text-gray-400 dark:text-gray-600' }`} />
        </div>

        {/* Select DataBase */}
        <DashboardSelectDB selectedOption={ selectedOption } handleSelectedOption={ handleSelectedOption }  />

        <div className={`bg-red-100 rounded-lg absolute top-12 left-4 ${ stateOptions.className }`}>
            {/* Menu Options  */}
            <DashboardMenu />
        </div>
    </div>
  )
}
