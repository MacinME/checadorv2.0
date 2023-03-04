// Import React librarys and components
import { HiCheckCircle, HiQuestionMarkCircle, HiOutlinePencil, HiEye} from 'react-icons/hi';

import img1 from '../assets/p1.png';
import img2 from '../assets/p2.png';
import img3 from '../assets/p3.png';
import img4 from '../assets/p4.png';
import img5 from '../assets/p5.png';

export const TableUsers = ({ onShowModal, disUserModal }) => {    

  return (
    <>
      <div className="table-section">
        <table className="table w-full">
            <thead>
                <tr>
                    <td>
                        <input type="checkbox" name='1292'/>
                        
                    </td>
                    <th>Name </th>
                    <th>Status</th>
                    <th>ID docente</th>
                    <th>Correo</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>
                        <input type="checkbox" name='1292'/>
                    </td>
                    <th>
                        <div className='flex flex-wrap gap-4 py-2'>
                            <div className='userPhoto w-14 rounded rounded-full relative'>
                                <img 
                                    src={ img1 } 
                                    alt="user profile" 
                                    className='w-14 rounded rounded-full' 
                                />
                            </div>
                            <p className='flex flex-col'>
                                Ahamd Ekstrom Bothman
                                <span className='user-rol text-gray-500 font-normal italic'> Docente </span>
                            </p>
                        </div>
                    </th>
                    <td>
                        <div className='user-status flex items-center gap-1'>
                            <HiCheckCircle />
                            Active
                        </div>
                    </td>
                    <td>Docente</td>
                    <td>email@gmail.com</td>
                    <td> 
                        <button className='w-6 h-6 border-none flex justify-center items-center hover:text-gray-700 text-lg' onClick={ () => onShowModal(disUserModal) }>
                            <HiOutlinePencil />
                        </button> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name='1292'/>
                    </td>
                    <th className='flex flex-wrap gap-4 py-2'>
                        <div className='userPhoto w-14 rounded rounded-full'>
                            <img 
                                src={ img2 } 
                                alt="user profile" 
                                className='w-14 rounded rounded-full' 
                            />
                        </div>
                        <p className='flex flex-col'>
                            Steve Vaccaro
                            <span className='user-rol text-gray-500 font-normal italic'> Administrativo </span>
                        </p>
                    </th>
                    <td>
                        <div className='user-status-wrong flex items-center gap-1'>
                            <HiQuestionMarkCircle />
                            Pending
                        </div>
                    </td>
                    <td>Administrativo</td>
                    <td>email@gmail.com</td>
                    <td> 
                        <button className='w-6 h-6 border-none flex justify-center items-center hover:text-gray-700 text-lg'>
                            <HiOutlinePencil />
                        </button> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name='1292'/>
                    </td>
                    <th className='flex flex-wrap gap-4 py-2'>
                        <div className='userPhoto w-14 rounded rounded-full'>
                            <img 
                                src={ img3 } 
                                alt="user profile" 
                                className='w-14 rounded rounded-full' 
                            />
                        </div>
                        <p className='flex flex-col'>
                            Tiana Kenter
                            <span className='user-rol text-gray-500 font-normal italic'> Administrativo </span>
                        </p>
                        </th>
                    <td>
                        <div className='user-status flex items-center gap-1'>
                            <HiCheckCircle />
                            Active
                        </div>
                    </td>
                    <td>Administrativo</td>
                    <td>email@gmail.com</td>
                    <td> 
                        <button className='w-6 h-6 border-none flex justify-center items-center hover:text-gray-700 text-lg'>
                            <HiOutlinePencil />
                        </button> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name='1292'/>
                    </td>
                    <th className='flex flex-wrap gap-4 py-2'>
                        <div className='userPhoto w-14 rounded rounded-full'>
                            <img 
                                src={ img4 } 
                                alt="user profile" 
                                className='w-14 rounded rounded-full' 
                            />
                        </div>
                        <p className='flex flex-col'>
                            Anika Levin
                            <span className='user-rol text-gray-500 font-normal italic'> Administrativo </span>
                        </p>
                        </th>
                    <td>
                        <div className='user-status flex items-center gap-1'>
                            <HiCheckCircle />
                            Active
                        </div>
                    </td>
                    <td>Administrativo</td>
                    <td>email@gmail.com</td>
                    <td> 
                        <button className='w-6 h-6 border-none flex justify-center items-center hover:text-gray-700 text-lg'>
                            <HiOutlinePencil />
                        </button> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name='1292'/>
                    </td>
                    <th className='flex flex-wrap gap-4 py-2'>
                        <div className='userPhoto w-14 rounded rounded-full'>
                            <img 
                                src={ img5 } 
                                alt="user profile" 
                                className='w-14 rounded rounded-full' 
                            />
                        </div>
                        <p className='flex flex-col'>
                            Giana Torff
                            <span className='user-rol text-gray-500 font-normal italic'> Administrativo </span>
                        </p>
                        </th>
                    <td>
                        <div className='user-status flex items-center gap-1'>
                            <HiCheckCircle />
                            Active
                        </div>
                    </td>
                    <td>Administrativo</td>
                    <td>email@gmail.com</td>
                    <td> 
                        <button className='w-6 h-6 border-none flex justify-center items-center hover:text-gray-700 text-lg'>
                            <HiOutlinePencil />
                        </button> 
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  
  )
}
