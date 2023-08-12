import { useContext } from 'react';
import { CommonThemeBtn, CheckerForm, CheckerOutput, CheckerMenu, CheckerProfilePhoto } from '../components';
import { RegisterContext } from '../context';
import { useNewModal } from '../hooks';

export const CheckerPage = () => {

  const { registeredData } = useContext(RegisterContext);
  const { lastClass } = registeredData;

  const {showNewModal, handleModal} = useNewModal([
    {id: 1, status: false},
  ]);

  const menuState = showNewModal[0];

  return (
    <div className="bg-blueColor-50 w-screen h-screen grid justify-items-center items-center relative duration-100 dark:bg-dark-800">
        {/* Change theme */}
        <div className="bg-white flex absolute top-5 left-5 rounded-lg dark:bg-dark-700 duration-100">
          <CommonThemeBtn />
        </div>

        <div className="pt-4 pb-2 px-4 relative xl:rounded-lg md:rounded-lg">
            <div className="tracking-wider rounded">
              {/* User Profile */}
              <CheckerProfilePhoto menuState={ menuState } handleModal={ handleModal } />
            </div>
            {
              lastClass?.logout === null
                ? <CheckerOutput /> 
                : <CheckerForm  />
            }
        </div>
          {/* User Menu */}
          {
              menuState.status && (
                <CheckerMenu menuState={ menuState } handleModal={ handleModal } />
              )
          }
    </div>
  )
}
