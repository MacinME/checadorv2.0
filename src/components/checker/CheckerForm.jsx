import { useContext, useRef, useState } from 'react';
import { HiBookmarkAlt, HiClipboard, HiClock } from 'react-icons/hi';
import { useFetch, useForm } from '../../hooks';
import { AuthContext, RegisterContext } from '../../context';
import { DashboardErrorMessage } from '../dashboard/DashboardErrorMessage';
import { onDelayTime, onGet24TimeFormat, onGetSubject } from '../../helpers';
import { days } from '../../data';

export const CheckerForm = () => {

    const [chooseDegree, setChooseDegree] = useState(null);
    const { userState } = useContext(AuthContext);
    const { registeredData, onUpdateData } = useContext(RegisterContext);
    const errorRef = useRef();
    const { topic, onInputChange, formState } = useForm({
        degree: '',
        subject: '',
        topic: '',
    });

    const today = days[new Date().getDay()];
    const { user } = userState;

    const onChooseDegree = (evt) => {
        setChooseDegree( evt.target.value );
        onInputChange( evt );
    }

    const { onFetchData } = useFetch('http://localhost:8081/users/api/send', 'POST');

    const onSendData = async(myData) => {
        const getData = await onFetchData(myData);
        onUpdateData({ lastClass: getData.newRegister });
    }

    const onSubmitForm = async(evt) => {
        evt.preventDefault();
        const { degree, subject, topic } = formState;
        if(degree.trim().length < 1, subject.trim().length < 1, topic.trim().length < 1){
            return errorRef.current.style.display = 'block';
        }

        const getSubjectData = onGetSubject(user, degree, subject, today);

        const data = {
            ...formState,
            degree: user.subjects.filter( l => l.id === Number(degree) )[0].degree,
            subject: getSubjectData.subject,
            grade: getSubjectData.grade,
            originalTime: getSubjectData.start,
            id_Register: Date.now(), 
            idCeut: userState.user.idCeut,
            idUser: userState.user.uid,
            date: new Date().toLocaleDateString(),
            login: onGet24TimeFormat(),
            logout: null,
            delayedTime: onDelayTime(user, degree, subject, today)
        }
        await onSendData( data );
    }

  return (
    <form onSubmit={ onSubmitForm }>
        <div className="relative flex flex-col gap-4 my-8">
            <label
            className="flex items-center gap-2 px-2 mx-2 text-gray-600 text-sm transition-all tracking-wider rounded dark:text-gray-400">  <HiBookmarkAlt /> Elegir Clase </label>
            <select
                onChange={ onChooseDegree }
                name="degree"
                className="w-80 invalid-input peer border h-12 px-2 outline-none focus:border focus:border-gray-400 rounded-lg placeholder-transparent text-gray-700 bg-white tracking-wider dark:bg-dark-700 dark:border-gray-700 dark:focus:border-gray-600 dark:text-gray-400" 
            >
                <option value="">Seleccionar Nivel Academico</option>
                {
                    user.subjects.map(( level ) => (
                        <option 
                            key={ level.id }
                            value={ level.id }
                        >
                            { level.degree }
                        </option>
                    ))
                }
            </select>

            {
                chooseDegree &&
                (
                    <select
                        name="subject" 
                        onChange={ onInputChange }
                        className="w-80 invalid-input peer border h-12 px-2 outline-none focus:border focus:border-gray-400 rounded-lg placeholder-transparent text-gray-700 bg-white tracking-wider dark:bg-dark-700 dark:border-gray-700 dark:focus:border-gray-600 dark:text-gray-400" 
                    >
                        <option value="">Seleccrionar clase</option>
                        {
                            user.subjects.map((level) => {
                                if(level.id === Number(chooseDegree)){
                                    return level.data.map( data => {
                                        if(data.day.toLowerCase() === today.toLowerCase() ){
                                            return data.subjects.map( subject => (
                                                subject.subject.trim().length > 1 
                                                    && (<option 
                                                        key={ subject.id_Time }
                                                        value={ subject.id_Time } 
                                                    > { `${ subject.subject.toUpperCase() } - ${ subject.start } - ${ subject.end }` } </option>)
                                            ))
                                        }
                                    })
                                }
                            })
                        }
                    
                    </select>
                )
            }
        </div>
        <div className="relative form-input flex flex-col gap-4 my-8">
            <input 
                name="topic"
                value={ topic }
                onChange={ onInputChange }
                placeholder="Ingresa el tema"
                className="w-80 invalid-input peer border h-12 px-2 outline-none focus:border focus:border-gray-400 rounded-lg placeholder-transparent text-gray-700 tracking-wider bg-white dark:bg-dark-700 dark:border-gray-700 dark:focus:border-gray-600 dark:text-gray-400" 
            />
            <label
            className="flex items-center gap-2 px-2 mx-2 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm bg-white tracking-wider rounded dark:bg-dark-700 dark:text-gray-400 dark:peer-placeholder-shown:text-gray-400 dark:peer-focus:text-gray-100"> <HiClipboard /> Tema </label>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
            <button
                className="btnModal-save flex items-center justify-center gap-2 rounded text-gray-700 py-2 px-2 hover:text-white dark:text-gray-400 dark:hover:text-white">
                <HiClock /> Iniciar Clase
            </button>
        </div>
        <div 
            ref={ errorRef }
            className="hidden"
        >
            <DashboardErrorMessage message="Favor de llenar todos los campos" />
        </div>
    </form>
  )
}
