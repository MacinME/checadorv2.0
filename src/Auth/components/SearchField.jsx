import { HiSearch } from 'react-icons/hi';

export const SearchField = () => {
  return (

        <div className="w-full flex items-center mb-5 rounded bg-white">
            
            <input 
                type="text" 
                name="seach" 
                className="w-full outline-0 py-2 px-5 text-lg tracking-wider font-normal text-gray-500 tracking-wider rounded"
                placeholder="Buscar usuarios......."
            />

            <div className='w-24 flex justify-center text-1xl cursor-pointer'>
                <HiSearch />
            </div>


        </div>

  )
}
