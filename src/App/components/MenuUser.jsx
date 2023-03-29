import { HiBookOpen, HiX } from "react-icons/hi"
import { Clock } from "./Clock"

export const MenuUser = ({menuState, handleModal}) => {
  return (
    <div className="absolute w-full h-full top-5 right-5 rounded-lg z-20 bg-blueColor-50">
        <div className="relative w-full h-full bg-blueColor-50 grid justify-items-center items-center">
            <div className="p-4 bg-blueColor-50 w-72 text-center">
                <div className="mb-4">
                    <li className="text-gray-700 md:text-lg"> Leer Documentacion </li>
                </div>
                <div>
                    <li className="text-gray-700 md:text-lg"> <p className="mb-2">Clases totales por quincena: </p>
                        <div className="border bg-bgc_white-50 p-4">
                            <p className="text-gray-800 text-2xl flex justify-center items-center gap-2"> <HiBookOpen /> 9 / 13 </p>
                        </div>
                    </li>
                </div>
            </div>
            <div 
                onClick={ () => handleModal(menuState) }
                className="absolute top-0 right-0 p-1 bg-gray-800 text-white m-2 rounded-lg hover:bg-gray-900 cursor-pointer md:w-10 md:h-10 flex items-center justify-center"
            >
                <HiX />
            </div>
        </div>
    </div>
  )
}
