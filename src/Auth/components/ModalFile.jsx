import { HiOutlineSave, HiX } from "react-icons/hi"

export const ModalFile = ({ handleModal, status }) => {

  return (
    <div className="file-modal w-screen h-screen absolute flex justify-center items-center z-50">
        <div className="bg-white w-1/3 h-1/3 py-10 flex items-center relative justify-center flex-col rounded-2xl">
                <div
                    onClick={ () => handleModal( status ) }
                    className="btnModal-close rounded-tr-2xl text-sm w-8 h-8 flex items-center justify-center text-white font-bold absolute cursor-pointer"
                >
                    <HiX />
                </div>
            <div className="rounded">
                <form className="grid justify-items-center"> 
                    <input 
                        type="file" 
                        className="input-modal file:border-0 file:cursor-pointer file:rounded-tl-lg file:rounded-bl-lg rounded-lg bg-blue-400 text-white font-bold file:font-semibold text-sm tracking-wider file:w-2/4 file:text-center w-full h-16 file:h-16 required file:hover:bg-gray-400 file:hover:text-white"  
                    />
                    <div className="mt-10">
                        <button
                            className="btnModal-save flex items-center justify-center gap-2 rounded text-gray-900 py-2 px-2 text-sm"
                            onClick={ () => handleModal( status )  }
                        >
                            <HiOutlineSave />
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
