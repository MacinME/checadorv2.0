import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';

export const SingUp = () => {

    const [googleUser, setGoogleUser] = useState(false);


    const handleSingInGoogle = async () => {

        const body = { id_token:  googleUser }
        const response = await fetch('http://localhost:8081/api/auth/singUp', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(body)
        })
        .then( resp => resp.json())
        .then( data => console.log(data))
        .catch( console.error );

        // const data = await response.json();
        // console.log(data);

    }

    useEffect(() => {
        googleUser && handleSingInGoogle()
    }, [googleUser])
    



    const handleCallBackResponse = (response) => {
        // console.log('Encoded JWT ID token' + response.credential);
        // const credential = jwt_decode( response.credential );
        setGoogleUser( response.credential );
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
