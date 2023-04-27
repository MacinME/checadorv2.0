import { HiSearch } from 'react-icons/hi';

export const SearchField = () => {
  return (
      <div className="w-full flex items-center rounded-full">
          <input 
              type="text" 
              name="seach" 
              className="w-full bg-transparent outline-0 py-2 px-5 text-lg tracking-wider font-normal text-gray-500 dark:text-gray-300 dark:border-gray-900 tracking-wider border-b"
              placeholder="Buscar ..."
          />
      </div>
  )
}
