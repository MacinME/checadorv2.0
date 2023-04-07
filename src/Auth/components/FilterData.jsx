import { DocentesFields } from "./DocentesFields";
import { AdmonFields } from "./AdmonFields";

export const FilterData = ({ selectedOption }) => {

  return (
    <div className='pt-4 relative bg-blueColor-50'>
        <div className="">
            <div className="bg-blueColor-50 mt-1 mx-3 pt-4 px-2 rounded-lg"> 
            {
                selectedOption === 'opt3' ? <DocentesFields /> : selectedOption === 'opt4' ? <AdmonFields /> : null
            }
            </div>
        </div>
    </div>
  )
}
