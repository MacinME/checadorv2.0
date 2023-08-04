import { HiX } from 'react-icons/hi';
import { DashboardTimeInput } from './DashboardTimeInput';
import { inputsTime } from '../../data';

export const DashboardTimeCard = ({ dayIndex, subject, subjectIndex, handleRemoveSubject, handleInputChange }) => {
  return (
    <div className="bg-bgc_white-50 dark:bg-dark-700 m-2 rounded-lg flex flex-wrap flex-col justify-center items-center overflow-hidden">
        <label className="text-gray-700 dark:text-gray-200 h-10 flex items-center justify-between py-1 px-2 w-auto rounded-tl-lg rounded-tr-lg w-full"> Horario { subjectIndex + 1 }: 
        {
            subjectIndex !== 0 &&
                (<div
                    onClick={ (evt) => handleRemoveSubject(evt, dayIndex, subjectIndex) }
                    className="bg-red-500 text-sm p-1 rounded-lg cursor-pointer text-white hover:bg-red-800 hover:text-white m-2"
                >
                    <HiX />
                </div>)
        }
        </label>
        <div className="p-2 w-full flex flex-col gap-2">
            {
                inputsTime.map( input => (
                    <DashboardTimeInput 
                        key={ input.id }
                        {...input} 
                        data={ subject[input.name] }
                        subject={ subject }
                        dayIndex={ dayIndex }
                        subjectIndex={ subjectIndex }
                        handleInputChange={ handleInputChange }
                    />
                ))
            }
        </div>
    </div>
  )
}
