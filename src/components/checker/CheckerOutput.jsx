import { useContext, useState } from 'react';
import { CheckerClock } from './';
import { RegisterContext } from '../../context';
import { onGet24TimeFormat } from '../../helpers';
import { useFetch } from '../../hooks';

let currentTime = onGet24TimeFormat();

export const CheckerOutput = () => {

    const [newTime, setNewtime] = useState( currentTime );
    const { registeredData, onUpdateData } = useContext(RegisterContext);
    const { lastClass } = registeredData;
    const { onFetchData } = useFetch('http://localhost:8081/registers/go_out', 'PUT');

    const onSetLogout = async(evt) => {
        evt.preventDefault();

        const data = {  id: lastClass._id, logout: newTime, id_Register: lastClass.id_Register }
        const getData = await onFetchData( data );
        onUpdateData(getData);
    }   


  return (
    <div className="mt-5">
        {/* Checker Clock - component */}
        <CheckerClock 
            setNewtime={ setNewtime }
            newTime={ newTime }
        />
        <form 
            onSubmit={ onSetLogout }
        >
            <div className="relative form-input flex flex-col gap-4 my-8">
                <textarea 
                    placeholder="motivo de salida antes del horario"
                className="w-72 invalid-input peer pt-2 border h-12 px-2 focus:outline-none rounded-lg placeholder-transparent text-gray-700 bg-white tracking-wider dark:bg-dark-700 dark:border-gray-700 dark:focus:border-gray-600 dark:text-gray-400" 
                />
                <label className="px-2 mx-2 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2  peer-focus:text-gray-500 peer-focus:text-sm bg-white tracking-wider rounded dark:bg-dark-700 dark:text-gray-400 dark:peer-placeholder-shown:text-gray-400 dark:peer-focus:text-gray-100
                "> Motivo de salida </label>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
                <button className="btnModal-save flex items-center justify-center gap-2 rounded text-gray-700 py-2 px-2 hover:text-white dark:text-gray-400 dark:hover:text-white">
                    Terminar Clase
                </button>
            </div>
        </form>
    </div>
  )
}
