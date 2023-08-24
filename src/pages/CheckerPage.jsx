import { useContext, useState } from 'react';
import { CommonThemeBtn, CheckerForm, CheckerOutput, CheckerMenu, CheckerProfilePhoto, CommonSuccessAlert } from '../components';
import { AlertContext, AuthContext, RegisterContext } from '../context';
import { useNewModal } from '../hooks';

export const CheckerPage = () => {

  const { registeredData } = useContext(RegisterContext);
  const { lastClass } = registeredData;
  const { userState } = useContext(AuthContext);
  const [dataLoaded, setdataLoaded] = useState( userState.user );

  const { showAlert, onDisplayAlert } = useContext(AlertContext);

  const {showNewModal, handleModal} = useNewModal([
    {id: 1, status: false},
  ]);

  const menuState = showNewModal[0];

  const onUpdateData = (newDataLoaded) => {
    setdataLoaded( newDataLoaded )
  }

  return (
    <div className="bg-blueColor-50 w-screen h-screen grid justify-items-center items-center relative duration-100 dark:bg-dark-800">
        {/* Change theme */}
        <div className="bg-white flex absolute top-5 left-5 rounded-lg dark:bg-dark-700 duration-100">
          <CommonThemeBtn />
        </div>

        <div className="pt-4 pb-2 px-4 relative xl:rounded-lg md:rounded-lg">
            <div className="tracking-wider rounded">
              {/* User Profile */}
              <CheckerProfilePhoto menuState={ menuState } handleModal={ handleModal } dataLoaded={ dataLoaded } />
            </div>
            {
              lastClass?.logout === null
                ? <CheckerOutput /> 
                : <CheckerForm  dataLoaded={ dataLoaded } />
            }
        </div>
          {/* User Menu */}
          {
              menuState.status && (
                <CheckerMenu 
                  menuState={ menuState } 
                  handleModal={ handleModal } 
                  onDisplayAlert={ onDisplayAlert } 
                  dataLoaded={ dataLoaded }
                  onUpdateData={ onUpdateData }
                />
              )
          }
          { showAlert.display && <CommonSuccessAlert message={ showAlert.message } /> }
    </div>
  )
}
