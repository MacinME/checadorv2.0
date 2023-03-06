import { HiPencil } from "react-icons/hi"
import { useNewModal } from '../Helpers/useNewModal'
import { EditPersonalInformation } from "./EditPersonalInformation";
import { TextInformation } from "./TextInformation";
export const PersonalInformation = () => {

    const {showNewModal, handleModal} = useNewModal([
        {id: 1, status: false}
    ]);

    const state = showNewModal[0];

  return (
    <div className="px-5">
    <div className="drop-shadow-information rounded-2xl bg-white">
        <div className="grid grid-cols-2 p-5 gap-4 w-full">
            <div className="bg-white rounded-2xl">
                <div className="flex flex-col py-5 px-10 gap-5 rounded-2xl relative">
                    <h4 className="font-semibold text-gray-800 border-l-4 pl-3 border-purple-400">Informacion de usuario</h4>
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
            <div className="bg-white rounded-2xl">
                <div className="flex flex-col py-5 px-10 gap-5 rounded-2xl">
                <h4 className="font-semibold text-gray-800">Estado de usuario</h4>
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-between">
                            <span className="font-semibold text-sm">Estado</span>
                            <p className="text-blue-600 font-semibold tracking-wider">Activo</p>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold text-sm">Se unio</span>
                            <p className="text-blue-600 font-semibold tracking-wider">19 agosto 2022</p>
                        </div>
                        <button className="py-2 px-4 bg-blue-500 mt-5 rounded text-white font-bold">
                            Inhabilitar usuario
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}
