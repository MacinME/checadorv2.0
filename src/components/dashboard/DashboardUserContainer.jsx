import { useContext } from 'react';
import { DashboardBar, DashboardSearchInput, DashboardUserBackground, DashboardUserData, DashboardUsersLists } from './';
import { UserContext } from '../../context';

export const DashboardUserContainer = ({ onModal }) => {

  const { user } = useContext(UserContext);

  return (
    <div className="w-screen h-screen backdrop-brightness-50 absolute -top-12 left-0 flex justify-center z-30">
      <div className="relative w-full h-screen bg-transparent pt-12 pb-8 px-10">
        <div className="bg-white dark:bg-dark-700 w-full h-full relative rounded-xl">
            <div className="grid-configUser">
              <div className="dark:bg-dark-800 bg-blueColor-50 dark:bg-dark-700 flex flex-col h-[57.5rem] items-center rounded-bl-xl rounded-tl-xl z-10">
                <DashboardSearchInput />
                <DashboardUsersLists />
              </div>
              <div>
                <div className="h-10">
                  <DashboardBar onModalFilter={ onModal } />
                </div>
                { 
                  !!user && (
                    <div className="bg-white dark:bg-dark-700 w-full h-[54rem] overflow-y-scroll">
                      <DashboardUserBackground />
                      <DashboardUserData />
                    </div>
                  )
                }
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
