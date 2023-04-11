import { useState } from "react";
import { HiX } from "react-icons/hi";
import { HiBookmark, HiCalendarDays, HiOutlinePlus } from 'react-icons/hi2';
import { MessageClass } from "./MessageClass";
import { degree } from '../data/Degree'
export const AddClass = () => {

  const [days, setDays] = useState([
      {
          id: 1, degree: '', subject: '', data: [
              { idDay: 1, day: 'Lunes', subjects: [ { start: '', end: '', grade: ''} ] },
              { idDay: 2, day: 'Martes', subjects: [ { start: '', end: '', grade: ''} ] },
              { idDay: 3, day: 'Miercoles', subjects: [ { start: '', end: '', grade: ''} ] },
              { idDay: 4, day: 'Jueves', subjects: [ { start: '', end: '', grade: ''} ] },
              { idDay: 5, day: 'Viernes', subjects: [ { start: '', end: '', grade: ''} ] },
              { idDay: 6, day: 'Sabado', subjects: [ { start: '', end: '', grade: ''} ] }
          ]
      },
  ]);


  const [message, setMessage] = useState(true)

  const handleAddSubject = (evt,index) => {
    evt.preventDefault();
    const updatedDays = [...days];
    updatedDays[0].data[index].subjects.push({ start: "", end: "", grade: "" });
    setDays(updatedDays);
  };

  const handleInputChange = (event, dayIndex, subjectIndex, field) => {
    const updatedDays = [...days];
    if( dayIndex === 'subject') {
       updatedDays[0].subject = event.target.value;
       setDays(updatedDays);
    } else if ( dayIndex === 'degree' ){
      updatedDays[0].degree = event.target.value;
      setDays(updatedDays);
    }else {
      updatedDays[0].data[dayIndex].subjects[subjectIndex][field] = event.target.value;
      setDays(updatedDays);
    }

  };


  const handleRemoveSubject = (evt, index, subject) => {
    evt.preventDefault();
    const updateDays = [...days]
    updateDays[0].data[index].subjects.splice(subject, 1)
    setDays(updateDays)
  }



//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     const validateSchedule = days.map(({ subjects }) =>{
//       return subjects.map((subject) => {
//         return subject.start.length < 5 || subject.end.length < 5 ? false : true
//       });

//     });

//     const results = validateSchedule;
//     const [monday, thuesday, wednesday, thrusday, friday, saturday] = results;
//     const scheduleMonday = monday.every((mondayIsEmpty) => mondayIsEmpty);
//     const scheduleTuesday = thuesday.every((mondayIsEmpty) => mondayIsEmpty);
//     const scheduleWednesday = wednesday.every((mondayIsEmpty) => mondayIsEmpty);
//     const scheduleThrusday = thrusday.every((mondayIsEmpty) => mondayIsEmpty);
//     const scheduleFriday = friday.every((mondayIsEmpty) => mondayIsEmpty);
//     const scheduleSaturday = saturday.every((mondayIsEmpty) => mondayIsEmpty);

//     const msg = [ scheduleMonday, scheduleTuesday, scheduleWednesday, scheduleThrusday, scheduleFriday, scheduleSaturday].every((msg) => msg !== false );

//     setMessage(msg);

//     setTimeout(() => {
//       setMessage(true)
//     }, 3000);

// }


  return (
    <form className="col-span-3 xl:px-10 sm:px-0">
      <h4 className="flex items-center justify-center gap-3 text-gray-600 font-bold text-center text-lg mb-10 dark:text-gray-400"> Registrar Horarios de Clase </h4>
      <div className="">
        <label className="flex flex-col font-bold text-gray-600 mt-4 tracking-wider">
          <label className="flex items-center gap-2 dark:text-gray-300"> <HiBookmark /> Nivel Academico </label>
          <select 
              onChange={evt => handleInputChange(evt, 'degree')} 
              className="dark:border-gray-700 dark:bg-dark-700 dark:text-gray-200 border w-auto m-2 border-gray-200 text-gray-700 font-normal py-1 px-2 focus:border-gray-500 rounded-lg outline-none" 
            >
                {
                  degree.map( degree => (
                    <option key={ degree.id } value={ degree.level + ' - ' +  degree.degree } > { degree.level + ' - ' + degree.degree } </option>
                  ))
                }
            </select>
        </label>
        <label className="flex flex-col font-bold text-gray-600 mt-4 tracking-wider">
          <label className="flex items-center gap-2 dark:text-gray-300"> <HiBookmark /> Materia </label>
          <input 
            type="text" 
            placeholder="Materia" 
            className="dark:border-gray-700 dark:bg-dark-700 dark:text-gray-200 border w-auto m-2 border-gray-200 text-gray-700 font-normal py-1 px-2 focus:border-gray-500 rounded-lg outline-none"
            value={ days[0].subject }
            onChange={ (evt) => handleInputChange(evt, "subject") }
          />

        </label>
      </div>
      {days[0].data.map((day, dayIndex) => (
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
                      pattern="([01][0-9]|2[0-3]):[0-5][0-9]"
                      value={subject.start}
                      placeholder="Entrada"
                      onChange={(event) => handleInputChange(event, dayIndex, subjectIndex, "start")}
                      className="w-full border m-2 border-gray-200 text-gray-700 py-1 px-2 focus:border-gray-500 rounded-lg outline-none dark:bg-dark-700 dark:border-gray-700 dark:text-gray-200"
                  />
                </div>
                <div className="xl:mr-2">
                  <input
                      type="text"
                      pattern="([01][0-9]|2[0-3]):[0-5][0-9]"
                      placeholder="salida"
                      value={subject.end}
                      onChange={(event) => handleInputChange(event, dayIndex, subjectIndex, "end")}
                      className="w-full border m-2 border-gray-200 text-gray-700 py-1 px-2 focus:border-gray-500 rounded-lg outline-none dark:bg-dark-700 dark:border-gray-700 dark:text-gray-200"
                  />
                </div>
                <div className="xl:mr-2">
                  <input
                      type="text"
                      placeholder="Grado"
                      value={subject.grade}
                      onChange={(event) => handleInputChange(event, dayIndex, subjectIndex, "grade")}
                      className="w-full border m-2 border-gray-200 text-gray-700 py-1 px-2 focus:border-gray-500 rounded-lg outline-none dark:bg-dark-700 dark:border-gray-700 dark:text-gray-200"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="w-full flex justify-center">
        <button  className="btnModal-save py-2 rounded-full mt-5 px-4 text-sm dark:text-gray-300" >
                  Guardar
        </button>
      </div>
      { 
        !message && (
          <MessageClass />
        )
      }
    </form>
  );
}
