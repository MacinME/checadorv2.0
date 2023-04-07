import { HiDatabase } from "react-icons/hi";

export const SelectDataBase = ({ selectedOption, handleSelectedOption }) => {
  return (
    <div className="flex items-center justify-center"> 
        <HiDatabase className="text-gray-700"/>
        <select value={selectedOption} className="bg-blueColor-50 rounded outline-none focus:border-gray-900 focus:border-1 focus:border-blue-600 focus:rounded-none py-1 px-2 text-gray-700" onChange={ handleSelectedOption }>
            <option value="opt1" disabled>Seleccionar Base de Datos</option>
            <option value="opt2">Consultar Todos los Usuarios</option>
            <option value="opt3">Consultar Registros de Docentes</option>
            <option value="opt4">Consultar Registro de Administrativos</option>
        </select>
    </div>
  )
}
