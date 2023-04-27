// Import components
import { useNewModal } from "../Helpers/useNewModal";
import { ProfileUser } from "./ProfileUser";

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
