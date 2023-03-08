// Import React librarys and components
import { SearchField, TableUsers } from '../components/index';

export const UsersPage = ({ onShowModal, disUserModal}) => {

  return (
      <div className="container ">
        <div className="title flex items-center mb-10">
          <h1 className="font-bold text-2xl text-gray-800">Users <span className="bg-blue-100 text-sm px-2 py-1 text-blue-500 rounded rounded-3xl font-normal">100 users</span> </h1>
        </div>
          {/* Search Field  */}
          <div className='mb-5'>
            <SearchField />
          </div>

          {/* Table Component */}
          <TableUsers onShowModal={ onShowModal } disUserModal={ disUserModal } />

      </div>
  )
}
