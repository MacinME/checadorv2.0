import {
    HiOutlineDocument,
    HiOutlineDocumentSearch,
    HiOutlineUser
} from 'react-icons/hi';

import { NavLink } from 'react-router-dom';


export const Navbar = ({ handleToggle, item1, item2 }) => {

  return (
    <div className="navbar flex flex-col gap-8 border-r-2 border-gray-200">
        <h1 className="text-2xl font-bold lowercase text-gray-900 text-center tracking-wider">CEUT Timer</h1>

        <div>
            <ul className="group-item grid gap-6">
                <li className="list-item true">
                    <NavLink to="/users" className={ ({isActive}) => `block ${isActive ? 'active' : ''}` }>
                        <div className="flex gap-2 py-1 px-2 items-center">
                            <HiOutlineUser />
                            <p>Usuarios</p>
                        </div>
                    </NavLink>
                </li>
                <li 
                    className="list-item cursor-pointer"

                > 
                    <div className='flex gap-2 items-center y-1 px-2' onClick={ () => handleToggle(item1) }>
                        <HiOutlineDocument /> 
                         <p> Docentes </p>
                    </div>
                    { item1.status && (
                        <ul className="bg-gray-200 rounded rounded-2xl pt-2 pb-2 mt-2">
                            <NavLink className={ ({isActive}) => `${isActive ? 'active' : ''}` } to="/registers-doc"> <div className='py-1 px-2 pl-6'> Registros </div> </NavLink>
                        </ul>
                    )}
                </li>
                <li className="list-item cursor-pointer">
                    <div 
                        className='flex gap-2 items-center y-1 px-2'
                        onClick={ () => handleToggle(item2) }
                    >
                        <HiOutlineDocument /> 
                         <p> Administrativo </p>
                    </div>
                    { item2.status && (
                        <ul className="bg-gray-200 rounded rounded-2xl pt-2 pb-2 mt-2">
                            <NavLink className={ ({isActive}) => `${isActive ? 'active' : ''}` } to="/registers-admon"> <div className='py-1 px-2 pl-6'> Registros </div> </NavLink>
                        </ul>
                    )}
                </li>
                <li className="list-item">
                    <NavLink to="/formats">
                        <div className="flex gap-2 items-center y-1 px-2">
                            <HiOutlineDocumentSearch />
                            <p>Formatos</p>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}
