
import { useEffect, useState } from 'react';
export const Clock = () => {

    let currentTime = new Date().toLocaleTimeString();


    const [newTime, setNewtime] = useState( currentTime )


    useEffect(() => {
        const interval = setInterval( () => {
            const date = new Date();
            setNewtime( date.toLocaleTimeString() )
            console.log(newTime)
        }, 1000);
        return () => clearInterval( interval )
    }, [])
    
    return (
        <div className='flex justify-center' >
            <div className='text-2xl text-gray-900'>
                { newTime }
            </div>
        </div>
    )
}
