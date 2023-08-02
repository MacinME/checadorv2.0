import { useContext } from 'react';
import { CommonThemeBtn, CheckerForm, CheckerOutput, CheckerMenu, CheckerProfilePhoto } from '../components';
import { RegisterContext } from '../context';
import { useTheme, useNewModal } from '../hooks';

export const CheckerPage = () => {

  const {theme, setTheme} = useTheme();
  const { registeredData } = useContext(RegisterContext);
  const { lastClass } = registeredData;

  const {showNewModal, handleModal} = useNewModal([
    {id: 1, status: false},
    {id: 2, status: false}
  ]);

  const menuState = showNewModal[0];
  const clockState = showNewModal[1]

  return (
    <div className={`bg-blueColor-50 w-screen h-screen grid justify-items-center items-center relative duration-100 dark:bg-dark-800` }>
        {/* Change theme */}
        <div className='bg-white flex absolute top-5 left-5 rounded-lg dark:bg-dark-700 duration-100'>
          <CommonThemeBtn />
        </div>

        <div className='pt-4 pb-2 px-4 relative xl:rounded-lg md:rounded-lg'>
            <div className='tracking-wider rounded'>
              {/* User Profile */}
              <CheckerProfilePhoto menuState={ menuState } handleModal={ handleModal } />
            </div>
            {
              lastClass?.logout === null
                ? <CheckerOutput 
                    clockState={ clockState } 
                    handleModal={ handleModal }  
                  /> 
                : <CheckerForm 
                    theme={ theme } 
                    setTheme={ setTheme } 
                    clockState={ clockState } 
                    handleModal={ handleModal }  
                  />
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
