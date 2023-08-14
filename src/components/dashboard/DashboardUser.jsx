import { colorsFrontend } from '../../data';

export const DashboardUser = ({ _id, img, name, rol, onGetUserData }) => {
  return (
    <div 
        onClick={ () => onGetUserData(_id)  }
        className="flex gap-3 items-center rounded-full cursor-pointer transition-all pl-1 hover:bg-blueColor-100 dark:hover:bg-dark-900"
    >
        <div className={`w-8 rounded rounded-full h-8 flex justify-center items-center font-bold ${ colorsFrontend[img.color] }`}>
            { img.letter }
        </div>  
        <div className="flex flex-col">
            <p className="font-semibold text-sm text-gray-800 dark:text-gray-200"> { name } </p>
            <span className="text-gray-500 dark:text-gray-400 text-sm lowercase font-semibold">{ rol }</span>
        </div>
    </div>
  )
}
