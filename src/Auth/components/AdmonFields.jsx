import { HiCheckCircle, HiDocumentDownload, HiOutlineAcademicCap, HiOutlineCalendar, HiOutlineUser, HiSortAscending, HiSortDescending, HiXCircle } from "react-icons/hi"

export const AdmonFields = () => {
  return (
    <>
    <>
    <div className="flex flex-col gap-10 mx-auto h-full">
        <div className="flex flex-col gap-8 flex-wrap justify-between">
            <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-gray-600">
            <div className="flex items-center gap-2">
               <HiOutlineCalendar /> Inicio:
            </div>
            </label>
            <input type="date" className="rounded outline-none border-b focus:border-gray-900 focus:border-1 focus:border-blue-600 focus:rounded-none py-1 px-2 text-gray-700" />
            </div>

        <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-gray-600">
                <div className="flex items-center gap-2">
                    <HiOutlineCalendar /> Fin:
                </div>
            </label>
            <input type="date" className="rounded outline-none border-b focus:border-gray-900 focus:border-1 focus:border-blue-600 focus:rounded-none py-1 px-2 text-gray-700" />
        </div>

        </div>

        <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-gray-600">
             <div className="flex items-center gap-2">
                <HiOutlineUser /> Nombre:
             </div>
            </label>
            <input type="text" className="rounded outline-none border-b focus:border-gray-900 focus:border-1 focus:border-blue-600 focus:rounded-none py-1 px-2 text-gray-700 w-auto" />
        </div>

        <div className="">
            <h6 className="text-gray-600 font-semibold">Opciones</h6>
            <div>
                <h6 className="text-gray-500 pt-3 pb-1">Usuarios: </h6>
                <div className="flex items-center gap-1">
                    <div className="text-green-700">
                        <HiCheckCircle />
                    </div>
                    <label htmlFor="" className="text-gray-600">
                    Online
                    </label>
                    <input type="checkbox" />
                </div>
                <div className="flex items-center gap-1">
                    <div className="text-gray-800">
                        <HiXCircle />
                    </div>
                    <label htmlFor="" className="text-gray-600">
                    Offline
                    </label>
                    <input type="checkbox" />
                </div>
            </div>
            <div className="">
                <h6 className="text-gray-500 pt-3 pb-1">Odenadr Por:</h6>
                <div className="flex items-center gap-1">
                    <div className="text-gray-800">
                        <HiSortAscending />
                    </div>
                    <label htmlFor="" className="text-gray-600">
                    Odenado
                    </label>
                    <input type="checkbox" />
                </div>
                <div className="flex items-center gap-1">
                    <div className="text-gray-800">
                        <HiSortDescending />
                    </div>
                    <label htmlFor="" className="text-gray-600">
                    Desordenado
                    </label>
                    <input type="checkbox" />
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-gray-600">
            <div className="flex items-center gap-2">
                <HiOutlineAcademicCap /> Licenciatura
            </div>
            </label>
            <input type="text" className="rounded outline-none border-b focus:border-gray-900 focus:border-1 focus:border-blue-600 focus:rounded-none py-1 px-2 text-gray-700" />
        </div>

        <div className="bg-bgc_white-50 border-t py-2 px-1 w-full flex justify-between gap-2 mb-4">
            <button className="bg-gray-600 text-white rounded-full flex items-center justify-center flex-wrap gap-2 w-full"> <HiDocumentDownload />  </button>

            <button className="bg-blueColor-800 rounded-full text-white  mx-auto py-1 hover:bg-blueColor-900 w-full">
                Buscar
            </button>
        </div>


    </div>
    </>
    </>
  )
}
