import { HiDesktopComputer, HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '../../hooks';

export const CommonThemeBtn = () => {
    
    const {theme, setTheme} = useTheme();
    
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
    <div>
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
  )
}
