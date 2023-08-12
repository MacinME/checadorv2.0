import { useContext } from 'react';
import { AuthContext } from '../../context';
import { colorsFrontend } from '../../data';

export const CheckerProfilePhoto = ({ menuState, handleModal }) => {

  const { userState } = useContext( AuthContext );
  const { user } = userState;

  return (
    <div className="p-2 rounded-lg">
      <div
        onClick={ () => handleModal( menuState ) }
        className="flex justify-center flex-col items-center gap-2 p-2 cursor-pointer rounded-lg"
      >
        <div className={`w-16 rounded-full h-16 flex justify-center items-center ${ colorsFrontend[user.img.color] }`}>
          <p className="font-bold text-center text-xl">{ user.img.letter }</p>
        </div>  
      </div>
      <p className="text-gray-700 text-center dark:text-gray-200 font-semibold">{ user.name }</p>
    </div>
  )
}
