import { HiAcademicCap, HiPencil } from "react-icons/hi";
import { HiArrowDown, HiXMark } from "react-icons/hi2";

export const ClassCard = ( { days, subject, degree }) => {
  return (
    <div className="col-span-1 rounded-lg">
        <div className="bg-white dark:bg-dark-700 h-auto to-yellow-800 rounded-tl-lg rounded-tr-lg py-5 relative hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
            <div className="flex flex-col text-center text-lg text-gray-700 flex items-center justify-center flex-wrap dark:text-gray-400"> 
                <div className="text-2xl dark:text-gray-800 mr-2 text-gray-700 bg-gradient-to-r from-indigo-200 to-pink-200 p-2 rounded-lg mr-2 self-center mb-2">
                    <HiAcademicCap/>    
                </div> 
                <p className="text-sm text-gray-500">{ degree }</p>
                <span className="w-full text-gray-500 dark:text-gray-400 font-bold"> { subject }</span>
            </div>
            <div className="absolute w-16 rounded top-0 right-0 flex items-center justify-around">
                <button className="bg-blueColor-100 dark:bg-dark-800 dark:text-white w-full h-6 flex items-center justify-center rounded-bl-lg text-gray-800 hover:text-gray-800 dark:hover:text-gray-800 dark:hover:bg-indigo-200 hover:bg-indigo-200 border-white outline-none"> <HiPencil /> </button>
                <button className="bg-blueColor-100 dark:bg-dark-800 dark:text-white w-full h-6 flex items-center justify-center rounded-tr-lg text-gray-900 hover:text-gray-800 dark:hover:text-gray-800 dark:hover:bg-red-300 hover:bg-red-300 outline-none"> <HiXMark /> </button>
            </div>
        </div>
        <div className="grid grid-cols-2 bg-white dark:bg-dark-700 dark:border-gray-700 rounded-bl-lg rounded-br-lg px-4 py-5 w-full">
            {
                days.map( item => (
                    <div key={ item.day } className="xl:w-full">
                        <p className="text-gray-700 dark:text-gray-300 w-24 text-center self-center font-semibold tracking-wider"> { item.day } </p>
                        <div className="xl: xl:w-full xl:justify-start xl:gap-3 py-2 px-2">
                            {   
                                item.subjects.map( (subject, index) => (
                                    <div key={ index } className="xl:flex border dark:border-gray-800 rounded-lg md:mb-2 sm:mb-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
                                        <p className="text-gray-600 dark:text-gray-300 p-1 text-sm">{ subject.start + ' - ' + subject.end } </p>
                                        <div className="p-1 h-full text-center ">
                                            <p className="text-gray-600 dark:text-gray-300 text-center text-sm"> G: { subject.grade } </p>
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
