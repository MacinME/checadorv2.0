import { Link } from 'react-router-dom';
import { GoTriangleUp } from 'react-icons/go';
import { CommonThemeBtn } from '../common';

export const DashboardMenu = () => {
  return (
    <div className="relative flex flex-col gap-1 bg-white dark:bg-dark-800 dark:border-gray-600 border border-gray-300 flex flex-col rounded-lg px-4 py-2">
        <div className="absolute text-xl text-white dark:text-dark-900 -top-3 left-5">
            <GoTriangleUp />
        </div>

        {/* Change Theme */}
        <div className="border-b border-gray-300 dark:border-gray-700">
            <CommonThemeBtn />
        </div>

        <div className="w-full items-center text-lg cursor-pointer rounded" >
            <Link
                to="/checador"
                target="_blank"
                className="w-full block text-gray-800 dark:text-gray-300 text-sm p-2 rounded-lg hover:bg-bgc_white-100 dark:hover:bg-dark-700"
            >   
                Checador
            </Link>
        </div>
    </div>   
  )
}
