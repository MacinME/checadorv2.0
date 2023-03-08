import { HiPencil, HiUser } from "react-icons/hi"
import { useNewModal } from '../Helpers/useNewModal'
import { EditPersonalInformation } from "./EditPersonalInformation";
import { TextInformation } from "./TextInformation";
export const PersonalInformation = () => {

    const {showNewModal, handleModal} = useNewModal([
        {id: 1, status: false}
    ]);

    const state = showNewModal[0];

  return (
    <div className="">
    <div className="rounded-2xl">
        <div className="grid grid-cols-1 p-5 gap-4 w-full">
        <div className="drop-shadow-information rounded-2xl">
                <div className="flex flex-col py-5 px-10 gap-5 rounded-2xl">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2"> <HiUser /> Estado de usuario</h4>
                    <div className="flex flex-wrap gap-8 w-full">
                        <div className="flex items-center gap-1">
                            <span className="text-sm text-gray-600">Area Profesional: </span>
                            <div>
                                <p className="font-semibold text-sm flex items-center gap-4 bg-white drop-shadow-sm py-2 px-4 rounded-lg justify-between"> Disenador </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-sm text-gray-600">Funcion: </span>
                            <div>
                                <p className="font-semibold text-sm flex items-center gap-4 bg-white drop-shadow-sm py-2 px-4 rounded-lg justify-between"> UX Designer  </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-sm text-gray-600">Se unio:</span>
                            <div>
                                <p className="font-semibold text-sm flex items-center gap-4 bg-white drop-shadow-sm py-2 px-4 rounded-lg justify-between">19 agosto 2022</p>
                            </div>
                        </div>
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
