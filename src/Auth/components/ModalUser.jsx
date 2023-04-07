// Import components
import { SearchField } from "../components/index";
import { HiDotsVertical, HiOutlineX } from 'react-icons/hi';
import { UserBackground } from "./UserBackground";
import { PersonalInformation } from "./PersonalInformation";
import { users } from '../components/data';
import { useNewModal } from "../Helpers/useNewModal";
import { ModalFile } from "./ModalFile";
import { ProfileUser } from "./ProfileUser";
import { useState } from "react";

export const ModalUser = ({ onShowModal, disUserModal }) => {

  const { handleModal, showNewModal} = useNewModal([
    {id: 1, status: false}
  ]);

  
  const [userInfo, setUserInfo] = useState(false);

  const handleUserInfo = ( user ) => {
      setUserInfo(user);
  }

  const status = showNewModal[0];

  return (
    <div className={ `modal-user absolute flex justify-center w-screen -top-12 h-screen z-20 ${ disUserModal.className }` }>
      <div className="relative flex bg-white rounded-2xl w-screen overflow-hidden sm:my-5 sm:mx-5 relative xl:my-20 xl:mx-48">
          <div className="w-1/5 bg-blueColor-50 flex flex-col gap-3 p-8 overflow-y-scroll h-full text-gray-800 pt-20 border-r">
            {/* Search Field */}
            <div className="bg-blueColor-50 absolute top-6 left-0">
              <SearchField />
            </div>
          {
          users.map( user => (
              <div 
                  onClick={ () => handleUserInfo(user)  }
                  key={ user.id } 
                  className="users-section-profile flex gap-4 items-center flex-wrap rounded-full cursor-pointer transition-all pl-1 hover:bg-blueColor-100"
              >
              <div className={`rounded-full` }>
                  <img src={ user.img } alt={ user.alt } className="rounded-full w-10" />
              </div>
              <p className="font-semibold text-sm"> { user.name } </p>
              </div>
          ))
          }
          </div>
          <div className="bg-blueColor-50 w-full overflow-y-scroll mt-6">
            { 
                userInfo && (
                    <ProfileUser userInfo={ userInfo } />
                )
            }
          </div>
        {/* users Scroll section */}
        {/* <div className="h-screen rounded-tl-2xl rounded-bl-2xl bg-blueColor-50">
            <div className="flex items-center mt-5 h-auto px-5">
                  <SearchField />
            </div>
            <div className="">
             <UsersList />
            </div>

        </div> */}
        
        <div className="bg-blueColor-100 absolute w-full h-6" >
          <div className="relative">
            <button
              onClick={ () => onShowModal(disUserModal)  }
              className="absolute right-0 btnModal-close rounded-tr-lg text-lg w-8 h-6 flex items-center justify-center text-white font-bold "
            >
              <HiOutlineX />
            </button>
          </div>
        </div>
      </div>
        {/* File Modal  */}
        {/* {
          status.status && (
            <ModalFile  handleModal={ handleModal } status={ status } />
          )
        } */}
    </div>

  )
}
