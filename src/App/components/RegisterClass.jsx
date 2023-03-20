// Import Components
import { HiAcademicCap, HiBookmarkAlt, HiClipboard, HiClipboardCheck, HiClipboardList, HiClock, HiOutlineSave, HiPaperClip } from 'react-icons/hi';
import { useForm } from '../../Auth/Helpers/useForm';
import { RegisterField } from './RegisterField';

export const RegisterClass = ({clockState, handleModal}) => {

    const { onInputChange, formState } = useForm({
        degree: '',
        subject: '',
        semester: '',
        topic: '',
        date: new Date().toLocaleDateString(),
        loginTime: '',
        logoutTime: ''
    });

    // const {userName, userRol, userID, userEmail} = formState;

    // const inputs = [
    //     {
    //         id: 1,
    //         type: "select",
    //         label: "Mis clases",
    //         name: "degree",
    //         placeholder: "Ingresa la licenciatura",
    //         errorMessage: "El nivel academico es requerido",
    //         required: true
    //     },
    //     {
    //         id: 2,
    //         type: "text",
    //         label: "Clase",
    //         name: "subject",
    //         placeholder: "Elegir materia",
    //         errorMessage: "La materia es requerida",
    //         required: true
    //     },
    //     {
    //         id: 4,
    //         type: "text",
    //         label: "Tema de Clase",
    //         name: "topic",
    //         placeholder: "Ingresa el tema de la clase",
    //         errorMessage: "El tema es requerido",
    //         required: true
    //     },
    //     {
    //         id: 5,
    //         type: "text",
    //         name: "date",
    //         hidden: true,
    //         required: true       
    //     },
    //     {
    //         id: 6,
    //         type: "text",
    //         name: "loginTime",
    //               hidden: true,
    //         required: true       
    //     }
    // ]

    const onSubmitForm = (evt) => {
        evt.preventDefault();
        console.log('You are cliked')
    }

  return (
    <form onSubmit={ onSubmitForm }>

        <div className="relative form-input flex flex-col gap-4 my-8">
            <label
            className="
            flex items-center gap-2
            px-2
            mx-2
            text-gray-600
            text-sm
            transition-all
            tracking-wider
            rounded
            "> <HiAcademicCap /> Elegir Nivel Academico </label>
            <select 
            className="w-80 invalid-input peer border h-12 px-2 focus:outline-none rounded-lg placeholder-transparent text-gray-700 bg-white tracking-wider" 
            >
                <option value="opt0">Seleccionar Licenciatura</option>
                <option value="opt1">Licenciatura - INFORMÁTICA</option>
                <option value="opt2">Preparatoria - SEAD</option>
            </select>
        </div>
        <div className="relative form-input flex flex-col gap-4 my-8">
            <label
            className="
            flex items-center gap-2
            px-2
            mx-2
            text-gray-600
            text-sm
            transition-all
            tracking-wider
            rounded
            ">  <HiBookmarkAlt /> Elegir Clase </label>
            <select 
            className="w-80 invalid-input peer border h-12 px-2 focus:outline-none rounded-lg placeholder-transparent text-gray-700 bg-white tracking-wider" 
            >
                <option value="opt0">Seleccionar Clase</option>
                <option value="opt1">Informatica</option>
                <option value="opt2">Ingles</option>
                <option value="opt3">Contabilidad</option>
            </select>
        </div>
        <div className="relative form-input flex flex-col gap-4 my-8">
            <input 
                placeholder='Ingresa el tema'
                className="w-80 invalid-input peer border h-12 px-2 focus:outline-none rounded-lg placeholder-transparent text-gray-700 bg-white tracking-wider" 
            />
            <label
            className="
            flex items-center gap-2
            px-2
            mx-2
            absolute 
            left-0
            -top-3.5
            text-gray-600
            text-sm
            transition-all
            peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-500
            peer-placeholder-shown:top-2
            peer-focus:-top-3.5
            peer-focus:text-gray-500
            peer-focus:text-base
            bg-white
            tracking-wider
            rounded
            ">  <HiClipboard /> Tema </label>
        </div>
        {/* <div className="relative form-input flex flex-col gap-4 my-8">
            <input 
                value={ new Date().toLocaleString() }
                name="date"
                hidden
                readOnly
                placeholder='Ingresa el tema'
                className="w-96 invalid-input peer border h-12 px-2 focus:outline-none rounded-lg placeholder-transparent text-gray-700 bg-white tracking-wider" 
            />
        </div>
        <div className="relative form-input flex flex-col gap-4 my-8">
            <input 
                name='loginTime'
                hidden
                readOnly
                placeholder='Ingresa el tema'
                className="w-96 invalid-input peer border h-12 px-2 focus:outline-none rounded-lg placeholder-transparent text-gray-700 bg-white tracking-wider" 
            />
        </div> */}
        <div className="flex flex-wrap items-center justify-center gap-2">
            <button
                onClick={() => handleModal(clockState)  } 
                className="btnModal-save flex items-center justify-center gap-2 rounded text-gray-700 py-2 px-2 hover:text-white">
                <HiClock /> Iniciar Clase
            </button>
        </div>

        <span className='text-center w-full block mt-5 text-sm text-gray-500'>Checador CEUT v2.0</span>
    </form>
  )
}
