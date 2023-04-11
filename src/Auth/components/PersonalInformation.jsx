import { HiArrowSmLeft, HiPencil, HiPlus, HiUser } from "react-icons/hi"
import { HiBookmarkSquare } from "react-icons/hi2";
import { useNewModal } from '../Helpers/useNewModal'
import { AddClass } from "./AddClass";
import { EditPersonalInformation } from "./EditPersonalInformation";
import { TextInformation } from "./TextInformation";
import { ClassCard } from "./users/ClassCard";
import { classess } from './class'

export const PersonalInformation = ({ userInfo }) => {

    const {showNewModal, handleModal} = useNewModal([
        {id: 1, status: false},
        {id: 2, status: false}
    ]);

    const state = showNewModal[0];
    const stateClass = showNewModal[1];

  return (
    <div className="grid grid-cols-1 mt-4 gap-4 w-full h-full">
        <div className="bg-blueColor-50 dark:bg-dark-800 dark:border-gray-700 border-t border-gray-300 mx-4">
                <div className="flex flex-col py-5 px-10 gap-5 rounded-2xl">
                    <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-300 flex items-center gap-2"> <HiBookmarkSquare /> Clases </h4>
                        {
                            !stateClass.status ? 
                                <div>
                                    <button 
                                        onClick={ () => handleModal(stateClass) }
                                        className="flex items-center text-lg text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                                    >
                                        <HiPlus />
                                    </button>
                                </div>
                            :
                            <button
                                onClick={ () => handleModal(stateClass) }
                                className="flex items-center text-lg text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                            >
                                <HiArrowSmLeft  /> 
                            </button>
                        }
                    </div>
                    <div className="grid xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-3 xl:px-10 py-5 rounded-lg h-auto">
                        {
                            stateClass.status ? <AddClass stateClass={ stateClass } handleModal={ handleModal } /> : (
                                classess.map( oneClass => (
                                    <ClassCard key={ oneClass.id  } {...oneClass} />
                                ))
                            )
                        }
                    </div>
                </div>
        </div>
        <div className="bg-blueColor-50 dark:bg-dark-800 dark:border-gray-700 border-t border-gray-300 mb-5 mx-4">
            <div className="flex flex-col py-5 px-10 gap-5 rounded-2xl relative">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2"> <HiUser />  Informacion de usuario</h4>
                {/* Edit Bottom */}
                {
                    !state.status && (
                        <div 
                            onClick={ () => handleModal(state) }
                            className="flex item-center justify-center rounded absolute top-3 right-3 border border-gray-300 p-1 hover:bg-gray-100 cursor-pointer dark:border-gray-700 dark:text-gray-400 dark:hover:bg-dark-900"
                        >   
                        <HiPencil />
                    </div>
                    )
                }
                {
                    state.status ? <EditPersonalInformation state={ state } handleModal={ handleModal } />  : <TextInformation userInfo={ userInfo }/>
                }
            </div>
        </div>
    </div>

  )
}
