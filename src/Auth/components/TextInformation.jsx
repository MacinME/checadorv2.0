
export const TextInformation = () => {
  return (
    <div className="flex flex-col gap-4">
        <div className="items-center">
            <span className="font-semibold text-sm"> Nombre </span>
            <p className="text-gray-600"> Ahamd Ekstrom Bothman </p>
        </div>
        <div className="items-center">
            <span className="font-semibold text-sm"> Id Usuario </span>
            <p className="text-gray-600"> 23123 </p>
        </div>
        <div className="items-center">
            <span className="font-semibold text-sm"> Rol </span>
            <p className="text-gray-600">Administrativo</p>
        </div>
        <div className="items-center">
            <span className="font-semibold text-sm">Correo</span>
            <p className="text-gray-600"> user@gmai.com </p>
        </div>
    </div>
    )
}
