export const DashboardUserInformation = ({ user }) => {
  return (
    <div className="flex flex-col gap-4">
        <div className="items-center">
            <span className="font-semibold text-sm text-gray-800 dark:text-gray-400"> Nombre </span>
            <p className="text-gray-600 dark:text-gray-300"> { user.name } </p>
        </div>
        <div className="items-center">
            <span className="font-semibold text-sm text-gray-800 dark:text-gray-400"> Id CEUT</span>
            <p className="text-gray-600 dark:text-gray-300"> { user.idCeut } </p>
        </div>
        <div className="items-center">
            <span className="font-semibold text-sm text-gray-800 dark:text-gray-400"> Rol </span>
            <p className="text-gray-600 dark:text-gray-300"> { user.rol } </p>
        </div>
        <div className="items-center">
            <span className="font-semibold text-sm text-gray-800 dark:text-gray-400">Correo</span>
            <p className="text-gray-600 dark:text-gray-300"> { user.email } </p>
        </div>
    </div>
    )
}
