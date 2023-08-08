import { useState } from 'react';
import { FilterContext } from './';

export const FilterProvider = ({ children }) => {

    const [dataFiltered, setdataFiltered] = useState([]);

    const onDataFiltered = ( data ) => {
        setdataFiltered( data );   
    }

  return (
    <FilterContext.Provider
        value={{ dataFiltered, onDataFiltered }}
    >
        { children }
    </FilterContext.Provider>
  )
}
