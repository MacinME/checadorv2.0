import { HiCalendar, HiOutlinePlus } from 'react-icons/hi';

export const DashboardIconAddSubject = ({ handleAddSubject, dayIndex, day }) => {
  return (
    <div className="w-full border-b dark:border-gray-700 botder-gray-600 flex items-center font-bold text-gray-600 tracking-wider dark:text-gray-300 px-3 rounded">
        <div className='text-gray-700 dark:text-gray-400'>
            <HiCalendar />
        </div>
        <p className="text-gray-700 dark:text-gray-300 w-24 text-center self-center font-semibold tracking-wider"> { day } </p>
        <button 
            onClick={ (evt) => handleAddSubject( evt, dayIndex ) }
            className="dark:text-gray-200 rounded-lg text-gray-900 hover:bg-blueColor-100 dark:hover:bg-dark-900 p-2"
        > <HiOutlinePlus /> </button>
    </div>
  )
}
