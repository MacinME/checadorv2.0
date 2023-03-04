// Import Components
import { HiOutlineSave } from 'react-icons/hi';
import { FormInput } from '../components/index'
import { useForm } from '../Helpers/useForm'

export const UserForm = () => {

    const { onInputChange, formState } = useForm({
        userName: '',
        userRol: '',
        userID: '',
        userEmail: ''
    });

    const {userName, userRol, userID, userEmail} = formState;

    const inputs = [
        {
            id: 1,
            type: "text",
            label: "Nombre de Usuario",
            name: "userName",
            placeholder: "Ingresa el nombre completo",
            errorMessage: "El campo nombre es requerido",
            required: true
        },
        {
            id: 2,
            type: "text",
            label: "Rol",
            name: "userRol",
            placeholder: "Ingresa rol",
            errorMessage: "El campo rol es requerido",
            required: true
        },
        {
            id: 3,
            type: "number",
            label: "ID Usuario",
            name: "userID",
            placeholder: "Id Ceut = 1234",
            errorMessage: "El campo ID es requerido",
            required: true
        },
        {
            id: 4,
            type: "email",
            label: "Correo electronico",
            name: "userEmail",
            placeholder: "example@ceut.edu.mx",
            errorMessage: "El campo correo es requerido",
            required: true
        },
    ]

    const onSubmitForm = (evt) => {
        evt.preventDefault();
        if(userName.length <= 1 || userRol.length <= 1 || isNaN(userID) || userEmail.length <= 1){
            console.log('empty field')
        }
    }

  return (
    <form onSubmit={ onSubmitForm }>
        {
            inputs.map( input => (
                <FormInput 
                    key={ input.id }
                    {...input}
                    value={ formState[input.name] }
                    onInputChange={ onInputChange }
                />
            ))
        }
        <div className="flex flex-wrap items-center justify-center gap-2">
            <button className="btnModal-save flex items-center justify-center gap-2 rounded text-gray-900 py-2 px-2">
                <HiOutlineSave /> Guardar Cambios
            </button>
        </div>
    </form>
  )
}
