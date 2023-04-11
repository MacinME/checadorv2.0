import { DocentesFields } from "./DocentesFields";
import { AdmonFields } from "./AdmonFields";
import { ListUsers } from "./ListUsers";


export const FilterData = ({ selectedOption , userSettings, handleUserInfo }) => {

  return (
    <div className='pt-4 relative bg-blueColor-50 dark:bg-dark-800'>
        <div className="">
            <div className="bg-blueColor-50 dark:bg-dark-800 mt-1 mx-3 px-2 rounded-lg h-screen"> 
            {
                userSettings.status ? <ListUsers handleUserInfo={ handleUserInfo } /> : selectedOption === 'opt3' ? <DocentesFields /> : selectedOption === 'opt4' ? <AdmonFields /> : null
            }
            </div>
        </div>
    </div>
  )
}
