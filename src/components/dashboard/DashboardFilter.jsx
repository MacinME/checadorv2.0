import { useState } from 'react';
import { HiCalendar } from 'react-icons/hi';
import { useCheckbox, useForm } from '../../hooks';

// DatePicker Settings
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es';
import { DashboardCheckbox, DashboardSearchInput } from './';
import { filterTypes } from '../../data';
registerLocale('es', es);

export const DashboardFilter = ({ getAllData }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [ group1, onSelectOptionsTime ] = useCheckbox({
        option1: false,
        option2: false,
    })

    const [ group2, onSelectOptionsUser ] = useCheckbox({
        option1: true,
        option2: false,
    })

    const [ group3, , onSelectSort ] = useCheckbox({
        option1: false,
        option2: false,
        option3: false,
    })

    const [ group4, onSelectOptionsField ] = useCheckbox({
        option1: false,
        option2: false,
        option3: false,
        option4: false 
    })

    const { onInputChange, formState, onCheckbox } = useForm({
        search: '',
        date: '',
        group1_tolerance: null,
        group1_delayedTime: null,
        group2_online: true,
        group2_offline: null,
        group3_sortBy: null,
        group4_degree: null,
        group4_subject: null,
        group4_topic: null,
        group4_time: null,
    });

    const onChangeDate = (date) => {
        const [start, end] = date;
        setStartDate(start);
        setEndDate(end)
    }


    const handleGroupSelect = (evt) => {
        const { id } = evt.target;
        switch (id) {
            case 'group1':
                onSelectOptionsTime(evt);
                break;
            case 'group2':
                onSelectOptionsUser(evt);
                break;
            case 'group3':
                onSelectSort(evt)
                break;
            case 'group4':
                onSelectOptionsField(evt)
                break;
            default:
                break;
        }
    }

    return (
    <form 
        onSubmit={ (evt) => getAllData( evt, formState ) }
        className="w-full flex flex-col gap-3 h-full"
    >
        <div className="w-full gap-5 flex flex-col gap-3">
            <div className="w-full">
                <DashboardSearchInput 
                    onInputChange={ onInputChange }
                    search={ formState.search }
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-gray-700">
                    <div className="flex items-center gap-2 w-full text-gray-600 dark:text-gray-300 rounded-lg px-2">
                        <HiCalendar className="text-sm" /> Fecha:
                    </div>
                </label>
                <DatePicker 
                    selected={startDate} 
                    onChange={ onChangeDate }
                    startDate={ startDate }
                    endDate={ endDate }
                    selectsRange
                    name="date"
                    showMonthDropdown
                    locale='es'            
                    className="w-full dark:border-gray-800 dark:text-gray-200 bg-transparent outline-none border-b border-gray-100 focus:border-gray-300 focus:rounded-none py-1 px-2 text-gray-700" 
                />
            </div>

        </div>

        <div className="flex flex-col gap-5 py-5 px-3 h-2/3 overflow-y-scroll">
            {
                filterTypes.map( item => (
                    <div key={ item.id } className="w-full flex flex-col gap-8">
                        <div className="w-full">
                            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-semibold border-b border-gray-100 dark:border-gray-800">{ item.title }</h3>
                            {
                                item.filter.map( (i, index) => (
                                    <div 
                                        key={ i.id }
                                        className="w-full flex flex-col gap-2 border-b border-gray-100 dark:border-gray-800"
                                    >
                                        <DashboardCheckbox 
                                            key={ i.title }
                                            i={ i }
                                            index={ index }
                                            onCheckbox={ onCheckbox }
                                            handleGroupSelect={ handleGroupSelect }
                                            groups={ { group1, group2, group3, group4 }}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }

            <div className="w-full py-2 w-full flex justify-end gap-2">
                <button 
                    className="w-24 h-8 flex items-center justify-center font-semibold bg-gray-200 text-gray-600 rounded-md text-center gap-2 w-24 h-24 hover:bg-gray-300"
                > 
                    Descargar 
                </button>

                <button 
                    className="w-24 h-8 flex items-center font-semibold justify-center bg-primary rounded-md text-white text-center hover:bg-blueColor-900 w-24 h-24"
                >
                    Filtrar
                </button>
            </div>
        </div>
    </form>

  )
}
