import { useState } from 'react';

export const useNewModal = ( inititalArray = []) => {

    // Navbar State
    const [showNewModal, setShowNewModal] = useState(inititalArray);

    const handleModal = (value = []) => {
        const values = [...showNewModal]
        values[value.id - 1] = {id: value.id , status: !value.status}
        setShowNewModal(values)
    }

    // Modal State 
    const [showModal, setShowModal] = useState(inititalArray);

    const onShowModal = (value = []) => {
      const newValues = [...showModal];
      newValues[value.id - 1] = {id: value.id, className: !value.status ? 'visible' : 'invisible', status: !value.status};
      // setModal
      setShowModal( newValues ); 

    }

  return {
    handleModal,
    showNewModal,
    onShowModal,
    showModal

  }

}

