import { HiChevronLeft, HiChevronRight, HiOutlineArrowSmDown } from 'react-icons/hi';
import { dataTH, registers } from '../../data';

export const DashboardRegistersTable = () => {
  return (
    <div className=''>
    {/* Registers Table */}
    <div className='bg-bgc_white-100 dark:bg-dark-800 dark:border-gray-700 border rounded-lg px-4'>
        <div className='w-full py-2 px-4 mb-2'>
            <p className='text-gray-800 dark:text-gray-300'>Datos Filtrados: <span className='bg-primary text-white p-1 px-3 rounded-full text-sm'>430</span></p>
        </div>
        <div className="table-section relative">
            <table className="table w-full">
                <thead className='bg-gray-800 dark:border-gray-700 border-b border-gray-300 sticky top-0 w-full z-10'>
                    <tr>
                        {
                            dataTH.map(({id, name}) => (
                                <th key={id}>
                                    <div className="flex items-center gap-1 p-3 text-gray-200">
                                        { name }
                                        <HiOutlineArrowSmDown />
                                    </div>
                                </th>
                            ))
                        }
                    </tr>
                </thead>

                <tbody>

                    {
                        registers.map( (register, index) => (
                            <tr key={ register.id } className={ index % 2 === 0? 'bg-bgc_white-50 dark:bg-dark-700 dark:hover:bg-gray-900 cursor-pointer' : 'bg-bgc_white-100 dark:bg-dark-800 dark:hover:bg-gray-900 cursor-pointer'}>
                            <th>
                                <div className='flex items-center flex-wrap gap-2 py-1'>
                                    <div className={`userPhoto w-10 rounded rounded-full relative ${register.output.length <= 0 ? 'bg-yellowColor-600 p-1': null} `}>
                                        <img 
                                            src={ register.img } 
                                            alt='Perfil de usuario'
                                            className='w-12 rounded rounded-full' 
                                        />
                                    </div>
                                    <p className='flex flex-col text-gray-800 dark:text-gray-300 font-normal'>
                                        { register.name }
                                    </p>
                                </div>
                            </th>
                            <td> <div className='text-gray-700 dark:text-gray-400 font-normal'> { register.licenciatura } </div> </td>
                            <th> <div className='text-gray-700 dark:text-gray-400 font-normal'> { register.materia } </div> </th>
                            <th> <div className='text-gray-700 dark:text-gray-400 font-normal'> { register.topic } </div> </th>
                            <th> <div className='text-gray-700 dark:text-gray-400 font-normal'> { register.grade } </div> </th>
                            <th> <div className='text-gray-700 dark:text-gray-400 font-normal'> { register.date } </div> </th>
                            <th> <div className='text-gray-700 dark:text-gray-400 font-normal'> { register.input } </div> </th>
                            <th> <div className='text-gray-700 dark:text-gray-400 font-normal'> { register.output.length <= 0 ? <span className='text-gray-800 font-semibold py-1 px-2 rounded-full text-sm text-yellowColor-800 dark:text-yellowColor-800'> en clase... </span> : register.output } </div> </th>
                        </tr>  
                        ))
                    }              
                </tbody>
            </table>
        </div>


        <div className='w-full flex items-center justify-between py-4 px-5 bg-bgc_white-100 dark:bg-dark-800 dark:border-gray-700 border-t border-gray-300 h-24'>
            <button className='dark:border-gray-700 border border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800 text-gray-900 flex items-center gap-2 py-2 px-4 rounded-full hover:bg-gray-300'> <HiChevronLeft /> Anterior</button>
            <div className='grid grid-cols-6 py-2 px-4 gap-4 rounded'>
                {
                    [{id: 1, status: true},{id: 2, status: false},{id: 3, status: false},{id: 4, status: false},{id: 5, status: false}].map(pag => (
                        <div 
                            key={ pag.id }
                            className={ `${ pag.status ? 'bg-primary text-white' : 'dark:border-gray-700 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-gray-800 border border-gray-300 bg-white text-gray-900'} w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-300 cursor-pointer`}
                        > { pag.id } </div>
                    ))
                }
            </div>
            <button className='dark:border-gray-700 border border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800 text-gray-900 flex items-center gap-2 py-2 px-4 rounded-full hover:bg-gray-300'>Siguiente <HiChevronRight /> </button>
        </div>
    </div>

    </div>

  )
}
