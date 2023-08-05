import { useState } from 'react';

export const useFetch = ( url = '', method = '') => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
    })

    const onFetchData = async(data = {} ) => {
        const {...fields} = data;
        const body = {...fields};
        
        setState({
            ...state,
            isLoading: true,
        });

        try {
            const resp = await fetch( url , {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: method === 'POST' || method === 'PUT' || method === 'DELETE' ? JSON.stringify( body ) : false,
                credentials: 'include'
            });

            if(!resp.ok) return;
            const data = await resp.json();

            setState({
                data,
                isLoading: false,
            })

            return data;
            
        } catch (error) {
            console.log(error);
        }
    }
    

  return {
    data: state.data,
    isLoading: state.isLoading,
    onFetchData
  }
}