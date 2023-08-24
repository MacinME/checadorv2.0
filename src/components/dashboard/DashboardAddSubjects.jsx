import { useContext, useRef } from 'react';
import { HiBookmark } from 'react-icons/hi2';
import { DashboardTimeCard, DashboardErrorMessage, DashboardIconAddSubject, DashboardBar } from './';
import { UserContext } from '../../context';
import { OnErrorValidator } from '../../helpers';
import { useFetch, useSubject } from '../../hooks';
import { academic } from '../../data';

export const DashboardAddSubjects = ({ handleModal }) => {

  const { onGetUserData, user } = useContext(UserContext);
  const { onFetchData } = useFetch('http://localhost:8081/schedules/add', 'POST');
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
    handleModal();
  }

  return (
    <div className="w-full h-full backdrop-brightness-75 absolute top-0 left-0 flex justify-center z-10">
      <div className="bg-white w-4/4 h-[48rem] px-10 mt-20 rounded-xl relative dark:bg-dark-700">

      <div className="h-10">
        <DashboardBar onModalFilter={ handleModal } />
      </div>

      <h4 className="text-gray-600 text-center text-lg dark:text-gray-200"> Registrar horarios de clase </h4>
      
      <div className="w-full h-[42rem] overflow-y-scroll py-5">
        <form 
          onSubmit={ onNewSubject }
        >
          <div>
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
                <DashboardIconAddSubject 
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
            <button className="bg-primary py-2 rounded-md mt-5 px-4 text-sm text-gray-200 dark:text-gray-300">
              Guardar
            </button>
          </div>
            <div 
              ref={ errorRef }
              className="hidden"
            >
              <DashboardErrorMessage message="Rellenar al memos un horario o seleccionar el nivel academico" />
            </div>
        </form>
      </div>


      </div>
    </div>

  );
}
