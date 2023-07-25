import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth/context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const SingUp = () => {

    const [token, setToken] = useState('');
    const { onLogin } = useContext( AuthContext );
    const navigate = useNavigate();

    const handleSingInGoogle = async () => {

        const body = { id_token:  token }
        await fetch('http://localhost:8081/api/auth/singUp', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(body),
            credentials: 'include'
        })
        .then( resp => {
            return resp.json()
        })
        .then( data => {
            const user = {
                ...data,
                logged: true
            }
            onLogin( user );
            navigate('/');   
        })
        .catch( console.error );
    }


    useEffect(() => {
        token && handleSingInGoogle() 
    }, [token])

    const handleCallBackResponse = (response) => {
        setToken( response.credential );
    }

    useEffect(() => {
      
        google.accounts.id.initialize({
            client_id: "99551602094-k3t9erqjhlrepelnpiogduppcbr1lmlm.apps.googleusercontent.com",
            callback: handleCallBackResponse

        });

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { 
                theme: "filled_blue", 
                size: "large",
                shape: "circle",
                logo_alignment: "left"
            }
        )
    
    }, [])
    

  return (
    <div id="SingInGoogles">
        <div className="bg-blueColor-50 w-screen h-screen flex flex-col justify-center items-center">
            <div id="signInDiv"></div>
        </div>
    </div>
  )
}
