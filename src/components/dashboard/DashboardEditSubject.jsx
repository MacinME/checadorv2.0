import { useContext } from 'react';
import { HiAcademicCap, HiCheck} from 'react-icons/hi';
import { DashboardTimeCard, DashboardIconAddSubject } from './';
import { UserContext } from '../../context';
import { useFetch, useSubject } from '../../hooks';

export const DashboardEditSubject = ({ editSubject, handleModal, showNewModal }) => {

    const { user, onGetUserData} = useContext(UserContext);
    const dataFiltered = user.subjects.filter( subject => subject.id === editSubject );
    const { handleInputChange, handleAddSubject, handleRemoveSubject, formState } = useSubject(dataFiltered[0]);
    const { onFetchData } = useFetch('http://localhost:8081/users/api/updateSubject', 'PUT');

    const onSubmit = async(evt) => {
        evt.preventDefault();
        const data = { formState, _id: user.uid }
        await onFetchData( data );
        await onGetUserData( user.uid );
        handleModal(showNewModal[0]);
    }

  return (
    <>
        <div className="w-full bg-blueColor-50 dark:bg-dark-800 h-auto to-yellow-800 rounded-tl-lg rounded-tr-lg py-5 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
            <div className="flex text-center text-lg text-gray-700 items-center justify-center flex-wrap dark:text-gray-400 gap-2 uppercase"> 
                <HiAcademicCap/>    
                <p className="text-sm text-gray-500 dark:text-gray-300">{ dataFiltered[0].degree }</p>
            </div>
        </div>
        <div className="grid grid-cols-2 bg-blueColor-50 dark:bg-dark-800 dark:border-gray-700 rounded-bl-lg rounded-br-lg px-4 py-5 w-full">
            {
                formState.data.map( (item, dayIndex) => (
                    <div key={ item.day } className="xl:w-full">
                        <DashboardIconAddSubject 
                            handleAddSubject= { handleAddSubject } 
                            dayIndex={ dayIndex } 
                            day={ item.day }
                        />
                        <div className="xl: xl:w-full xl:justify-start xl:gap-3 py-2 px-2">
                            {   
                                item.subjects.map( (subject, subjectIndex) => (
                                    <div key={ subjectIndex } className="xl:flex flex-col bg-blueColor-50 dark:bg-dark-800 dark:border-gray-800 rounded-lg md:mb-2 sm:mb-2 cursor-pointer py-2 px-3">
                                        <form 
                                            onSubmit={ onSubmit }
                                            className="flex flex-col gap-2"
                                        >
                                            <div>
                                                <DashboardTimeCard 
                                                    key={ subjectIndex }
                                                    dayIndex={ dayIndex }
                                                    subject={ subject }
                                                    subjectIndex={ subjectIndex }
                                                    handleInputChange={ handleInputChange }
                                                    handleRemoveSubject={ handleRemoveSubject }
                                                />
                                                <div className="absolute w-16 rounded top-0 right-0 flex items-center justify-around">
                                                    <button 
                                                        className="bg-blueColor-100 dark:bg-dark-800 dark:text-white w-full h-6 flex items-center justify-center rounded-bl-lg text-gray-800 hover:text-gray-800 dark:hover:text-gray-800 dark:hover:bg-indigo-200 hover:bg-indigo-200 border-white outline-none"
                                                    > <HiCheck /> </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>      
    </>
  )
}
