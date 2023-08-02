import { useContext } from 'react';
import { useNewModal } from '../../hooks';
import { DashboardUserBackground, DashboardUserData } from './';
import { UserContext } from '../../context/dashboard/UserContext';

export const DashboardUserContainer = ({ userInfo }) => {
  const { user } = useContext(UserContext);
  const { oneUser } = !!user && user;

  const { handleModal, showNewModal} = useNewModal([
    {id: 1, status: false}
  ]);

  const status = showNewModal[0];

  return (
    <div className={ `table-section relative dark:bg-dark-800` }>
      <div className="relative">
          <div className="bg-blueColor-50 dark:bg-dark-800 w-full overflow-y-scroll">
            { 
                oneUser && (
                  <div className="">
                    <DashboardUserBackground userInfo={ userInfo }/>
          
                    {/* Personal Information */}
                    <DashboardUserData userInfo={ userInfo }/>
                  </div>
                )
            }
          </div>
      </div>
    </div>

  )
}
