import { useState } from 'react';

export const useCheckbox = ( initialValue) => {

    const [selectOption, setSelectOption] = useState(initialValue);

    const handleSelectOptions = (evt) => {
        const { name, value, checked } = evt.target;
        const firstValue = value.split(' ')[0];
        setSelectOption( options => ({
            ...options,
            [firstValue]: checked
        }))
    }

    function handleChange(event) {
        const { name, value, checked } = event.target;
        const firstValue = value.split(' ')[0];
        if (checked) {
          setSelectOption(prevState => ({
            ...Object.fromEntries(Object.entries(prevState).map(([key]) => [key, false])),
            [firstValue]: true,
          }));
        } else {
          setSelectOption(prevState => ({
            ...prevState,
            [firstValue]: false,
          }));
        }
      }

  return [ selectOption, handleSelectOptions, handleChange ]
}
