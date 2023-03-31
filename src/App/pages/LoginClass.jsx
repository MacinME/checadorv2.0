
import { useTheme } from '../Helpers/useTheme';
import { EnterClass, InClass, MenuUser, UserProfile } from '../components/index';
import { useNewModal } from '../../Auth/Helpers/useNewModal';
import { HiDesktopComputer, HiMoon, HiSun } from 'react-icons/hi';

export const LoginClass = () => {

  const {theme, setTheme} = useTheme();

  const {showNewModal, handleModal} = useNewModal([
    {id: 1, status: false},
    {id: 2, status: false}
  ]);

  const menuState = showNewModal[0];
  const clockState = showNewModal[1]

  const themeOptions = [
    {
      text: 'light',
      icon: <HiSun />
    },
    {
      text: 'dark',
      icon: <HiMoon />
    },
    {
      text: 'system',
      icon: <HiDesktopComputer />
    }
  ];

  return (
    <div className={`bg-blueColor-50 w-screen h-screen grid justify-items-center items-center relative duration-100 dark:bg-dark-800` }>

        <div className='bg-white absolute top-5 left-5 rounded-lg dark:bg-dark-700 duration-100'>
          {
            themeOptions.map( (icon) => (
              <button
                key={ icon.text }
                onClick={ () => setTheme( icon.text )}
                className={`text-gray-600 p-3 rounded-lg hover:bg-bgc_white-50 md:p-4 dark:text-white dark:hover:bg-dark-900 ${ theme === icon.text && ('text-yellowColor-700 dark:text-yellowColor-700')}`}
              >
                { icon.icon }
              </button>
            ))
          }
        </div>
        <div className='pt-4 pb-2 px-4 relative xl:rounded-lg md:rounded-lg'>
            <div className='tracking-wider rounded'>
              {/* User Profile */}
              <UserProfile menuState={ menuState } handleModal={ handleModal } />
            </div>
            {
              clockState.status ? <InClass /> : <EnterClass theme={ theme } setTheme={ setTheme } clockState={ clockState } handleModal={ handleModal }  />
            }
        </div>
          {/* User Menu */}
          {
              menuState.status && (
                <MenuUser menuState={ menuState } handleModal={ handleModal } />
              )
          }
    </div>
  )
}
