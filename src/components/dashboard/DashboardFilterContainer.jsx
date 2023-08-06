import { DashboardUsersLists } from './';
export const DashboardFilterContainer = ({ selectedOption , userSettings, handleUserInfo }) => {
  return (
    <div className='pt-4 relative bg-blueColor-50 dark:bg-dark-800'>
        <div className="">
            <div className="bg-blueColor-50 dark:bg-dark-800 mt-1 mx-3 px-2 rounded-lg h-screen"> 
            {
                userSettings.status ? <DashboardUsersLists handleUserInfo={ handleUserInfo } /> : selectedOption === 'opt3' ? <h1>filter</h1> : selectedOption === 'opt4' ? <h1>Administrative</h1> : null
            }
            </div>
        </div>
    </div>
  )
}
