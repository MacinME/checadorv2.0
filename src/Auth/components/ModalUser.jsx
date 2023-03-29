// Import components
import { SearchField } from "../components/index";
import { HiDotsVertical, HiOutlineX } from 'react-icons/hi';
import { UserBackground } from "./UserBackground";
import { PersonalInformation } from "./PersonalInformation";
import { users } from '../components/data';
import { useNewModal } from "../Helpers/useNewModal";
import { ModalFile } from "./ModalFile";

export const ModalUser = ({ onShowModal, disUserModal }) => {

  const { handleModal, showNewModal} = useNewModal([
    {id: 1, status: false}
  ]);

  const status = showNewModal[0];

  return (
        <div className={ `absolute flex bg-blueColor-50 w-screen -top-4 left-0 h-60vh z-10 overflow-hidden ${ disUserModal.className }` }>
        <div className="modal-container rounded-2xl w-screen bg-white my-5 flex justify-between relative overflow-hidden">
          {/* users Scroll section */}
          <div className="h-90 rounded-tl-2xl rounded-bl-2xl bg-blueColor-50">
              <div className="flex items-center mt-5 h-auto px-5">
                    <SearchField />
                    <div className="cursor-pointer">
                      <HiDotsVertical />
                    </div>
              </div>
              <div className="users-section flex flex-col gap-3 p-8 overflow-y-scroll h-full text-gray-800">
                    {
                      users.map( user => (
                        <div key={ user.id } className="users-section-profile flex gap-4 items-center flex-wrap hover:bg-blueColor-50 rounded-lg cursor-pointer transition-all pl-1">
                          <div className="rounded-full">
                            <img src={ user.img } alt={ user.alt } className="rounded-full w-10" />
                          </div>
                          <p className="font-semibold text-sm"> { user.name } </p>
                        </div>
                      ))
                    }
              </div>
          </div>

          <div className="user-settigns flex flex-col w-full rounded-tr-2xl rounded-br-2xl overflow-y-scroll">
            {/* Form Component */}
            <UserBackground handleModal={ handleModal } status={ status } />

            {/* Personal Information */}
            <PersonalInformation />
          </div>

          {/* <button className="btnModal-close rounded-tr-2xl text-lg w-8 h-8 flex items-center justify-center text-white font-bold absolute" onClick={ () => onShowModal(disUserModal)  }>
            <HiOutlineX />
          </button> */}
        </div>
          {/* File Modal  */}
          {
            status.status && (
              <ModalFile  handleModal={ handleModal } status={ status } />
            )
          }
    </div>

  )
}
