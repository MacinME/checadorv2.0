
export const TextInformation = ({ userInfo }) => {

  return (
    <div className="flex flex-col gap-4">
        <div className="items-center">
            <span className="font-semibold text-sm text-gray-800 dark:text-gray-400"> Nombre </span>
            <p className="text-gray-600 dark:text-gray-300"> { userInfo.name } </p>
        </div>
        <div className="items-center">
            <span className="font-semibold text-sm text-gray-800 dark:text-gray-400"> Id CEUT</span>
            <p className="text-gray-600 dark:text-gray-300"> { userInfo.idCeut } </p>
        </div>
        <div className="items-center">
            <span className="font-semibold text-sm text-gray-800 dark:text-gray-400"> Rol </span>
            <p className="text-gray-600 dark:text-gray-300"> { userInfo.rol } </p>
        </div>
        <div className="items-center">
            <span className="font-semibold text-sm text-gray-800 dark:text-gray-400">Correo</span>
            <p className="text-gray-600 dark:text-gray-300"> { userInfo.email } </p>
        </div>
    </div>
    )
}
