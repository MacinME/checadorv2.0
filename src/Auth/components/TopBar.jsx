import { useNewModal } from "../Helpers/useNewModal";
import { MenuOptions } from "./MenuOptions";
import { ProfileAdmin } from "./ProfileAdmin";
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import { SelectDataBase } from "./SelectDataBase";


export const TopBar = ({ selectedOption, handleSelectedOption }) => {

    const { showNewModal, handleModal } = useNewModal([
        {id: 1, status: false},
    ]);

    const stateOptions = showNewModal[0];

  return (
    <div className='bg-blueColor-50 border-b flex items-center gap-5 w-full fixed top-0 z-20 h-12'>
        {/* Profile Admin */}
        <div
            className="relative flex items-center gap-2 ml-6 cursor-pointer"
            onClick={ () => handleModal(stateOptions)  }
        >   
            <ProfileAdmin /> <GoTriangleDown className={`${ stateOptions.status ? 'text-gray-800' : 'text-gray-400' }`} />
        </div>

        {/* Select DataBase */}
        <SelectDataBase selectedOption={ selectedOption } handleSelectedOption={ handleSelectedOption }  />

        <div className='rounded-lg absolute top-12 left-4'>
            <div className="relative">
                {
                    stateOptions.status && (
                        <>
                            {/* Menu Options  */}
                            <MenuOptions />
                            <div className="absolute text-xl text-white -top-3 left-5">
                                <GoTriangleUp />
                            </div>
                        </>
                    )
                }    
            </div>  
        </div>
    </div>
  )
}
