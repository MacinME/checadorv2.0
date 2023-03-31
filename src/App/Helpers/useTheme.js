import { useEffect, useState } from "react";

export const useTheme = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
      );
    
      const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    
      useEffect(() => {
        
        switch (theme) {
            case 'dark':
              document.documentElement.classList.add('dark');
              localStorage.setItem('theme', 'dark');
            break;
            case 'light':
              document.documentElement.classList.remove('dark');
              localStorage.setItem('theme', 'light');
            break;
          default:
            localStorage.removeItem('theme');
            handleWindowsMedia();
            break;
        }
      
      }, [theme])
    
      darkQuery.addEventListener('change', (e) => {
        if(e.matches){
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark')
        }
      })
    
      const handleWindowsMedia = () => {
        if (localStorage.theme === 'dark' || 
          (!('theme' in localStorage) && darkQuery.matches)
        ){
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }

      return{
        theme,
        setTheme,
      }
    
}
