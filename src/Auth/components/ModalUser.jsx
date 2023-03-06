// Import components
import { SearchField } from "../components/index";
import { HiOutlineX } from 'react-icons/hi';
import { UserBackground } from "./UserBackground";
import { PersonalInformation } from "./PersonalInformation";
import { users } from '../components/data';

export const ModalUser = ({ onShowModal, disUserModal }) => {

  return (
    <div className={ `modal-user absolute flex justify-center w-full h-screen z-99 overflow-hidden ${ disUserModal.className }` }>
        <div className="modal-container rounded-2xl w-screen bg-white my-5 mx-10 flex justify-between relative overflow-hidden">
          {/* users Scroll section */}
          <div className="w-1/3 rounded-tl-2xl rounded-bl-2xl ">
              <div className=" justify-center items-end mt-5 h-auto px-5">
                    <SearchField />
              </div>
              <div className="users-section flex flex-col gap-3 p-8 overflow-y-scroll h-full text-gray-800">
                    {
                      users.map( user => (
                        <div key={ user.id } className="users-section-profile flex gap-4 items-center">
                          <div className="w-10 h-10 rounded-full">
                            <img src={ user.img } alt={ user.alt } className="rounded-full" />
                          </div>
                          <p className="font-semibold text-sm"> { user.name } </p>
                        </div>
                      ))
                    }
              </div>
          </div>

          <div className="user-settigns flex flex-col py-10 w-full rounded-tr-2xl rounded-br-2xl px-16 overflow-y-scroll">
            {/* Form Component */}
            <UserBackground />

            {/* Personal Information */}
            <PersonalInformation />
          </div>

          <button className="btnModal-close rounded-tr-2xl text-2xl w-8 h-8 flex items-center justify-center text-white font-bold absolute" onClick={ () => onShowModal(disUserModal)  }>
            <HiOutlineX />
          </button>
        </div>
    </div>
  )
}
