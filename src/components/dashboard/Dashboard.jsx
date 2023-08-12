import { useState } from 'react';
import { DashboardTopBar, DashboardFilterContainer, DashboardTableContainer } from './';
import { useNewModal } from '../../hooks';

export const Dashboard = () => {

  const [selectedOption, setSelectedOption] = useState('opt1');
    
  const handleSelectedOption = (evt) => {
      setSelectedOption(evt.target.value)
  }

  const { handleModal, showNewModal } = useNewModal([
      {id: 1, status: false },
      {id: 2, status: false },
  ]);

  const onModalUsers = () => {
    handleModal(showNewModal[0]);
  }
  const onModalFilter = () => {
    handleModal(showNewModal[1]);
  }

  return (
    <>
      {/* Top Bar */}
      <DashboardTopBar selectedOption={ selectedOption } handleSelectedOption={ handleSelectedOption } />

      {/*  */}
      <div className="grid justify-items-center items-center w-screen h-screen overflow-x-hidden mt-12">
        <div className="grid-register w-screen h-full">
            {/* Filter Data */}
            <DashboardFilterContainer 
              onShowModal={ onModalUsers } 
              onModalFilter={ onModalFilter }              
            /> 

            {/* Filtered Data - Query */}
            <DashboardTableContainer 
              onModalFilter={ onModalFilter }
              modalState={ showNewModal[1] }
              onModal={ onModalUsers }
              userState={ showNewModal[0] }
              selectedOption={ selectedOption } 
              handleSelectedOption={ handleSelectedOption } 
            />
          </div>
      </div>
    </>


  )
}
