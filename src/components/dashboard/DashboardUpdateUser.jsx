import { useContext } from 'react';
import { HiOutlineSave } from 'react-icons/hi';
import { DashboardInputElement } from './';
import { useFetch, useForm } from '../../hooks';
import { inputs } from '../../data';
import { UserContext } from '../../context';

export const DashboardUpdateUser = ({ user, state, handleModal }) => {

    const { onInputChange, formState } = useForm(user);
    const { onFetchData } = useFetch(`http://localhost:8081/users/update/${ user.uid }`, 'PUT');
    const { onGetUserData } = useContext(UserContext);

    const { name, rol, idCeut } = formState;

    const onSubmitForm = async(evt) => {
        evt.preventDefault();
        if(name.length <= 1 || rol.length <= 1 || isNaN(idCeut)){
            return;
        }

        await onFetchData( formState );
        onGetUserData( formState.uid );
        handleModal(state)

    }

  return (
    <form onSubmit={ onSubmitForm } className="flex flex-col py-2 gap-4 rounded-2xl">
        {
            inputs.map( input => (
                <DashboardInputElement 
                    key={ input.id }
                    {...input}
                    value={ formState[input.name] }
                    onInputChange={ onInputChange }
                />
            ))
        }
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            <button
                onClick={ () => handleModal (state)}
                className="dark:border-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 flex items-center justify-center gap-2 rounded-full text-gray-900 py-2 px-2 text-sm"
            >
                Cancelar
            </button>
            <button className="dark:text-gray-300 btnModal-save flex items-center justify-center gap-2 rounded-full text-gray-900 py-2 px-2 text-sm">
                <HiOutlineSave /> Guardar Cambios
            </button>
        </div>
    </form>
  )
}
