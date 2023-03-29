import { useState } from "react"
import { HiAcademicCap, HiCalendar, HiCheckCircle, HiClock, HiDocumentDownload, HiOutlineAcademicCap, HiOutlineCalendar, HiOutlineClock, HiOutlineUser, HiSortAscending, HiSortDescending, HiStatusOnline, HiUser, HiXCircle } from "react-icons/hi"
import { useCheckbox } from "../Helpers/useCheckbox"


// DatePicker Settings
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es';
import { HiXMark } from "react-icons/hi2";
registerLocale('es', es);

export const DocentesFields = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const onChangeDate = (date) => {
        const [start, end] = date;
        setStartDate(start);
        setEndDate(end)
    }

    const [ group1, handleGroup1Option ] = useCheckbox({
        option1: true,
        option2: false,
    })

    const [ group2, , handleSelectOneGroup2Option] = useCheckbox({
        option1: true,
        option2: false,
        option3: false,
        option4: false
    })


    const [ group3, handleGroup3Option ] = useCheckbox({
        option1: true,
        option2: false,
    })

    const [ group4, handleGroup4Option] = useCheckbox({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
        option5: false 
    })



    const handleGroupSelect = (evt) => {
        const { name } = evt.target;
        switch (name) {
            case 'group1':
                handleGroup1Option(evt)
                break;
            case 'group2':
                handleSelectOneGroup2Option(evt)
                break;
            case 'group3':
                handleGroup3Option(evt)
                break;
            case 'group4':
                handleGroup4Option(evt)
                break;
            default:
                break;
        }
    }


    return (
    <>
    <div className="flex flex-col gap-5 mx-auto h-full">
        <div className="flex flex-col gap-5 flex-wrap">
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-gray-700">
                <div className="flex items-center gap-2 bg-primary w-full text-white rounded-lg px-2">
                    <HiCalendar className="text-sm" /> Fecha:
                </div>
                </label>
                <DatePicker 
                    selected={startDate} 
                    onChange={ onChangeDate }
                    startDate={ startDate }
                    endDate={ endDate }
                    selectsRange
                    withPortal
                    showMonthDropdown
                    locale='es'            
                    className="bg-white rounded-lg outline-none border-b focus:border-gray-900 focus:border-1 focus:border-blue-600 focus:rounded-none py-1 px-2 text-gray-700" 
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-gray-700">
                    <div className="flex items-center gap-2 bg-primary w-full text-white rounded-lg px-2">
                        <HiUser className="text-sm" /> Nombre:
                    </div>
                </label>
                <input type="text" className="bg-white rounded-lg outline-none border-b focus:border-gray-900 focus:border-1 focus:border-blue-600 focus:rounded-none py-1 px-2 text-gray-700 w-auto" />
            </div>
        </div>

        <div className="bg-gbc_white-50  px-2 rounded-lg">
                <h5 className="text-gray-700 font-semibold">Opciones</h5>
                <div className="border-t">
                    <h6 className="text-gray-600 pt-3 pb-1 flex items-center gap-1 text-md"> <HiOutlineClock className="bg-primary rounded-lg text-white text-sm" /> Tiempo: </h6>
                    <div className="flex items-center gap-1 xl:ml-3">
                        <label htmlFor="" className="text-gray-500 text-sm">
                            Contar Tolerancia
                        </label>

                        <input 
                            className="accent-gray-800 focus:accent-gray-800"
                            type="checkbox" 
                            name="group3"
                            value="option1"
                            checked={ group3.option1 }
                            onChange={ handleGroupSelect }
                        />
                    </div>
                    <div className="flex items-center gap-1 xl:ml-3">
                        <label htmlFor="" className="text-gray-500 text-sm">
                            Contar Retardo
                        </label>
                        <input 
                            className="accent-gray-800 focus:accent-gray-800"
                            type="checkbox" 
                            name="group3"
                            value="option2"
                            checked={ group3.option2 }
                            onChange={ handleGroupSelect }
                        />
                    </div>
                </div>
            <div className="border-t">
                <h6 className="text-gray-600 pt-3 pb-1 flex items-center gap-1 text-md"> <HiCheckCircle  className="bg-primary rounded-lg text-white text-sm" /> Usuarios: </h6>
                <div className="flex items-center gap-1 xl:ml-3">
                    <label htmlFor="" className="text-gray-500 text-sm">
                    Activos
                    </label>
                    <input 
                        className="accent-gray-800 focus:accent-gray-800"
                        type="checkbox"
                        name="group1"
                        value="option1"
                        checked={ group1.option1 }
                        onChange={ handleGroupSelect }
                    />
                </div>
                <div className="flex items-center gap-1 xl:ml-3">
                    <label htmlFor="" className="text-gray-500 text-sm">
                    No activos
                    </label>
                    <input 
                        className="accent-gray-800 focus:accent-gray-800"
                        type="checkbox"
                        name="group1"
                        value="option2"
                        checked={ group1.option2 }
                        onChange={ handleGroupSelect }
                    />
                </div>
            </div>
            <div className="border-t"> 
                <h6 className="text-gray-600 pt-3 pb-1 flex items-center gap-1 text-md"> <HiSortAscending className="bg-primary rounded-lg text-white text-sm" /> Filtrar Por:</h6>
                <div className="flex items-center gap-1 xl:ml-3">
                    <label htmlFor="" className="text-gray-500 text-sm">
                        Fecha Actual
                    </label>
                    <input 
                        className="accent-gray-800 focus:accent-gray-800"
                        type="checkbox" 
                        name="group2"
                        value="option1"
                        checked={ group2.option1 }
                        onChange={ handleGroupSelect }
                    />
                </div>
                <div className="flex items-center gap-1 xl:ml-3">
                    <label htmlFor="" className="text-gray-500 text-sm">
                    Fecha Anterior
                    </label>
                    <input 
                        className="accent-gray-800 focus:accent-gray-800"
                        type="checkbox" 
                        name="group2"
                        value="option2"
                        checked={ group2.option2 }
                        onChange={ handleGroupSelect }
                    />
                </div>
                <div className="flex items-center gap-1 xl:ml-3">
                    <label htmlFor="" className="text-gray-500 text-sm">
                    Nombre a-z
                    </label>
                    <input 
                        className="accent-gray-800 focus:accent-gray-800"
                        type="checkbox" 
                        name="group2"
                        value="option3"
                        checked={ group2.option3 }
                        onChange={ handleGroupSelect }
                    />
                </div>
            </div>
            <div className="border-t">
                <h6 className="text-gray-600 pt-3 pb-1 flex items-center gap-1 text-md"> <HiXMark className="bg-primary rounded-lg text-white text-lg text-sm" /> Remover campos:</h6>
                <div className="flex items-center gap-1 xl:ml-3">
                    <label htmlFor="" className="text-gray-500 text-sm">
                        Lienciatura
                    </label>
                    <input 
                        className="accent-gray-800 focus:accent-gray-800"
                        type="checkbox" 
                        name="group4"
                        value="option1"
                        checked={ group4.option1 }
                        onChange={ handleGroupSelect }
                    />
                </div>
                <div className="flex items-center gap-1 xl:ml-3">
                    <label htmlFor="" className="text-gray-500 text-sm">
                        Materia
                    </label>
                    <input 
                        className="accent-gray-800 focus:accent-gray-800"
                        type="checkbox" 
                        name="group4"
                        value="option2"
                        checked={ group4.option2 }
                        onChange={ handleGroupSelect }
                    />
                </div>
                <div className="flex items-center gap-1 xl:ml-3">
                    <label htmlFor="" className="text-gray-500 text-sm">
                    Tema
                    </label>
                    <input 
                        className="accent-gray-800 focus:accent-gray-800"
                        type="checkbox" 
                        name="group4"
                        value="option3"
                        checked={ group4.option3 }
                        onChange={ handleGroupSelect }
                    />
                </div>
                <div className="flex items-center gap-1 xl:ml-3">
                    <label htmlFor="" className="text-gray-500 text-sm">
                        Semestre
                    </label>
                    <input 
                        className="accent-gray-800 focus:accent-gray-800"
                        type="checkbox" 
                        name="group4"
                        value="option4"
                        checked={ group4.option4 }
                        onChange={ handleGroupSelect }
                    />
                </div>
                <div className="flex items-center gap-1 xl:ml-3">
                    <label htmlFor="" className="text-gray-500 text-sm">
                        Horario de salida
                    </label>
                    <input 
                        className="accent-gray-800 focus:accent-gray-800"
                        type="checkbox" 
                        name="group4"
                        value="option5"
                        checked={ group4.option5 }
                        onChange={ handleGroupSelect }
                    />
                </div>
            </div>
        </div>

        

        <div className="bg-bgc_white-50 border-t py-2 px-1 w-full flex justify-between gap-2 mb-4">
            <button className="bg-gray-600 text-white rounded-full flex items-center justify-center flex-wrap gap-2 w-full"> <HiDocumentDownload />  </button>

            <button className="bg-primary rounded-full text-white  mx-auto py-1 hover:bg-blueColor-900 w-full">
                Filtrar
            </button>
        </div>


    </div>
    </>
  )
}
