import { HiPencil } from "react-icons/hi"
import { HiComputerDesktop, HiXMark } from "react-icons/hi2"

export const ClassCard = ( classess ) => {

    const {weekDays: { monday, tuesday, wednesday, thrusday, friday, saturday }, subject } = classess;

  return (
    <div className="rounded-lg">
        <div className="bg-blueDarkColor-800 h-20 to-yellow-800 rounded-tl-lg rounded-tr-lg py-5 relative">
            <p className="text-center text-md text-white font-bold flex items-center justify-center gap-2 flex-wrap"> <HiComputerDesktop /> { subject } </p>
            <div className="absolute w-16 rounded top-0 right-0 flex items-center justify-around">
                <button className="bg-yellowColor-700 w-full h-6 flex items-center justify-center rounded-bl-lg text-gray-900 hover:text-white hover:bg-yellowColor-900 border-r border-white outline-none"> <HiPencil /> </button>
                <button className="bg-yellowColor-800 w-full h-6 flex items-center justify-center rounded-tr-lg text-gray-900 hover:text-white hover:bg-red-600 outline-none"> <HiXMark /> </button>
            </div>
        </div>
        <div className="flex flex-wrap justify-around gap-6 bg-white rounded-bl-lg rounded-br-lg px-4 py-5 w-full border border-gray-300">
            <div className="">
                <p className="text-gray-700"> Lunes </p>
                <span className="text-blue-600">{ monday }</span>
            </div>
            <div className="">
                <p className="text-gray-700">Martes</p>
                <span className="text-blue-600">{ tuesday } </span>
            </div>
            <div className="">
                <p className="text-gray-700">Miercoles</p>
                <span className="text-blue-600"> { wednesday } </span>
            </div>
            <div className="text-gray-700">
                <p>Jueves</p>
                <span className="text-red-500"> { thrusday } </span>
            </div>
            <div className="">
                <p className="text-gray-700">Viernes</p>
                <span className="text-blue-600"> { friday } </span>
            </div>
            <div className="">
                <p className="text-gray-700">Sabado</p>
                <span className="text-blue-600"> { saturday } </span>
            </div>
        </div>  
    </div>
  )
}
