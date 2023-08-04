import { useContext } from 'react';
import { DashboardUserBackground, DashboardUserData } from './';
import { UserContext } from '../../context/dashboard/UserContext';

export const DashboardUserContainer = ({ userInfo }) => {

  const { user } = useContext(UserContext);

  return (
    <div className={ `table-section relative dark:bg-dark-800` }>
      <div className="relative">
          <div className="bg-blueColor-50 dark:bg-dark-800 w-full">
            { 
                !!user && (
                  <div className="">
                    <DashboardUserBackground />
          
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
