import { useState } from 'react';
import { DashboardTopBar, DashboardFilterContainer, DashboardTableContainer} from './';
import { useNewModal } from '../../hooks';
import { UserProvider } from '../../context/dashboard/UserProvider';

export const Dashboard = () => {

  const [selectedOption, setSelectedOption] = useState('opt1');
    
  const handleSelectedOption = (evt) => {
      setSelectedOption(evt.target.value)
  }

  const [userInfo, setUserInfo] = useState(false);

  const handleUserInfo = ( user ) => {
      setUserInfo(user);
  }
    // Show Modal
  const { onShowModal, showModal } = useNewModal([
      {id: 1, className: 'invisible', status: false },
  ]);

  const userSettings = showModal[0];
  return (
    <UserProvider>
      {/* Top Bar */}
      <DashboardTopBar selectedOption={ selectedOption } handleSelectedOption={ handleSelectedOption } />

      {/*  */}
      <div className="grid justify-items-center items-center w-screen overflow-y-scroll h-screen overflow-x-hidden mt-12">
        <div className='grid-register w-screen h-full'>
            {/* Filter Data */}
            <DashboardFilterContainer handleUserInfo={ handleUserInfo } userSettings={ userSettings } selectedOption={ selectedOption } handleSelectedOption={ handleSelectedOption } /> 

            {/* Filtered Data - Query */}
            <DashboardTableContainer userInfo={ userInfo } selectedOption={ selectedOption } handleSelectedOption={ handleSelectedOption } onShowModal={ onShowModal } userSettings={ userSettings } />
          </div>
      </div>
    </UserProvider>


  )
}
