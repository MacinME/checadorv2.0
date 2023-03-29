// Import Components
import { HiAcademicCap, HiBookmarkAlt, HiClipboard, HiClipboardCheck, HiClipboardList, HiClock, HiOutlineSave, HiPaperClip } from 'react-icons/hi';
import { useForm } from '../../Auth/Helpers/useForm';
import { RegisterField } from './RegisterField';
import { degree } from './Degree';

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

    const onSubmitForm = (evt) => {
        evt.preventDefault();
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
                <option value="defaultValue" > Elegir Nivel Academico </option>
                {
                    degree.map(({id, degree, level}) => (
                        <option className='bg-blueColor-50 text-gray-600 hover:bg-red-300'  key={ id } value={ `opt${ id }` }>{ `${ level } - ${ degree }` }</option>
                    ))
                }
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
                <option value="opt1">Informatica - Preparatoria</option>
                <option value="opt2">Ingles - Licenciatura</option>
                <option value="opt3">Contabilidad - Licenciatura</option>
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
