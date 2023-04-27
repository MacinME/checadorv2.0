import { HiAcademicCap, HiPencil } from "react-icons/hi"
import { HiComputerDesktop, HiXMark } from "react-icons/hi2"

export const ClassCard = ( { days, subject, degree }) => {
  return (
    <div className="rounded-lg col-span-4">
        <div className="bg-gray-800 h-20 to-yellow-800 rounded-tl-lg rounded-tr-lg py-5 relative">
            <p className="text-center text-lg text-white flex items-center justify-center gap-2 flex-wrap"> <HiAcademicCap /> { `${degree + ' - ' + subject } `} </p>
            <div className="absolute w-16 rounded top-0 right-0 flex items-center justify-around">
                <button className="bg-yellowColor-700 w-full h-6 flex items-center justify-center rounded-bl-lg text-gray-900 hover:text-white hover:bg-yellowColor-900 border-r border-white outline-none"> <HiPencil /> </button>
                <button className="bg-yellowColor-800 w-full h-6 flex items-center justify-center rounded-tr-lg text-gray-900 hover:text-white hover:bg-red-600 outline-none"> <HiXMark /> </button>
            </div>
        </div>
        <div className="flex flex-wrap bg-white dark:bg-dark-700 dark:border-gray-700 rounded-bl-lg rounded-br-lg px-4 py-5 w-full border border-gray-300">
            {
                days.map( item => (
                    <div key={ item.day } className="xl:flex xl:w-full">
                        <p className="text-gray-800 dark:text-gray-300 w-24 text-center self-center font-semibold"> { item.day } </p>
                        <div className="xl:flex xl:w-full xl:justify-start xl:gap-3 py-2 px-2">
                            {   
                                item.subjects.map( (subject, index) => (
                                    <div key={ index } className="xl:flex border dark:border-gray-700 rounded-lg md:mb-2 sm:mb-2">
                                        <p className="text-gray-700 dark:text-white p-1 ">{ subject.start + ' - ' + subject.end } </p>
                                        <div className="p-1 h-full text-center">
                                            <p className="text-teal-500 dark:text-teal-400 text-center"> G: { subject.grade } </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>  
    </div>
  )
}
