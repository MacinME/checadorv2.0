import { HiOutlineSave } from 'react-icons/hi';
import { DashboardInputElement } from './';
import { useForm } from '../../hooks';
import { inputs } from '../../data';

export const DashboardUpdateUser = ({ state, handleModal }) => {

    const { onInputChange, formState } = useForm({
        userName: '',
        userRol: '',
        userID: '',
        userEmail: ''
    });

    const {userName, userRol, userID, userEmail} = formState;

    const onSubmitForm = (evt) => {
        evt.preventDefault();
        if(userName.length <= 1 || userRol.length <= 1 || isNaN(userID) || userEmail.length <= 1){
            console.log('empty field')
        }
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
            <button className=" dark:text-gray-300 btnModal-save flex items-center justify-center gap-2 rounded-full text-gray-900 py-2 px-2 text-sm">
                <HiOutlineSave /> Guardar Cambios
            </button>
        </div>
    </form>
  )
}
