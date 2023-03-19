// Import React librarys and components
import { ModalUser} from '../components/index';
import { useNewModal } from "../Helpers/useNewModal";
import { RegisterDoc } from './index'
export const MainHome = ({ page }) => {


    // Show Modal
    const { onShowModal, showModal } = useNewModal([
        {id: 1, className: 'invisible', status: false },
    ]);

    const disUserModal = showModal[0];

  return (
    <>
        <div className="main-section relative">
            
            <div className="container-section relative w-screen h-screen">
                {/* Main Page */}
                <RegisterDoc onShowModal={ onShowModal } disUserModal={ disUserModal }  /> 
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
