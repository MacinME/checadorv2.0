import { useContext, useState } from 'react';
import { HiBookOpen, HiX } from 'react-icons/hi';
import { CommonLogoutBtn } from '../common';
import { AuthContext } from '../../context';

export const CheckerMenu = ({ menuState, handleModal, onDisplayAlert, dataLoaded, onUpdateData }) => {

    const [selectedFile, setselectedFile] = useState({ 
        preview: '', 
        data: '' 
    });

    const onInputChange = (evt) => {
        const img = {
            preview: URL.createObjectURL(evt.target.files[0]),
            data: evt.target.files[0],
        };

        setselectedFile( img );
    }

    const onUpdateAvatar = async(evt) => {
        evt.preventDefault();

        const formatData = new FormData();
        formatData.append('avatar', selectedFile.data);
        formatData.append('id', dataLoaded.uid)

        try {
            const resp = await fetch('http://localhost:8081/users/uploadAvatar', {
                method: 'POST',
                body: formatData
            })

            if (resp.ok) {
                const data = await resp.json();
                handleModal( menuState );
                onDisplayAlert({
                    display: true,
                    message: 'Perfil actualizado!',
                    type: 'success'
                })

                onUpdateData(data.user)

                setTimeout(() => {
                    onDisplayAlert({
                        display: false,
                        message: '',
                        type: ''
                    })
                },3000)
              } else {
                console.error('Upload failed:', resp.statusText);
              }
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className="absolute w-full h-full top-0 right-0 rounded-lg z-20 bg-blueColor-50 dark:bg-dark-900">
        <div className="relative w-full h-full bg-blueColor-50 grid justify-items-center items-center dark:bg-dark-800">
            <div className="p-4 bg-blueColor-50 w-72 text-center rounded-lg dark:bg-dark-800 flex flex-col ">
                <div>
                    <div className="flex justify-center mb-2">
                        { selectedFile.preview && <img src={ selectedFile.preview } alt="image" className="w-24 rounded-full" /> }
                    </div>
                    <form 
                        onSubmit={ onUpdateAvatar }
                        encType="multipart/form-data"
                    >
                        <input 
                            type="file" 
                            name="avatar" 
                            accept="image/*" 
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-xl cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 px-2 py-1"
                            onChange={ onInputChange }
                        />
                        <button type="submit" className="text-gray-700 dark:text-gray-300 bg-blueColor-100 rounded py-1 px-2 dark:bg-dark-700 mt-2">
                            Cambiar foto
                        </button>
                    </form>
                </div>
                <div>
                    <li className="text-gray-700 md:text-lg dark:text-gray-300"> <p className="mb-2">Clases totales por quincena: </p>
                        <div className="border bg-bgc_white-50 p-4 dark:bg-dark-700 dark:border-gray-700">
                            <p className="text-gray-800 text-2xl flex justify-center items-center gap-2 dark:text-gray-400 "> <HiBookOpen /> 9 / 13 </p>
                        </div>
                    </li>
                    <li>
                        <CommonLogoutBtn />
                    </li>
                </div>
            </div>
            <div 
                onClick={ () => handleModal(menuState) }
                className="absolute top-0 right-0 p-1 bg-gray-800 text-white m-2 rounded-lg hover:bg-gray-900 cursor-pointer md:w-10 md:h-10 flex items-center justify-center"
            >
                <HiX />
            </div>
        </div>
    </div>
  )
}
