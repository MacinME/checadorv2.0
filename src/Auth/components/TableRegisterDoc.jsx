import { HiChevronLeft, HiChevronRight, HiOutlineArrowSmDown } from 'react-icons/hi';
import { registers } from './registers';

const dataTH = [
    {id: 1, name: 'Nombre'}, 
    {id: 2, name: 'Nivel Academico'}, 
    {id: 3, name: 'Materia'}, 
    {id: 4, name: 'Tema'}, 
    {id: 5, name: 'Semestrre'}, 
    {id: 6, name: 'Fecha'}, 
    {id: 7, name: 'Entrada'}, 
    {id: 8, name: 'Salida'}
]

export const TableRegisterDoc = () => {
  return (
    <>
    <div className=''>
    <div className="table-section relative rounded-lg">
        <table className="table w-full">
            <thead className='bg-gray-700 sticky top-0 w-full z-10'>
                <tr>
                    {
                        dataTH.map(({id, name}) => (
                            <th key={id}>
                                <div className="flex items-center gap-1 p-3 text-white">
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
                    registers.map( register => (
                        <tr key={ register.id }>
                        <th>
                            <div className='flex items-center flex-wrap gap-2 py-1'>
                                <div className={`userPhoto w-10 rounded rounded-full relative ${register.output.length <= 0 ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1': null} `}>
                                    <img 
                                        src={ register.img } 
                                        alt='Perfil de usuario'
                                        className='w-12 rounded rounded-full' 
                                    />
                                </div>
                                <p className='flex flex-col text-gray-900 font-normal'>
                                    { register.name }
                                </p>
                            </div>
                        </th>
                        <td> <div className='text-gray-700 font-normal'> { register.licenciatura } </div> </td>
                        <th> <div className='text-gray-700 font-normal'> { register.materia } </div> </th>
                        <th> <div className='text-gray-700 font-normal'> { register.topic } </div> </th>
                        <th> <div className='text-gray-700 font-normal'> { register.grade } </div> </th>
                        <th> <div className='text-gray-700 font-normal'> { register.date } </div> </th>
                        <th> <div className='text-gray-700 font-normal'> { register.input } </div> </th>
                        <th> <div className='text-gray-700 font-normal'> { register.output.length <= 0 ? <span className='text-teal-400 font-semibold bg-white py-1 px-2 rounded-full'> en clase </span> : register.output } </div> </th>
                    </tr>  
                    ))
                }              
            </tbody>
        </table>
    </div>
    <div className='w-full flex items-center justify-between py-4 px-5 bg-bgc_white-50'>
        <button className='border border-gray-300 bg-bgc_white-50 text-gray-900 flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-700 hover:text-white'> <HiChevronLeft /> Anterior</button>
        <div className='grid grid-cols-6 bg-bgc_white-50 py-2 px-4 gap-4 rounded'>
            {
                [{id: 1, status: true},{id: 2, status: false},{id: 3, status: false},{id: 4, status: false},{id: 5, status: false}].map(pag => (
                    <div 
                        key={ pag.id }
                        className={ `${ pag.status ? 'border bg-primary text-white' : 'border border-gray-300 bg-white text-gray-900'} w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer`}
                    > { pag.id } </div>
                ))
            }
        </div>
        <button className='border border-gray-300 bg-white text-gray-900 flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white'>Siguiente <HiChevronRight /> </button>
    </div>
    </div>

    </>
  )
}
