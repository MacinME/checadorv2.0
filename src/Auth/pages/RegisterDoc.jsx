// Import React library 
import { useState } from 'react';
import { HiClock, HiCog, HiDatabase, HiDotsVertical, HiLogout, HiUser } from 'react-icons/hi';
import { HiSun } from 'react-icons/hi2';
import { AdmonFields } from '../components/AdmonFields';
import { DocentesFields } from '../components/DocentesFields';
import { ProfileAdmin, TableRegisterDoc, TableUsers } from '../components/index';
import { useNewModal } from '../Helpers/useNewModal';

export const RegisterDoc = ({ onShowModal, disUserModal}) => {

  const { showNewModal, handleModal } = useNewModal([
    {id: 1 , status: true}
  ]);
  
  const [selectedOption, setSelectedOption] = useState('opt1');

  const handleSelectedOption = (evt) => {
    setSelectedOption(evt.target.value)
  }
  const stateOptions = showNewModal[0];

  return (
    <div className=''>
      <div className='fixed top-0 bg-blueColor-50 w-full flex items-center h-20 z-20 border-b'>
      <div className='w-250 flex justify-center items-center bg-bluecolor-50 border-b border-gray-100 xl:mr-3'>
        <div className='flex items-center justify-center w-full rounded-lg'>
          <ProfileAdmin />
        </div>
      </div>
      <div className='relative h-auto'>
        <div className='bg-blueColor-50 flex justify-between items-center absolute w-full h-full'>
          <div className='flex items-center h-10'>
            <div 
              onClick={ () => handleModal(stateOptions) }
              className="flex items-center"
            >
              <div className='cursor-pointer text-gray-600 text-xl hover:text-gray-900'>
                <HiDotsVertical />
              </div>       
            </div>
            {
                  stateOptions.status && (
                  <div className='flex gap-1 rounded-lg transition-all w-screen'>
                  <div className='p-1 rounded-lg flex items-center gap-4 text-lg cursor-pointer rounded-full'>
                    <div
                      onClick={ () => onShowModal(disUserModal) }
                      className='bg-white gap-2 text-gray-900 text-sm p-2 rounded-lg flex flex-wrap items-center hover:bg-gray-200'
                    >
                      <HiUser className='text-teal-500' /> Configuracion de usuarios
                    </div>
                  </div>
                  <div className='p-1 rounded-lg flex items-center gap-4 text-lg cursor-pointer rounded-full'>
                    <div
                      className='bg-white flex gap-2 text-gray-900 text-sm p-2 rounded-lg flex items-center hover:bg-gray-200'
                    >
                      <HiSun className='text-teal-500' /> Tema
                    </div>
                  </div>
                  <div className='p-1 rounded-lg flex items-center gap-4 text-lg cursor-pointer rounded-full'>
                    <div
                      className='bg-white flex gap-2 text-gray-900 text-sm p-2 rounded-lg flex items-center hover:bg-gray-200'
                    >
                      <HiCog className='text-teal-500' /> Configuracion Sistema
                    </div>
                  </div>
                  <div className='p-1 rounded-lg flex items-center gap-4 text-lg cursor-pointer rounded-full'>
                    <div
                      className='bg-white flex gap-2 text-gray-900 text-sm p-2 rounded-lg flex items-center hover:bg-gray-200'
                    >
                      <HiClock className='text-teal-500' /> Checador
                    </div>
                  </div>
                  <div className='p-1 rounded-lg flex items-center gap-4 text-lg cursor-pointer rounded-full'>
                    <div
                      className='bg-white flex gap-2 text-gray-900 text-sm p-2 rounded-lg flex items-center hover:bg-gray-200'
                    >
                      <HiLogout className='text-teal-500' /> Cerrar Sesion
                    </div>
                  </div>
                </div>   
                  )
                }      
          </div>
        </div>
      </div>
      </div>
      <div className="grid justify-items-center items-center w-screen overflow-y-scroll h-90 overflow-x-hidden mt-20">
        <div className='grid-register w-screen h-full'>
            <div className='bg-blueColor-50 pt-4 relative border-r border-gray-300'>
              <div className="bg-blueColor-50 m-3">
                <form className="">
                  <div className="overflow-y-scroll bg-blueColor-50 pt-4 px-4 h-300 pb-24"> 
                    <div className="flex items-center justify-center mb-5"> 
                      <HiDatabase />
                      <select value={selectedOption} className="rounded outline-none border-b focus:border-gray-900 focus:border-1 focus:border-blue-600 focus:rounded-none py-1 px-2 text-gray-700" onChange={ handleSelectedOption }>
                        <option value="opt1" disabled>Base de Datos</option>
                        <option value="opt2">Usuarios</option>
                        <option value="opt3">Docentes</option>
                        <option value="opt4">Administrativos</option>
                      </select>
                    </div>
                {
                  selectedOption === 'opt3' ? <DocentesFields /> : selectedOption === 'opt4' ? <AdmonFields /> : null
                }
                </div>
              </form>
            </div>
            </div>

            <div className='flex flex-col overflow-y-scroll bg-bgc_white-50 p-2 h-full'>



              <div className='bg-bgc_white-50 rounded-lg h-full border border-gray-200'>
              {
                  selectedOption === 'opt2' ? <TableUsers /> : selectedOption === 'opt3' ? <TableRegisterDoc /> : selectedOption === 'opt4' ? <TableRegisterDoc /> : <h2 className='text-gray-800 text-2xl text-center flex justify-center items-center gap-4 mt-60'> <HiDatabase /> Selecciona una base de datos</h2>
              }
              </div>
            </div>
          </div>
      </div>
      </div>
  )
}
