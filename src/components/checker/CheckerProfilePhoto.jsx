import { colorsFrontend } from '../../data';

export const CheckerProfilePhoto = ({ menuState, handleModal, dataLoaded }) => {
  return (
    <div className="p-2 rounded-lg">
      <div
        onClick={ () => handleModal( menuState ) }
        className="flex justify-center flex-col items-center gap-2 p-2 cursor-pointer rounded-lg"
      >

        {
          dataLoaded.img.url ? <img src={ dataLoaded.img.url } alt="Profile" className="w-16 rounded-full" /> 
          : <div className={`w-16 rounded-full h-16 flex justify-center items-center ${ colorsFrontend[dataLoaded.img.color] }`}>
              <p className="font-bold text-center text-xl">{ dataLoaded.img.letter }</p>
            </div>  
        }

      </div>
      <p className="text-gray-700 text-center dark:text-gray-200 font-semibold">{ dataLoaded.name }</p>
    </div>
  )
}
