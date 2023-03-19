import { HiBookOpen, HiPencil, HiPlus, HiUser } from "react-icons/hi"
import { HiBookmarkSlash, HiBookmarkSquare, HiComputerDesktop, HiXMark } from "react-icons/hi2";
import { useNewModal } from '../Helpers/useNewModal'
import { AddClass } from "./AddClass";
import { EditPersonalInformation } from "./EditPersonalInformation";
import { TextInformation } from "./TextInformation";
export const PersonalInformation = () => {

    const {showNewModal, handleModal} = useNewModal([
        {id: 1, status: false},
        {id: 2, status: false}
    ]);

    const state = showNewModal[0];
    const stateClass = showNewModal[1];

  return (
    <div className="">
    <div className="rounded-2xl">
        <div className="grid grid-cols-1 p-5 gap-4 w-full">
        <div className="drop-shadow-information rounded-2xl">
                <div className="flex flex-col py-5 px-10 gap-5 rounded-2xl">
                    <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900 flex items-center gap-2"> <HiBookmarkSquare /> Clases </h4>
                        {
                            !stateClass.status && (
                                <div>
                                    <button 
                                        onClick={ () => handleModal(stateClass) }
                                        className="text-gray-700 hover:text-gray-900"
                                    >
                                        <HiPlus />
                                    </button>
                                </div>
                            )
                        }

                    </div>
                    <div className="grid xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-3 xl:px-10 py-5 rounded-lg h-auto">
                        {
                            stateClass.status ? <AddClass stateClass={ stateClass } handleModal={ handleModal } /> : (
                                <>
                               <div className="rounded-lg md:px-0">
                                    <div className="bg-gray-800 h-20 to-yellow-800 rounded-tl-lg rounded-tr-lg py-5 relative">
                                        <p className="text-center text-md text-white font-bold flex items-center justify-center gap-2 flex-wrap"> <HiComputerDesktop /> Informatica</p>
                                        <div className="absolute rounded top-2 bg-teal-500 right-2 flex items-center gap-2">
                                            <button className="text-gray-900 hover:text-white"> <HiPencil /> </button>
                                            <button className="text-gray-800 hover:text-white"> <HiXMark /> </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-around gap-6 bg-white rounded-bl-lg rounded-br-lg px-4 py-5 w-full border">
                                        <div className="">
                                            <p className="text-gray-700">Lunes</p>
                                            <span className="text-blue-700">6:00 a 7:00</span>
                                        </div>
                                        <div className="">
                                            <p className="text-gray-700">Martes</p>
                                            <span className="text-blue-700">6:00 a 7:00</span>
                                        </div>
                                        <div className="">
                                            <p className="text-gray-700">Miercoles</p>
                                            <span className="text-blue-700">6:00 a 7:00</span>
                                        </div>
                                        <div className="text-gray-700">
                                            <p>Jueves</p>
                                            <span className="text-blue-700">6:00 a 7:00</span>
                                        </div>
                                        <div className="">
                                            <p className="text-gray-700">Viernes</p>
                                            <span className="text-blue-700">6:00 a 7:00</span>
                                        </div>
                                        <div className="">
                                            <p className="text-gray-700">Sabado</p>
                                            <span className="text-red-500">NA</span>
                                        </div>
                                    </div>  
                                </div>
                                <div className="rounded-lg">
                                    <div className="bg-gray-800 h-20 to-yellow-800 rounded-tl-lg rounded-tr-lg py-5 relative">
                                        <p className="text-center text-md text-white font-bold flex items-center justify-center gap-2 flex-wrap"> <HiComputerDesktop /> Desasrrollo Web</p>
                                        <div className="absolute rounded top-2 bg-teal-500 right-2 flex items-center gap-2">
                                            <button className="text-gray-900 hover:text-white"> <HiPencil /> </button>
                                            <button className="text-gray-800 hover:text-white"> <HiXMark /> </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-around gap-6 bg-white rounded-bl-lg rounded-br-lg px-4 py-5 w-full border">
                                        <div className="">
                                            <p className="text-gray-700">Lunes</p>
                                            <span className="text-blue-600">6:00 a 7:00</span>
                                        </div>
                                        <div className="">
                                            <p className="text-gray-700">Martes</p>
                                            <span className="text-blue-600">6:00 a 7:00</span>
                                        </div>
                                        <div className="">
                                            <p className="text-gray-700">Miercoles</p>
                                            <span className="text-blue-600">6:00 a 7:00</span>
                                        </div>
                                        <div className="text-gray-700">
                                            <p>Jueves</p>
                                            <span className="text-red-500">NA</span>
                                        </div>
                                        <div className="">
                                            <p className="text-gray-700">Viernes</p>
                                            <span className="text-blue-600">6:00 a 7:00</span>
                                        </div>
                                        <div className="">
                                            <p className="text-gray-700">Sabado</p>
                                            <span className="text-blue-600">6:00 a 7:00</span>
                                        </div>
                                    </div>  
                                </div>
                                <div className="rounded-lg">
                                    <div className="bg-gray-800 h-20 to-yellow-800 rounded-tl-lg rounded-tr-lg py-5 relative">
                                        <p className="text-center text-md text-white font-bold flex items-center justify-center gap-2 flex-wrap"> <HiComputerDesktop /> Estadistica</p>
                                        <div className="absolute rounded top-2 bg-teal-500 right-2 flex items-center gap-2">
                                            <button className="text-gray-900 hover:text-white"> <HiPencil /> </button>
                                            <button className="text-gray-800 hover:text-white"> <HiXMark /> </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-around gap-6 bg-white rounded-bl-lg rounded-br-lg px-4 py-5 w-full border">
                                        <div className="">
                                            <p className="text-gray-700">Lunes</p>
                                            <span className="text-blue-700">6:00 a 7:00</span>
                                        </div>
                                        <div className="">
                                            <p className="text-gray-700">Martes</p>
                                            <span className="text-red-500">NA</span>
                                        </div>
                                        <div className="">
                                            <p className="text-gray-700">Miercoles</p>
                                            <span className="text-blue-700">6:00 a 7:00</span>
                                        </div>
                                        <div className="text-gray-700">
                                            <p>Jueves</p>
                                            <span className="text-blue-700">6:00 a 7:00</span>
                                        </div>
                                        <div className="">
                                            <p className="text-gray-700">Viernes</p>
                                            <span className="text-blue-700">6:00 a 7:00</span>
                                        </div>
                                        <div className="">
                                            <p className="text-gray-700">Sabado</p>
                                            <span className="text-blue-700">6:00 a 7:00</span>
                                        </div>
                                    </div>  
                                </div>
                                </>
                            )
                        }

                    </div>
                </div>
            </div>
            <div className="rounded-2xl drop-shadow-information">
                <div className="flex flex-col py-5 px-10 gap-5 rounded-2xl relative">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2"> <HiUser />  Informacion de usuario</h4>
                    {/* Edit Bottom */}
                    {
                        !state.status && (
                            <div 
                                onClick={ () => handleModal(state) }
                                className="flex item-center justify-center rounded absolute top-3 right-3 border border-gray-300 p-1 hover:bg-gray-100 cursor-pointer"
                            >   
                            <HiPencil />
                        </div>
                        )
                    }

                    {
                        state.status ? <EditPersonalInformation state={ state } handleModal={ handleModal } />  : <TextInformation />
                    }
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}
