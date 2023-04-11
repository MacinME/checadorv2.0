import { users } from '../components/data';

export const ListUsers = ({ handleUserInfo }) => {
  return (
    <div className="w-full flex flex-col gap-2 p-2 overflow-y-scroll h-5/6 text-gray-800">
        {
        users.map( user => (
            <div 
                onClick={ () => handleUserInfo(user)  }
                key={ user.id } 
                className="flex gap-3 items-center rounded-full cursor-pointer transition-all pl-1 hover:bg-blueColor-100 dark:hover:bg-dark-900"
            >
              <div className={`rounded-full` }>
                  <img src={ user.img } alt={ user.alt } className="rounded-full w-10" />
              </div>
            <p className="font-semibold text-sm text-gray-800 dark:text-gray-400"> { user.name } </p>
            </div>
        ))
        }
    </div>
  )
}
