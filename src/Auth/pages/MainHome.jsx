// Import React librarys and components
import { ModalUser, Navbar, ProfileAdmin} from '../components/index';
import { useNewModal } from "../Helpers/useNewModal";
import { Formats, RegisterAdmon, RegisterDoc, UsersPage } from './index'
export const MainHome = ({ page }) => {


    // Show Modal
    const { onShowModal, showModal } = useNewModal([
        {id: 1, className: 'invisible', status: false },
        {id: 2, className: 'invisible', status: false }
    ]);

    const disUserModal = showModal[0];
    const dispProfile = showModal[1];

  return (
    <>
        <div className="main-section relative overflow-hidden">

            {/* Navbar Component */}
            <Navbar />

            <div className="container-section">
                {/* Registers Docentes */}
                { page === 1 && <UsersPage onShowModal={ onShowModal } disUserModal={ disUserModal } /> } 
                
                {/* Registers Docentes */}
                { page === 2 && <RegisterDoc /> }

                {/* Registers Docentes */}
                { page === 3 && <RegisterAdmon /> }

                {/* Registers Docentes */}
                { page === 4 && <Formats /> }

                {/* Profile Photo */}
                <ProfileAdmin onShowModal={ onShowModal } dispProfile={ dispProfile } />
            </div>

            {/* Modal User */}\
            {
                disUserModal.status && (
                    <ModalUser onShowModal={ onShowModal } disUserModal={ disUserModal } />
                )
            }

        </div>
    </>
  )
}
