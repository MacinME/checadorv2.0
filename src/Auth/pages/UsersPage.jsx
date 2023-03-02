import { ProfileAdmin } from "../components/ProfileAdmin"
import { SearchField } from "../components/SearchField"
import { TableUsers } from "../components/TableUsers"


export const UsersPage = () => {
  return (
      <div className="container">
        <div className="title flex items-center mb-10">
          <h1 className="font-bold text-2xl text-gray-800">Users <span className="bg-blue-100 text-sm px-2 py-1 text-blue-500 rounded rounded-3xl font-normal">100 users</span> </h1>
        </div>

          {/* Search Field  */}
          <SearchField />
          
          {/* Table Component */}
          <TableUsers />

          {/* Profile Photo */}
          <ProfileAdmin />   
      </div>
  )
}
