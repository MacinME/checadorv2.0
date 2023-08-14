export const DashboardTimeInput = ({ handleInputChange, subjectIndex, subject, dayIndex, name, data, ...input }) => {
  return (
    <input 
        {...input}
        name={ name }
        onChange={ (event) => handleInputChange(event, dayIndex, subjectIndex, name) }
        value={ data }
        autoComplete="off"
        className="w-full bg-blueColor-50 dark:bg-dark-800 dark:focus:border-gray-500 text-gray-700 py-1 px-2 focus:border-gray-500  outline-none dark:text-gray-200 border-b dark:border-gray-800"
    />
  )
}
