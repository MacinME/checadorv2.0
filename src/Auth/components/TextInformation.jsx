
export const TextInformation = ({ userInfo }) => {

  return (
    <div className="flex flex-col gap-4">
        <div className="items-center">
            <span className="font-semibold text-sm text-gray-800"> Nombre </span>
            <p className="text-gray-600"> { userInfo.name } </p>
        </div>
        <div className="items-center">
            <span className="font-semibold text-sm text-gray-800"> Id Usuario </span>
            <p className="text-gray-600"> { userInfo.idCEUT } </p>
        </div>
        <div className="items-center">
            <span className="font-semibold text-sm text-gray-800"> Rol </span>
            <p className="text-gray-600"> { userInfo.rol } </p>
        </div>
        <div className="items-center">
            <span className="font-semibold text-sm text-gray-800">Correo</span>
            <p className="text-gray-600"> { userInfo.email } </p>
        </div>
    </div>
    )
}
