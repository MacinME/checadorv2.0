import { useContext, useRef, useState } from 'react';
import { HiBookmark, HiCalendarDays, HiOutlinePlus } from 'react-icons/hi2';
import { academic } from '../../data';
import { UserContext } from '../../context';
import { ErrorMessage } from './ErrorMessage';
import { OnErrorValidator } from '../../helpers';
import { DashboardTimeCard } from './DashboardTimeCard';
import { useFetch } from '../../hooks';

export const DashboardAddSubjects = ({ handleModal, stateClass }) => {

  const { onGetUserData, user } = useContext(UserContext);
  const errorRef = useRef(null);
  const { onFetchData } = useFetch('http://localhost:8081/users/api/addSubject', 'POST');

  const [days, setDays] = useState({
      id: null, degree: '', data: [
          { idDay: 1, day: 'Lunes', subjects: [ { subject:'', start: '', end: '', grade: ''} ] },
          { idDay: 2, day: 'Martes', subjects: [ { subject:'', start: '', end: '', grade: ''} ] },
          { idDay: 3, day: 'Miercoles', subjects: [ { subject:'', start: '', end: '', grade: ''} ] },
          { idDay: 4, day: 'Jueves', subjects: [ { subject:'', start: '', end: '', grade: ''} ] },
          { idDay: 5, day: 'Viernes', subjects: [ { subject:'', start: '', end: '', grade: ''} ] },
          { idDay: 6, day: 'Sabado', subjects: [ { subject:'', start: '', end: '', grade: ''} ] }
      ]
  });

  const handleAddSubject = (evt,index) => {
    evt.preventDefault();
    const updatedDays = {...days};
    updatedDays.data[index].subjects.push({ subject: "", start: "", end: "", grade: "" });
    setDays(updatedDays);
  };

  const handleInputChange = (event, dayIndex, subjectIndex, field) => {
    const updatedDays = {...days};
    if( dayIndex === 'subject') {
       updatedDays.subject = event.target.value;
       setDays(updatedDays);
    } else if ( dayIndex === 'degree' ){
      updatedDays.degree = event.target.value;
      setDays(updatedDays);
    }else if ( dayIndex === 'uid') {
      updatedDays.id = event.target.value;
      setDays( updatedDays );
    } else {
      updatedDays.data[dayIndex].subjects[subjectIndex][field] = event.target.value;
      setDays(updatedDays);
    }
  };

  const handleRemoveSubject = (evt, index, subject) => {
    evt.preventDefault();
    const updateDays = {...days};
    updateDays.data[index].subjects.splice(subject, 1)
    setDays(updateDays)
  }

  const onNewSubject = async(evt) => {
    evt.preventDefault();

    const getErrors = OnErrorValidator( days );

    if(!getErrors.includes(false) || days.degree.trim().length < 1){
      return errorRef.current.style.display = "block";
    };

    const subjects = {...days, id: Date.now() };
    const data = { subjects, id: user.uid };
    const getUserData = await onFetchData( data );
    await onGetUserData(getUserData.user.uid);
    handleModal(stateClass);
  }

  return (
    <form 
      onSubmit={ onNewSubject }
      className="col-span-4 xl:px-10 sm:px-0"
    >
      <h4 className="flex items-center justify-center gap-3 text-gray-600 font-bold text-center text-lg mb-10 dark:text-gray-400"> Registrar Horarios de Clase </h4>
      <div className="">
        <label className="flex flex-col font-bold text-gray-600 mt-4 tracking-wider">
          <label className="flex items-center gap-2 dark:text-gray-300"> <HiBookmark /> Nivel Academico </label>
          <select 
              onChange={evt => handleInputChange(evt, 'degree')} 
              name="degree"
              className="dark:border-gray-700 dark:bg-dark-700 dark:text-gray-200 border w-auto m-2 border-gray-200 text-gray-700 font-normal py-1 px-2 focus:border-gray-500 rounded-lg outline-none" 
            >
                <option value="" >Seleccionar</option>
                {
                  academic.map( degree => (
                    <option key={ degree.id } value={ degree.level + ' - ' +  degree.degree } > { degree.level + ' - ' + degree.degree } </option>
                  ))
                }
            </select>
        </label>
      </div>
      { 
        days.data.map((day, dayIndex) => (
          <div key={ dayIndex }>
            <h2 className="flex items-center gap-2 font-bold text-gray-600 mt-4 tracking-wider dark:text-gray-300 "> <HiCalendarDays /> { day.day } 
              <button 
                  onClick={ (evt) => handleAddSubject(evt,dayIndex) }
                  className="bg-yellowColor-800 p-1 mt-2 rounded-lg text-gray-900 hover:bg-yellowColor-700"
              > <HiOutlinePlus /> </button>
            </h2>
            <div className="grid rounded-lg pt-2 md:grid-cols-2 xl:grid-cols-4">
              { 
                day.subjects.map((subject, subjectIndex) => (
                  <DashboardTimeCard 
                    key={ subjectIndex }
                    dayIndex={ dayIndex }
                    subject={ subject }
                    subjectIndex={ subjectIndex }
                    handleInputChange={ handleInputChange }
                    handleRemoveSubject={ handleRemoveSubject }
                  />
                )) 
              }
            </div>
          </div>
        ))
      }
      <div className="w-full flex justify-center">
        <button className="btnModal-save py-2 rounded-full mt-5 px-4 text-sm dark:text-gray-300" >
          Guardar
        </button>
      </div>
        <div 
          ref={ errorRef }
          className="hidden"
        >
          <ErrorMessage message="Error: Rellenar al memos un horario o seleccionar el nivel academico" />
        </div>
    </form>
  );
}
