// Import React librarys and components
import { HiDotsVertical, HiFilter, HiSearch } from 'react-icons/hi';
import { HiWrench } from 'react-icons/hi2';
import { SearchField, TableUsers } from '../components/index';
import { useNewModal } from '../Helpers/useNewModal';

export const UsersPage = ({ onShowModal, disUserModal}) => {

  const { showNewModal, handleModal } = useNewModal([
    {id: 1 , status: false}
  ]);
  
  const stateOptions = showNewModal[0];

  return (
      <div className="container ">
        <div className="title flex items-center mb-10">
          <h1 className="font-bold text-2xl text-gray-800">Users <span className="bg-primary text-sm px-2 py-1 text-white rounded rounded-3xl font-normal">100 users</span> </h1>
        </div>
          {/* Search Field  */}
          <div className='flex items-center mb-5'>
            <div 
              onClick={ () => handleModal(stateOptions) } 
              className='relative'
            >
              <div className='cursor-pointer text-gray-600 hover:text-gray-900'>
                <HiDotsVertical />
              </div>
                {
                  stateOptions.status && (
                  <div className='flex flex-col gap-4 bg-white drop-shadow-lg py-2 px-2 rounded-lg my-2 absolute top-5 z-10 transition-all'>
                  <div className='py-1 px-2 rounded-lg flex items-center gap-4 text-lg cursor-pointer rounded-full hover:bg-blueColor-50'>
                    <div
                      onClick={ () => onShowModal(disUserModal) }
                      className='text-gray-900 text-sm py-2 px-4 rounded-lg flex items-center gap-4'
                    >
                      <HiFilter />
                      <p>Filtrar </p>
                    </div>
                  </div>
                  <div className='py-1 px-2 rounded-lg flex items-center gap-4 text-lg cursor-pointer rounded-full hover:bg-blueColor-50'>
                    <div
                      onClick={ () => onShowModal(disUserModal) }
                      className='text-gray-900 text-sm py-2 px-4 rounded-lg flex items-center gap-4'
                    >
                      <HiWrench />
                      <p>Configuracion </p>
                    </div>
                  </div>
                </div>   
                  )
                }             
            </div>
            <div className='w-full'>
              <SearchField />
            </div>
          </div>

          {/* Table Component */}
          <div className=''>
            <TableUsers onShowModal={ onShowModal } disUserModal={ disUserModal } />
          </div>


      </div>
  )
}
