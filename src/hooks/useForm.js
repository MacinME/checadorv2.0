import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ({target}) => {
        const { name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    };

    const onCheckbox = ({ target }) => {
      const { name, value} = target;
      const newValue = value.split(' ')[1].trim();
      console.log(value.split(' ')[1])
      setFormState({
          ...formState,
          [ name ]: newValue === 'false' ? true : false
      });
  };


    const onResetForm = () => {
        setFormState( initialForm );
    };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    onCheckbox
  }
}
