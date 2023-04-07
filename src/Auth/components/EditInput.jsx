
export const EditInput = ( props ) => {

    const { label, errorMessage, onInputChange, id, ...inputProps } = props;

  return (
    <div className="flex flex-wrap gap-1 mt-2 justify-between items-center">
        <label
        className="font-semibold text-sm text-gray-800">{ label + ":"}</label>
        <input 
          onChange={ onInputChange } 
          { ...inputProps} 
          className="bg-transparent border-b text-gray-700 py-1 px-3 focus:border-b-1 focus:border-gray-400 outline-none w-full" 
        />
        <span className="pt-1 text-red-400 text-sm tracking-wide hidden">{ errorMessage }</span>
    </div>
  )
}
