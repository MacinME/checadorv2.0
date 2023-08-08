import { useContext, useRef } from 'react';
import { HiBookmark, HiCalendarDays, HiOutlinePlus } from 'react-icons/hi2';
import { academic } from '../../data';
import { UserContext } from '../../context';
import { ErrorMessage } from './ErrorMessage';
import { OnErrorValidator } from '../../helpers';
import { DashboardTimeCard } from './DashboardTimeCard';
import { useFetch, useSubject } from '../../hooks';
import { IconAddSubject } from './IconAddSubject';

export const DashboardAddSubjects = ({ handleModal, stateClass }) => {

  const { onGetUserData, user } = useContext(UserContext);
  const { onFetchData } = useFetch('http://localhost:8081/users/api/addSubject', 'POST');
  const { handleInputChange, handleAddSubject, handleRemoveSubject, formState } = useSubject({
    id: null, degree: '', data: [
        { idDay: 1, day: 'Lunes', subjects: [ { id_Time: 1, subject:'', start: '', end: '', grade: ''} ] },
        { idDay: 2, day: 'Martes', subjects: [ { id_Time: 2, subject:'', start: '', end: '', grade: ''} ] },
        { idDay: 3, day: 'Miercoles', subjects: [ { id_Time: 3, subject:'', start: '', end: '', grade: ''} ] },
        { idDay: 4, day: 'Jueves', subjects: [ { id_Time: 4, subject:'', start: '', end: '', grade: ''} ] },
        { idDay: 5, day: 'Viernes', subjects: [ { id_Time: 5, subject:'', start: '', end: '', grade: ''} ] },
        { idDay: 6, day: 'Sabado', subjects: [ { id_Time: 6, subject:'', start: '', end: '', grade: ''} ] }
    ]
  });
  const errorRef = useRef(null);

  const onNewSubject = async(evt) => {
    evt.preventDefault();

    const getErrors = OnErrorValidator( formState );

    if(!getErrors.includes(false) || formState.degree.trim().length < 1){
      return errorRef.current.style.display = "block";
    };

    const subjects = {...formState, id: Date.now() };
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
        formState.data.map((day, dayIndex) => (
          <div key={ dayIndex }>
            <IconAddSubject 
              handleAddSubject= { handleAddSubject } 
              dayIndex={ dayIndex } 
              day={ day.day }
            />
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
