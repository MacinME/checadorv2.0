import React from 'react'
import { TableUsers } from './TableUsers'
import { TableRegisterDoc } from './TableRegisterDoc'
import { HiDatabase } from 'react-icons/hi'

export const QueryData = ({ selectedOption }) => {
  return (
    <div className='flex flex-col overflow-y-scroll bg-bgc_white-50 p-2 h-full'>
        <div className='bg-bgc_white-50 rounded-lg h-full'>
            {
                selectedOption === 'opt2' ? <TableUsers /> : selectedOption === 'opt3' ? <TableRegisterDoc /> : selectedOption === 'opt4' ? <div className='text-center mt-48 text-2xl text-gray-700'>Datos Administrativos</div> : <h2 className='text-gray-800 text-2xl text-center flex justify-center items-center gap-4 mt-60'> <HiDatabase /> Selecciona una base de datos</h2>
            }
        </div>
    </div>
  )
}
