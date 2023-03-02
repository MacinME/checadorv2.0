
import { TableRegisterDoc } from '../components/index';

export const RegisterDoc = () => {
  return (
      <div className="container">
        <div className="title flex items-center mb-16">
          <h1 className="font-bold text-2xl text-gray-800">Registro Docentes <span className="bg-blue-100 text-sm px-2 py-1 text-blue-500 rounded rounded-3xl font-normal">100 users</span> </h1>
        </div>
          {/* Table Component */}
          <TableRegisterDoc />
      </div>
  )
}
