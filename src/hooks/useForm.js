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
      const newName = name.split('.')[1];
      if(`group3_sortBy.${ newName }` === name){
        setFormState({
          ...formState,
          group3_sortBy: {
            [ newName ]: newValue === 'false' ? true : false
          }
        });
        return;
      }
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
