// Import React librarys and components
import { ProfileAdmin, SearchField, TableUsers } from '../components/index';

export const UsersPage = ({handleShowModal, showModal}) => {
  return (
      <div className="container">
        <div className="title flex items-center mb-10">
          <h1 className="font-bold text-2xl text-gray-800">Users <span className="bg-blue-100 text-sm px-2 py-1 text-blue-500 rounded rounded-3xl font-normal">100 users</span> </h1>
        </div>
          {/* Search Field  */}
          <SearchField />

          {/* Table Component */}
          <TableUsers handleShowModal={ handleShowModal } showModal={ showModal }  />

          {/* Profile Photo */}
          <ProfileAdmin />   
      </div>
  )
}
