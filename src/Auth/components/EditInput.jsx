
export const EditInput = ( props ) => {

    const { label, errorMessage, onInputChange, id, ...inputProps } = props;

  return (
    <div className="flex flex-wrap gap-1 mt-2 justify-between items-center">
        <label
        className="font-semibold text-sm">{ label + ":"}</label>
        <input 
          onChange={ onInputChange } 
          { ...inputProps} 
          className="text-gray-700 py-1 px-3 rounded focus:border-b-2 focus:border-blueColor-400 outline-none w-full" 
        />
        <span className="pt-1 text-red-400 text-sm tracking-wide hidden">{ errorMessage }</span>
    </div>
  )
}
