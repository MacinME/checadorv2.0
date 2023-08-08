import { useState } from 'react';

export const useSubject = ( initialForm = {}) => {

    const [formState, setFormState] = useState( initialForm );

    const handleInputChange = (event, dayIndex, subjectIndex, field) => {
        const updatedDays = {...formState};
        if( dayIndex === 'subject') {
           updatedDays.subject = event.target.value;
           setFormState(updatedDays);
        } else if ( dayIndex === 'degree' ){
          updatedDays.degree = event.target.value;
          setFormState(updatedDays);
        }else if ( dayIndex === 'uid') {
          updatedDays.id = event.target.value;
          setFormState( updatedDays );
        } else {
          updatedDays.data[dayIndex].subjects[subjectIndex][field] = event.target.value;
          setFormState(updatedDays);
        }
    };

    const handleAddSubject = (evt,index) => {
        evt.preventDefault();
        const updatedDays = {...formState};
        updatedDays.data[index].subjects.push({ id_Time: Date.now(), subject: "", start: "", end: "", grade: "" });
        setFormState(updatedDays);
    };

    const handleRemoveSubject = (evt, index, subject) => {
        evt.preventDefault();
        const updateDays = {...formState};
        updateDays.data[index].subjects.splice(subject, 1)
        setFormState(updateDays)
    }

  return {
    handleInputChange,
    handleAddSubject,
    handleRemoveSubject,
    formState
  }
}
