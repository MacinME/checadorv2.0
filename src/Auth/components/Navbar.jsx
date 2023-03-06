// Import components
import { NavLink } from 'react-router-dom';
import {
    HiOutlineDocumentText,
    HiOutlineDocumentSearch,
    HiOutlineUser,
    HiChevronDown,
    HiChevronRight
} from 'react-icons/hi';
import { useNewModal } from '../Helpers/useNewModal';

export const Navbar = () => {
    
    // useState to toggle a dropdown in Navbar
    const { handleModal, showNewModal } = useNewModal([
        { id: 1, status: false },
        { id: 2, status: false }
    ]);

    const itemOne = showNewModal[0];
    const itemTwo = showNewModal[1];

  return (
    <div className="navbar flex flex-col gap-8 border-r-2 border-gray-200 h-screen">
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
                    <div className='flex gap-2 items-center y-1 px-2' onClick={ () => handleModal(itemOne) }>
                        <HiOutlineDocumentText /> 
                         <div className='flex gap-2 items-center'>
                            <p> Docentes  </p>
                            { itemOne.status ?  <HiChevronRight  /> : <HiChevronDown /> }
                         </div>
                    </div>
                    { itemOne.status && (
                        <ul className="bg-gray-200 rounded rounded-2xl pt-2 pb-2 mt-2">
                            <NavLink className={ ({isActive}) => `${isActive ? 'active' : ''}` } to="/registers-doc"> <div className='py-1 px-2 pl-6'> Registros </div> </NavLink>
                        </ul>
                    )}
                </li>
                <li className="list-item cursor-pointer">
                    <div 
                        className='flex gap-2 items-center y-1 px-2'
                        onClick={ () => handleModal(itemTwo) }
                    >
                        <HiOutlineDocumentText /> 
                        <div className='flex gap-2 items-center'>
                            <p> Administrativo  </p>
                            { itemTwo.status ?  <HiChevronRight /> : <HiChevronDown /> }
                         </div>
                    </div>
                    { itemTwo.status && (
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
