export const DashboardTimeInput = ({ handleInputChange, subjectIndex, subject, dayIndex, name, ...input }) => {
  return (
    <input 
        {...input}
        name={ name }
        onChange={ (event) => handleInputChange(event, dayIndex, subjectIndex, name) }
        className="w-full dark:focus:border-gray-500 border m-2 border-gray-200 text-gray-700 py-1 px-2 focus:border-gray-500 rounded-lg outline-none dark:bg-dark-700 dark:border-gray-700 dark:text-gray-200"
    />
  )
}
