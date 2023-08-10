import { useContext, useEffect, useState } from 'react';
import { colorsFrontend } from '../../data';
import { UserContext } from '../../context/dashboard/UserContext';

export const DashboardUsersLists = () => {

  const [users, setUsers] = useState([]);
  const { onGetUserData } = useContext(UserContext);

  useEffect(() => {
      const fetchUsers = async () => {
          const response = await fetch('http://localhost:8081/users/api');
          const data = await response.json();
          setUsers(data)
      }

      fetchUsers();
  }, []);

  return (
    <div className="bg-blueColor-50 dark:bg-dark-800 w-64 flex flex-col gap-2 p-2 h-full text-gray-800">
        {
        users.map( (user, index) => (
            <div 
                onClick={ () => onGetUserData(user.uid)  }
                key={ index } 
                className="flex gap-3 items-center rounded-full cursor-pointer transition-all pl-1 hover:bg-blueColor-100 dark:hover:bg-dark-900"
            >
            <div className={`w-8 rounded rounded-full h-8 flex justify-center items-center font-bold ${ colorsFrontend[user.img.color] }`}>
                { user.img.letter }
            </div>  
            <p className="font-semibold text-sm text-gray-800 dark:text-gray-200"> { user.name } </p>
            </div>
        ))
        }
    </div>
  )
}
