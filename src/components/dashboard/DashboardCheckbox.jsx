export const DashboardCheckbox = ({ i, index, handleGroupSelect, groups }) => {
  return (
    <div className="py-2 flex justify-between">
        <label className="text-gray-600 dark:text-gray-300 text-md font-bold">
            { i.title }
        </label>

        <input 
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox" 
            name={ i.name }
            value={ `option${ index + 1 }` }
            checked={ groups[i.name][`option${ index + 1 }`] }
            onChange={ handleGroupSelect }
        />
    </div>
  )
}
