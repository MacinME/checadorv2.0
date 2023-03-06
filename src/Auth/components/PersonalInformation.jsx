
export const PersonalInformation = () => {
  return (
    <div>
        <div className="flex justify-around">
            <div className="bg-white py-5 px-10 rounded-2xl w-1/3">
                <div>
                    <div>
                        <span>Registro Docente</span>
                        <p>12/02/2022</p>
                    </div>

                    <button>
                        
                    </button>
                </div>
            </div>

            <div className="bg-white py-5 px-10 rounded-2xl w-1/3">
                <div className="flex flex-col gap-5">
                    <div>
                        <span> Nombre </span>
                        <p> Ahamd Ekstrom Bothman </p>
                    </div>
                    <div>
                        <span> Id Usuario </span>
                        <p> 23123 </p>
                    </div>
                    <div>
                        <span> Rol </span>
                        <p>Administrativo</p>
                    </div>
                    <div>
                        <span>Correo</span>
                        <p> user@gmai.com </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
