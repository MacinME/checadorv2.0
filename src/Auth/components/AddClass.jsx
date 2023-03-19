// Import Components
import { HiOutlineBookmark, HiOutlineSave } from 'react-icons/hi';
import { HiCalendarDays } from 'react-icons/hi2';
import { useForm } from '../Helpers/useForm';

export const AddClass = ({ stateClass, handleModal}) => {
    

    const { onInputChange, formState } = useForm({
        mondayStart: '',
        mondayEnd: '',
        tuesdayStart: '',
        tuesdayEnd: '',
        wednesdayStart: '',
        wednesdayEnd: '',
        thursdayStart: '',
        thursdayEnd: '',
        fridayStart: '',
        fridayEnd: '',
        saturdayStart: '',
        saturdayEnd: ''
    });

    const {mondayStart, mondayEnd, tuesdayStart, tuesdayEnd, wednesdayStart, wednesdayEnd, thursdayStart, thursdayEnd, fridayStart, fridayEnd, saturdayStart, saturdayEnd} = formState;

    const inputs = [
        {
            id: 1,
            type: "text",
            label: "Lunes",
            pattern: "([01]?[0-9]|2[0-3]):[0-5][0-9]",
            time: {
                start: 'mondayStart',
                end: 'mondayEnd'
            },
            lang: 'es',
            inputMode: 'numeric',
            required: true
        },
        {
            id: 2,
            type: "text",
            pattern: "([01]?[0-9]|2[0-3]):[0-5][0-9]",
            label: "Martes",
            time: {
                start: 'tuesdayStart',
                end: 'tuesdayEnd'
            },
            lang: 'es',
            inputMode: 'numeric',
            required: true
        },
        {
            id: 3,
            type: "text",
            pattern: "([01]?[0-9]|2[0-3]):[0-5][0-9]",
            label: "Miercoles",
            time: {
                start: 'wednesdayStart',
                end: 'wednesdayEnd'
            },
            lang: 'es',
            inputMode: 'numeric',
            required: true
        },
        {
            id: 4,
            type: "text",
            pattern: "([01]?[0-9]|2[0-3]):[0-5][0-9]",
            label: "Jueves",
            time: {
                start: 'thursdayStart',
                end: 'thursdayEnd'
            },
            lang: 'es',
            inputMode: 'numeric',
            required: true
        },
        {
            id: 5,
            type: "text",
            pattern: "([01]?[0-9]|2[0-3]):[0-5][0-9]",
            label: "Viernes",            
            time: {
                start: 'fridayStart',
                end: 'fridayEnd'
            },
            lang: 'es',
            inputMode: 'numeric',
            required: true
        },
        {
            id: 6,
            type: "text",
            pattern: "([01]?[0-9]|2[0-3]):[0-5][0-9]",
            label: "Sabado",
            time: {
                start: 'saturdayStart',
                end: 'saturdayEnd'
            },
            lang: 'es',
            inputMode: 'numeric',
            required: true
        },
    ];


  return (
    <form className="col-span-3 xl:px-10 sm:px-0">
        <div className='w-full bg-bgc_white-50 gap-5 items-center rounded-lg py-1'>
            <h4 className='px-2 xl:text-lg text-center font-semibold text-gray-800'>Registra una clase</h4>
            <div className='py-5'>
                <div className='flex justify-center flex-col xl:flex-row gap-1 xl:gap-5 xl:mb-4 items-center '>
                    <label htmlFor="" className='flex items-center gap-2 xl:mr-5 xl:w-24'> <HiOutlineBookmark className='text-teal-500' /> Materia: </label>
                    <input type="text" className='text-gray-600 py-1 px-2 w-32 md:w-48 xl:w-48 border outline-none rounded-lg focus:border-gray-800' required />
                </div>
                {
                    inputs.map( input => (
                        <div key={ input.id } onChange={ onInputChange } className='flex justify-center flex-col xl:flex-row gap-1 xl:gap-5 xl:mb-4 flex-wrap items-center '>
                            <label htmlFor="" className='flex items-center gap-2 xl:mr-5 xl:w-24'> <HiCalendarDays className='text-teal-500' />  { input.label }: </label>
                            <div className='flex gap-1 flex-col md:flex-row'>
                                <input {...input} autoComplete='off' placeholder='00:00' name={ input.time.start } className='text-gray-600 py-1 px-2 rounded-lg border w-24 outline-none  focus:border-gray-800'/>
                                <input {...input} autoComplete='off' placeholder='23:59' name={ input.time.end } className='text-gray-600 py-1 px-2 rounded-lg border w-24 outline-none focus:border-gray-800' />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
                <button
                    onClick={ () => handleModal (stateClass)}
                    className="hover:bg-gray-700 hover:text-white border border-gray-700 flex items-center justify-center gap-2 rounded text-gray-900 py-2 px-2 text-sm"
                >
                    Cancelar
                </button>
                <button 
                    className="btnModal-save flex items-center justify-center gap-2 rounded text-gray-900 py-2 px-2"
                >
                    <HiOutlineSave /> Guardar Cambios
                </button>
            </div>
        </div>
    </form>
  )
}
