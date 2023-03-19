import { useState } from "react"

export const useCheckbox = ( initialValue) => {

    const [selectOption, setSelectOption] = useState(initialValue);

    const handleSelectOptions = (evt) => {
        console.log(evt.target.value)
        const { name, value, checked } = evt.target;
        setSelectOption( options => ({
            ...options,
            [value]: checked
        }))
    }

    function handleChange(event) {
        const { name, value, checked } = event.target;
        if (checked) {
          setSelectOption(prevState => ({
            ...Object.fromEntries(Object.entries(prevState).map(([key]) => [key, false])),
            [value]: true,
          }));
        } else {
          setSelectOption(prevState => ({
            ...prevState,
            [value]: false,
          }));
        }
      }

  return [ selectOption, handleSelectOptions, handleChange ]
}
