import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/dashboard/UserContext';
import { DashboardErrorMessage, DashboardSearchInput, DashboardUser } from './';
import { useFetch, useForm } from '../../hooks';

export const DashboardUsersLists = () => {

  const [users, setUsers] = useState([]);
  const { onGetUserData } = useContext(UserContext);
  const { onFetchData } = useFetch('http://localhost:8081/users/api/findUsers', 'POST');
  const { onInputChange, search } = useForm({
    search: ''
  });

  const onSearchUsers = async() => {

    if(search.trim().length < 2){
        setUsers([]);
        return;
    }

    const data = await onFetchData( { search } );
    setUsers(data.results);
  }

    useEffect(() => {
        onSearchUsers();
    }, [search])


  return (
    <div className="bg-blueColor-50 dark:bg-dark-800 w-64 flex flex-col gap-2 p-2 h-full text-gray-800">
        <DashboardSearchInput 
            onInputChange={ onInputChange }
            search={ search }
        />
        {
            users.length > 0 ?
                users.map( user => (
                    <DashboardUser 
                        key={ user. _id } 
                        onGetUserData={ onGetUserData }
                        {...user}
                    />
                ))
            : search.trim().length > 2 && <DashboardErrorMessage message={`No encontrado: ${ search }`} />
        }
    </div>
  )
}
