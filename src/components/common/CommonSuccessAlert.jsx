import { HiCheck } from 'react-icons/hi';

export const CommonSuccessAlert = ({ message }) => {
  return (
    <div className="w-64 h-16 bg-blueColor-100 dark:bg-dark-700 rounded-tl-xl rounded-bl-xl absolute z-30 top-10 right-0 flex items-center px-4">
        <div className="flex gap-3 items-center">
            <HiCheck className="bg-alert-successicon rounded-full fill-gray-900" />
            <div className="flex flex-col">
                <p className="text-gray-600 dark:text-gray-300 font-bold">Exito</p>
                <span className="text-gray-500 dark:text-gray-500 text-base tracking-wider">{ message }</span>
            </div>
        </div>
    </div>
  )
}
