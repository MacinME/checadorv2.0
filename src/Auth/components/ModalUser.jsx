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

export const ModalUser = ({userInfo}) => {
  console.log(userInfo)

  const { handleModal, showNewModal} = useNewModal([
    {id: 1, status: false}
  ]);

  const status = showNewModal[0];

  return (
    <div className={ `table-section relative dark:bg-dark-800` }>
      <div className="relative">
          <div className="bg-blueColor-50 dark:bg-dark-800 w-full overflow-y-scroll">
            { 
                userInfo && (
                    <ProfileUser userInfo={ userInfo } />
                )
            }
          </div>
      </div>
    </div>

  )
}
