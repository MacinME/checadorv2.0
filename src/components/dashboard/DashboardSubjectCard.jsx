import { HiAcademicCap, HiPencil } from 'react-icons/hi';
import { HiXMark } from 'react-icons/hi2';
import { useNewModal } from '../../hooks/useNewModal';
import { DashboardEditSubject } from './';
import { useContext, useState } from 'react';
import { useFetch } from '../../hooks';
import { UserContext } from '../../context';

export const DashboardSubjectCard = ( { data, degree, id }) => {

    const { showNewModal, handleModal } = useNewModal([
        {id: 1, status: false}
    ]);
    const { user, onGetUserData } = useContext(UserContext);

    const [editSubject, setEditSubject] = useState(null);
    const { onFetchData } = useFetch('http://localhost:8081/users/api/deleteSubject', 'DELETE');

    const onEditSubject = (idSubject) =>{
        handleModal(showNewModal[0]);
        setEditSubject( idSubject );
    }

    const onDeleteSubject = async(idSubject) => {
        const data = { _id: user.uid,  idSubject };
        await onFetchData( data );
        onGetUserData( user.uid );
    }

  return (
    <div className="col-span-2 flex items-center flex-col h-full bg-white rounded-lg dark:bg-dark-700 relative">

        {
            showNewModal[0].status 
                ? ( <DashboardEditSubject 
                        editSubject={ editSubject } 
                        showNewModal={ showNewModal }
                        handleModal={ handleModal }
                    /> )
                : <>
                    <div className="w-full bg-white dark:bg-dark-700 h-auto to-yellow-800 rounded-tl-lg rounded-tr-lg py-5 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
                        <div className="flex text-center text-lg text-gray-700 items-center justify-center flex-wrap dark:text-gray-400 gap-2 uppercase"> 
                            <HiAcademicCap/>    
                            <p className="text-sm text-gray-500 dark:text-gray-300">{ degree }</p>
                        </div>
                        <div className="absolute w-16 rounded top-0 right-0 flex items-center justify-around">
                            <button 
                                onClick={ () => onEditSubject(id) }
                                className="bg-blueColor-100 dark:bg-dark-800 dark:text-white w-full h-6 flex items-center justify-center rounded-bl-lg text-gray-800 hover:text-gray-800 dark:hover:text-gray-800 dark:hover:bg-indigo-200 hover:bg-indigo-200 border-white outline-none"
                            > <HiPencil /> </button>
                            <button 
                                onClick={ () => onDeleteSubject(id) }
                                className="bg-blueColor-100 dark:bg-dark-800 dark:text-white w-full h-6 flex items-center justify-center rounded-tr-lg text-gray-900 hover:text-gray-800 dark:hover:text-gray-800 dark:hover:bg-red-300 hover:bg-red-300 outline-none"
                            > <HiXMark /> </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 bg-white dark:bg-dark-700 dark:border-gray-700 rounded-bl-lg rounded-br-lg px-4 py-5 w-full">
                        {
                            data.map( item => (
                                <div key={ item.day } className="xl:w-full">
                                    <p className="text-gray-700 dark:text-gray-300 w-24 text-center self-center font-semibold tracking-wider"> { item.day } </p>
                                    <div className="xl: xl:w-full xl:justify-start xl:gap-3 py-2 px-2">
                                        {   
                                            item.subjects.map( (subject, index) => (
                                                <div key={ index } className="xl:flex flex-col bg-blueColor-50 dark:bg-dark-800 dark:border-gray-800 rounded-lg md:mb-2 sm:mb-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer py-2 px-3">
                                                    <p className="text-gray-500 dark:text-gray-200 w-full">{ subject.subject }</p>
                                                    <p className="text-gray-600 dark:text-gray-300 p-1 text-sm font-semibold">{ subject.start ? subject.start + ' - ' + subject.end: 'No establecido' } </p>
                                                    <div className="p-1 h-full">
                                                        <p className="text-gray-600 dark:text-gray-300 text-sm"> { subject.grade } </p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>  
                </>
        }
    </div>

  )
}
