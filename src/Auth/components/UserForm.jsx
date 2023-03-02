// Import Components
import { FormInput } from '../components/index'

export const UserForm = () => {

    const inputs = [
        {
            id: 1,
            type: "text",
            label: "Nombre de Usuario",
            name: "userName",
            placeholder: "Ingresa el nombre completo",
            errorMessage: "El campo nombre es requerido",
            pattern: '^[/\*([^\*]+)\*/gi]',
            required: true
        },
        {
            id: 2,
            type: "text",
            label: "Rol",
            name: "userRol",
            placeholder: "Ingresa rol",
            errorMessage: "El campo rol es requerido",
            pattern: '^[/\*([^\*]+)\*/gi]',
            required: true
        },
        {
            id: 3,
            type: "number",
            label: "ID Usuario",
            name: "userIdCeut",
            placeholder: "Id Ceut = 1234",
            errorMessage: "El campo ID es requerido",
            pattern: '^[/\*([^\*]+)\*/gi]',
            required: true
        },
        {
            id: 4,
            type: "email",
            label: "Correo electronico",
            name: "email",
            placeholder: "example@ceut.edu.mx",
            errorMessage: "El campo correo es requerido",
            pattern: '^[/\*([^\*]+)\*/gi]',
            required: true
        },
    ]


  return (
    <form className="w-full">
        {
            inputs.map( input => (
                <FormInput 
                    key={ input.id }
                    {...input}
                />
            ))
        }
    </form>
  )
}
