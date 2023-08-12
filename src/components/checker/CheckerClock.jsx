import { useEffect } from 'react';
import { onGet24TimeFormat } from '../../helpers';

export const CheckerClock = ({ setNewtime, newTime }) => {

    useEffect(() => {
        const interval = setInterval( () => {
            const time = onGet24TimeFormat()
            setNewtime( time );
        }, 1000);
        return () => clearInterval( interval );
    }, [])
    
    return (
        <div className="flex justify-center" >
            <div className="text-2xl text-gray-800 dark:text-slate-300">
                { newTime }
            </div>
        </div>
    )
}
