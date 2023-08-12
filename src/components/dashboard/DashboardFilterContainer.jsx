import { HiFilter, HiUser } from 'react-icons/hi';

export const DashboardFilterContainer = ({ onShowModal, onModalFilter }) => {
  return (
    <div className="pt-4 relative bg-blueColor-50 dark:bg-dark-800">
        <div className="">
            <div className="flex items-center flex-col gap-2 bg-blueColor-50 dark:bg-dark-800 mt-1 mx-3 px-2 rounded-lg h-screen"> 
              <button
                onClick={ () => onShowModal() }
                className="bg-gray-200 dark:bg-dark-700 w-12 flex items-center justify-center rounded-md py-2 hover:bg-gray-300 dark:hover:bg-dark-900 dark:text-gray-200"
              >
                <HiUser />
              </button>
              <button
                onClick={ () => onModalFilter() }
                className="bg-gray-200 dark:bg-dark-700 w-12 flex items-center justify-center rounded-md py-2 hover:bg-gray-300 dark:hover:bg-dark-900 dark:text-gray-200"
              >
                <HiFilter />
              </button>
            </div>
        </div>
    </div>
  )
}
