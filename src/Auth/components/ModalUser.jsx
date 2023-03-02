// Import components
import { UserForm } from "../components/index";
import { HiOutlineX, HiOutlineSave } from 'react-icons/hi';

// import { useState } from "react"

export const ModalUser = ({ handleShowModal, showModal }) => {

  // const [userState, setUserState] = useState(true);

  // const handleUserState = () => {
  //   userState ? setUserState(false) : setUserState(true)

  // }

  return (
    <div className={ `modal-user absolute flex justify-center w-full h-screen z-99 ${showModal}` }>
        <div className="modal-container rounded-2xl sm:w-auto md:w-auto lg:w-1/3 bg-white my-10 px-10 py-5 flex flex-col justify-center items-center relative">
          <h2 className="font-bold text-2xl mb-8 text-gray-800"> Informacion de Usuario </h2>
          <div>
            {/* Form Component */}
            <UserForm />
          </div>

          <div className="flex flex-wrap gap-2">

            {/* <button onClick={ handleUserState } className={  ` ${ userState ? 'bg-red-600' : 'bg-green-600'} py-1 px-2 rounded text-white border-0` }>
              { userState ? 'Inhabilitar' : 'Habilitar' }
            </button> */}

            <button className="btnModal-save flex items-center justify-center gap-2 rounded text-gray-900 py-2 px-2">
               <HiOutlineSave /> Guardar Cambios
            </button>
          </div>

          <button className="btnModal-close rounded text-2xl w-8 h-8 flex items-center justify-center text-white font-bold absolute" onClick={ handleShowModal  }>
            <HiOutlineX />
          </button>

        </div>
    </div>
  )
}
