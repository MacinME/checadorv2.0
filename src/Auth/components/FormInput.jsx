
export const FormInput = ( props ) => {

    const { label, errorMessage, name, id, ...inputProps } = props;

  return (
    <div className="relative form-input flex flex-col gap-4 my-8">
        <input 
          { ...inputProps} 
          name={ name } 
          className="w-96 invalid-input peer border h-14 px-2 focus:outline-none rounded-lg placeholder-transparent text-gray-700 bg-white tracking-wider" 
        />
        <label htmlFor={ name } 
        className="
        px-2
        mx-2
        absolute 
        left-0
        -top-3.5
        text-gray-600
        text-sm
        transition-all
        peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-500
        peer-placeholder-shown:top-2
        peer-focus:-top-3.5
        peer-focus:text-gray-900
        peer-focus:text-base
        bg-white
        tracking-wider
        rounded
        ">{ label }</label>
        <span className="pt-1 text-red-400 text-sm tracking-wide hidden">{ errorMessage }</span>
    </div>
  )
}
