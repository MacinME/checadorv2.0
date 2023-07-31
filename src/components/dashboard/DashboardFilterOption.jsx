import { useState } from 'react';
import { HiDatabase } from 'react-icons/hi';
import { DashboardFilter } from './'

export const DashboardFilterOption = () => {

  const [selectedOption, setSelectedOption] = useState('opt1');

  const handleSelectedOption = (evt) => {
    setSelectedOption(evt.target.value)
  }

  return (
        <div className="bg-bgc_white-50 m-3 rounded-tr-lg relative">
            <form className="">
              <div className="height-filter overflow-y-scroll bg-bgc_white-50 pt-4 px-4 pb-16"> 
                <div className="flex items-center justify-center mb-5"> 
                  <HiDatabase />
                  <select value={selectedOption} className="rounded outline-none border-b focus:border-gray-900 focus:border-1 focus:border-blue-600 focus:rounded-none py-1 px-2 text-gray-700" onChange={ handleSelectedOption }>
                      <option value="opt1">Base de Datos</option>
                      <option value="opt2">Usuarios</option>
                      <option value="opt3">Docentes</option>
                      <option value="opt4">Administrativos</option>
                  </select>
                </div>

                {
                  selectedOption === 'opt3' ? <DashboardFilter /> : selectedOption === 'opt4' ? <h1>Admon Filter</h1> : null
                }

              </div>
            </form>
        </div>
  )
}
