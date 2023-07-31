import { useEffect, useState } from 'react';
import { colorsFrontend } from '../../data';

export const DashboardUsersLists = ({ handleUserInfo }) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
      const fetchUsers = async () => {
          const response = await fetch('http://localhost:8081/users/api');
          const data = await response.json();

          setUsers(data)
      }

      fetchUsers();
  }, []);

  return (
    <div className="w-full flex flex-col gap-2 p-2 overflow-y-scroll h-5/6 text-gray-800">
        {
        users.map( (user, index) => (
            <div 
                onClick={ () => handleUserInfo(user)  }
                key={ index } 
                className="flex gap-3 items-center rounded-full cursor-pointer transition-all pl-1 hover:bg-blueColor-100 dark:hover:bg-dark-900"
            >
              {/* <div className={`rounded-full` }>
                  <img src={ user.img } alt={ user.alt } className="rounded-full w-10" />
              </div> */}
            <div className={`w-8 rounded rounded-full h-8 flex justify-center items-center font-bold ${ colorsFrontend[user.img.color] }`}>
                { user.img.letter }
            </div>  
            <p className="font-semibold text-sm text-gray-800 dark:text-gray-400"> { user.name } </p>
            </div>
        ))
        }
    </div>
  )
}
