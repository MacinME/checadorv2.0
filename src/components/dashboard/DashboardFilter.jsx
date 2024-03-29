import { HiCalendar, HiClock } from 'react-icons/hi';
import { useCheckbox, useForm } from '../../hooks';
import { DashboardCheckbox, DashboardSearchInput } from './';
import { filterTypes } from '../../data';

export const DashboardFilter = ({ getAllData }) => {

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
    })

    const [ group4, onSelectOptionsField ] = useCheckbox({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
        option5: false,
        option6: false,
    })

    const { onInputChange, tolerance_value, startDate, endDate, formState, onCheckbox } = useForm({
        search: '',
        startDate: '',
        endDate: '',
        tolerance_value: '',
        group1_tolerance: null,
        group1_delayedTime: null,
        group2_online: true,
        group2_offline: null,
        group3_sortBy: {
            actualDate: null, // By actual date
            lastDate: null, // By last date
        },
        group4_degree: null,
        group4_subject: null,
        group4_topic: null,
        group4_grade: null,        
        group4_regLogin: null,
        group4_regLogout: null,
    });

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
            <div className="flex gap-2 items-center justify-around">
                <div>
                    <label>
                        <div className="flex items-center gap-2 w-full text-gray-600 dark:text-gray-300 rounded-lg px-2 font-semibold">
                            <HiCalendar className="text-sm" /> Fecha inicio:
                        </div>
                    </label>
                    <input 
                        type="date"
                        name="startDate"
                        value={ startDate }
                        onChange={ onInputChange }
                        className="w-full bg-white dark:bg-dark-700 dark:text-gray-200 outline-none border-gray-200 focus:rounded-md py-1 px-2 text-gray-600 rounded-md dark:border-gray-800 border-b" 
                    />
                </div>
                <div>
                    <label>
                        <div className="flex items-center gap-2 w-full text-gray-600 dark:text-gray-300 rounded-lg px-2 font-semibold">
                            <HiCalendar className="text-sm" /> Fecha fin:
                        </div>
                    </label>
                    <input 
                        type="date"
                        name="endDate"
                        value={ endDate }
                        onChange={ onInputChange }
                        className="w-full bg-white dark:bg-dark-700 dark:text-gray-200 outline-none border-gray-200 focus:rounded-md py-1 px-2 text-gray-600 rounded-md dark:border-gray-800 border-b" 
                    />
                </div>

                <div>
                <label>
                        <div className="flex items-center gap-2 w-full text-gray-600 dark:text-gray-300 rounded-lg px-2 font-semibold">
                            <HiClock className="text-sm" /> Tolerancia:
                        </div>
                    </label>
                    <input 
                        type="number" 
                        placeholder="10"
                        name="tolerance_value"
                        min={ 0 }
                        value={ tolerance_value }
                        onChange={ onInputChange }
                        className="w-full bg-white dark:bg-dark-700 dark:text-gray-200 outline-none border-gray-200 focus:rounded-md py-1 px-2 text-gray-600 rounded-md dark:border-gray-800 border-b"
                    />
                </div>
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

        </div>

        <div className="w-full w-full flex justify-end gap-2">            
            <button 
                type="submit"
                className="w-24 h-8 flex items-center font-semibold justify-center bg-primary rounded-md text-white text-center hover:bg-blueColor-900 w-24 h-24"
            >
                Filtrar
            </button>
        </div>
    </form>

  )
}
