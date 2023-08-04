import { HiCalendar, HiOutlinePlus } from 'react-icons/hi';

export const IconAddSubject = ({ handleAddSubject, dayIndex, day }) => {
  return (
    <div className="w-full flex items-center font-bold text-gray-600 tracking-wider dark:text-gray-300 px-3">
        <div className='text-gray-700 dark:text-gray-400'>
            <HiCalendar />
        </div>
        <p className="text-gray-700 dark:text-gray-300 w-24 text-center self-center font-semibold tracking-wider"> { day } </p>
        <button 
            onClick={ (evt) => handleAddSubject( evt, dayIndex ) }
            className="dark:text-gray-200 rounded-lg text-gray-900 hover:bg-dark-900 p-2"
        > <HiOutlinePlus /> </button>
    </div>
  )
}
