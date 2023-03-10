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
import { ProfileAdmin } from './ProfileAdmin';

export const Navbar = () => {
    
    // useState to toggle a dropdown in Navbar
    const { handleModal, showNewModal } = useNewModal([
        { id: 1, status: false },
        { id: 2, status: false },
        { id: 3, status: false},
    ]);

    const itemOne = showNewModal[0];
    const itemTwo = showNewModal[1];
    const itemThree = showNewModal[2];

  return (
    <div className="navbar flex flex-col gap-8 border-r border-gray-200 user-settings h-screen">
        <div>
            <ul className="group-item grid gap-6">
                <div className='pb-6 border-b border-gray-300'>
                    {/* Profile Photo */}
                    <ProfileAdmin handleModal={ handleModal } itemThree={ itemThree } />
                </div>
                <li className="list-item">
                    <NavLink to="/users" className={ ({isActive}) => `block ${isActive ? 'bg-primary rounded-lg drop-shadow-sm text-white' : ''}` }>
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
                        <ul className="bg-white drop-shadow-sm rounded rounded-2xl pt-2 pb-2 mt-2">
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
                        <ul className="bg-white rounded-lg  pt-2 pb-2 mt-2">
                            <NavLink className={ ({isActive}) => `${isActive ? 'active' : ''}` } to="/registers-admon"> <div className='py-1 px-2 pl-6'> Registros </div> </NavLink>
                        </ul>
                    )}
                </li>
                <li className="list-item ">
                    <NavLink to="/formats" className={ ({isActive}) => `block ${isActive ? 'bg-primary rounded-lg drop-shadow-sm text-white' : ''}` }>
                        <div className="flex gap-2 py-1 px-2 items-center">
                            <HiOutlineUser />
                            <p>Formatos</p>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}
