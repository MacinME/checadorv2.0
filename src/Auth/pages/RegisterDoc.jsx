// Import React library 
import { useState } from 'react';
import { TopBar } from '../components/TopBar';
import { FilterData } from '../components/FilterData';
import { QueryData } from '../components/QueryData';

export const RegisterDoc = ({ onShowModal, disUserModal}) => {

  const [selectedOption, setSelectedOption] = useState('opt1');
    
  const handleSelectedOption = (evt) => {
      setSelectedOption(evt.target.value)
  }

  return (
    <>
      {/* Top Bar */}
      <TopBar selectedOption={ selectedOption } handleSelectedOption={ handleSelectedOption } />

      {/*  */}
      <div className="grid justify-items-center items-center w-screen overflow-y-scroll h-screen overflow-x-hidden mt-12">
        <div className='grid-register w-screen h-full'>
            {/* Filter Data */}
            <FilterData selectedOption={ selectedOption } handleSelectedOption={ handleSelectedOption } /> 

            {/* Filtered Data - Query */}
            <QueryData selectedOption={ selectedOption } handleSelectedOption={ handleSelectedOption } />
          </div>
      </div>
    </>


  )
}
