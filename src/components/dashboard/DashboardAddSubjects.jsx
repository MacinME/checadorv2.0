import { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { HiBookmark, HiCalendarDays, HiOutlinePlus } from 'react-icons/hi2';
import { academic } from '../../data';

export const DashboardAddSubjects = ({ userInfo }) => {

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
    const updateDays = [...days]
    updateDays[0].data[index].subjects.splice(subject, 1)
    setDays(updateDays)
  }

  const onNewSubject = async(evt) => {
    const data = {...days, id: Date.now() };
    evt.preventDefault();
    try {
      await fetch('http://localhost:8081/users/api/addSubject', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ subjects: data, id: userInfo.uid }),
      })
      .then( resp => resp.json())
      .then( data => {
        console.log( data );
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form 
      onSubmit={ onNewSubject }
      className="col-span-4 xl:px-10 sm:px-0"
    >
      <h4 className="flex items-center justify-center gap-3 text-gray-600 font-bold text-center text-lg mb-10 dark:text-gray-400"> Registrar Horarios de Clase </h4>
      <div className="">
        {/* <input type="text" name="uid" value={ days[0].id } className="text-gray-900"  readOnly={ true } onChange={ (evt) => handleInputChange( evt, "uid" ) } /> */}
        <label className="flex flex-col font-bold text-gray-600 mt-4 tracking-wider">
          <label className="flex items-center gap-2 dark:text-gray-300"> <HiBookmark /> Nivel Academico </label>
          <select 
              onChange={evt => handleInputChange(evt, 'degree')} 
              name="degree"
              className="dark:border-gray-700 dark:bg-dark-700 dark:text-gray-200 border w-auto m-2 border-gray-200 text-gray-700 font-normal py-1 px-2 focus:border-gray-500 rounded-lg outline-none" 
            >
                <option value="" disabled={ true }>Seleccionar</option>
                {
                  academic.map( degree => (
                    <option key={ degree.id } value={ degree.level + ' - ' +  degree.degree } > { degree.level + ' - ' + degree.degree } </option>
                  ))
                }
            </select>
        </label>
        {/* <label className="flex flex-col font-bold text-gray-600 mt-4 tracking-wider">
          <label className="flex items-center gap-2 dark:text-gray-300"> <HiBookmark /> Materia </label>
          <input 
            type="text" 
            placeholder="Materia"
            name="subject"
            className="dark:border-gray-700 dark:bg-dark-700 dark:text-gray-200 border w-auto m-2 border-gray-200 text-gray-700 font-normal py-1 px-2 focus:border-gray-500 rounded-lg outline-none"
            value={ days[0].subject }
            onChange={ (evt) => handleInputChange(evt, "subject") }
          />

        </label> */}
      </div>
      {days.data.map((day, dayIndex) => (
        <div key={dayIndex}>
          <h2 className="flex items-center gap-2 font-bold text-gray-600 mt-4 tracking-wider dark:text-gray-300 "> <HiCalendarDays /> {day.day} <button 
              onClick={(evt) => handleAddSubject(evt,dayIndex) }
              className="bg-yellowColor-800 p-1 mt-2 rounded-lg text-gray-900 hover:bg-yellowColor-700"
            > <HiOutlinePlus /> </button>
          </h2>
          <div className="grid rounded-lg pt-2 md:grid-cols-2 xl:grid-cols-4">
            {day.subjects.map((subject, subjectIndex) => (
              <div className="dark:border-gray-700 border m-2 rounded-lg flex flex-wrap flex-col justify-center items-center " key={subjectIndex}>
                <label className="h-10 flex items-center justify-between bg-blueDarkColor-600 py-1 px-2 text-white w-auto rounded-tl-lg rounded-tr-lg w-full"> Horario { subjectIndex + 1 }: 
                {
                  subjectIndex !== 0 &&
                  <div
                    onClick={ (evt) => handleRemoveSubject(evt, dayIndex, subjectIndex) }
                    className="bg-red-500 text-sm p-1 rounded-lg cursor-pointer text-white hover:bg-red-800 hover:text-white m-2"
                  >
                    <HiX />
                  </div>
                }
                </label>
                <div className="xl:mr-2">
                  <input 
                    type="text" 
                    value={ subject.subject }
                    placeholder="Materia"
                    name="subject"
                    onChange={(event) => handleInputChange(event, dayIndex, subjectIndex, "subject")}
                    className="w-full dark:focus:border-gray-500 border m-2 border-gray-200 text-gray-700 py-1 px-2 focus:border-gray-500 rounded-lg outline-none dark:bg-dark-700 dark:border-gray-700 dark:text-gray-200"
                  />
                  <input
                      type="text"
                      pattern="([01][0-9]|2[0-3]):[0-5][0-9]"
                      value={subject.start}
                      placeholder="Entrada"
                      name="from"
                      onChange={(event) => handleInputChange(event, dayIndex, subjectIndex, "start")}
                      className="w-full dark:focus:border-gray-500 border m-2 border-gray-200 text-gray-700 py-1 px-2 focus:border-gray-500 rounded-lg outline-none dark:bg-dark-700 dark:border-gray-700 dark:text-gray-200"
                  />
                </div>
                <div className="xl:mr-2">
                  <input
                      type="text"
                      pattern="([01][0-9]|2[0-3]):[0-5][0-9]"
                      placeholder="salida"
                      name="to"
                      value={subject.end}
                      onChange={(event) => handleInputChange(event, dayIndex, subjectIndex, "end")}
                      className="w-full dark:focus:border-gray-500 border m-2 border-gray-200 text-gray-700 py-1 px-2 focus:border-gray-500 rounded-lg outline-none dark:bg-dark-700 dark:border-gray-700 dark:text-gray-200"
                  />
                </div>
                <div className="xl:mr-2">
                  <input
                      type="text"
                      placeholder="Grado"
                      name="grade"
                      value={subject.grade}
                      onChange={(event) => handleInputChange(event, dayIndex, subjectIndex, "grade")}
                      className="w-full dark:focus:border-gray-500 border m-2 border-gray-200 text-gray-700 py-1 px-2 focus:border-gray-500 rounded-lg outline-none dark:bg-dark-700 dark:border-gray-700 dark:text-gray-200"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="w-full flex justify-center">
        <button className="btnModal-save py-2 rounded-full mt-5 px-4 text-sm dark:text-gray-300" >
                  Guardar
        </button>
      </div>
    </form>
  );
}
