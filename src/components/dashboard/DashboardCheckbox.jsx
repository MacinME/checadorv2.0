export const DashboardCheckbox = ({ i, index, handleGroupSelect, groups, onCheckbox }) => {

  const onChange = (evt) => {
    handleGroupSelect(evt);
    onCheckbox(evt);
  }

  return (
    <div className="py-2 flex justify-between items-center">
        <label className="text-gray-600 dark:text-gray-300 text-md font-bold">
            { i.title }
        </label>
        <div className="relative w-auto h-auto">
          <input 
              className="appearance-none w-4 h-4 border-2 border-primary rounded-md bg-white mt-1 checked:bg-primary checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400 dark:bg-gray-700 dark:checked:bg-primary"
              type="checkbox" 
              id={ i.group }
              name={ i.name }
              value={  `option${ index + 1 } ${ groups[i.group][`option${ index + 1 }`] }` }
              checked={ groups[i.group][`option${ index + 1 }`] }
              onChange={ onChange }
          />
        </div>
    </div>
  )
}
