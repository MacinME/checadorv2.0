import { useContext } from 'react';
import { useFetch } from '../../hooks';
import { AlertContext, FilterContext } from '../../context';

export const DashboardDeleteModal = ({ onDeleteRegister }) => {

    const { dataFiltered, onDataFiltered } = useContext(FilterContext);
    const { onDisplayAlert } = useContext(AlertContext);
    const { onFetchData } = useFetch('http://localhost:8081/registers/delete', 'POST');

    const getIds = () => {
        return dataFiltered.map((field) => {
            return field.id_Register;
        })
    }

    const onDeleteRegisters = async() => {
        const ids = getIds();
        await onFetchData( ids );
        const alertSuccess = {
            type: 'success',
            display: true,
            message: 'Registros eliminados'
        }
        onDisplayAlert( alertSuccess );

        onDataFiltered([]);

        onDeleteRegister();

        setTimeout(() => {
            onDisplayAlert({
                type: '',
                display: false,
                message: ''
            })
        },3000);
    }

  return (
    <div className="w-screen h-full bg-transparent backdrop-brightness-50 absolute top-0 left-0 rounded-xl flex justify-center z-10">
        <div className="bg-white dark:bg-dark-700 w-64 h-32 rounded-xl px-2 py-4 mt-40">
            <p className="text-gray-700 dark:text-gray-300 text-center mb-5">Eliminar registros exportados?</p>
            <div className="flex justify-center items-center gap-3">         
                <button
                    onClick={ onDeleteRegister }
                    className="bg-gray-700 rounded-md w-auto h-8 p-2 text-gray-200 font-semibold flex justify-center items-center px-4 hover:bg-gray-800"
                >
                    Cancelar
                </button>
                <button
                    onClick={ onDeleteRegisters }
                    className="bg-red-600 rounded-md w-auto h-8 p-2 text-gray-200 font-semibold flex justify-center items-center px-4 hover:bg-red-800"
                >
                    Delete
                </button>
            </div>
        </div>
    </div>
  )
}
