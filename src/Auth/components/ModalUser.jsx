// Import components
import { UserForm } from "../components/index";
import { HiOutlineX } from 'react-icons/hi';

export const ModalUser = ({ onShowModal, disUserModal }) => {

  return (
    <div className={ `modal-user absolute flex justify-center w-full h-screen z-99 ${ disUserModal.className }` }>
        <div className="modal-container rounded-2xl sm:w-auto md:w-auto lg:w-1/3 bg-white my-10 px-10 py-5 flex flex-col justify-center items-center relative">
          <h2 className="font-bold text-2xl mb-8 text-gray-800"> Informacion de Usuario </h2>
          <div>
            {/* Form Component */}
            <UserForm />
          </div>

          <button className="btnModal-close rounded text-2xl w-8 h-8 flex items-center justify-center text-white font-bold absolute" onClick={ () => onShowModal(disUserModal)  }>
            <HiOutlineX />
          </button>

        </div>
    </div>
  )
}
