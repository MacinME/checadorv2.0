import { HiSearch } from 'react-icons/hi';

export const DashboardSearchInput = ({ onInputChange, search }) => {
  return (
      <div className="w-full bg-blueColor-50 dark:bg-dark-800 flex items-center rounded-full px-4">
        <div className="text-gray-600 bg-blueColor-50 cursor-pointer dark:text-white dark:bg-dark-800">
            <HiSearch />
        </div>
        <input 
            type="text" 
            name="search" 
            autoComplete="off"
            value={ search }
            onChange={ onInputChange }
            className="w-full bg-blueColor-50 outline-0 py-2 px-5 text-lg tracking-wider font-normal text-gray-500 dark:text-gray-300 tracking-wider dark:bg-dark-800"
            placeholder="Buscar ..."
        />
      </div>
  )
}
