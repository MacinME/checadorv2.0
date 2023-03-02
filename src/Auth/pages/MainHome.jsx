import { useState } from "react";
import { Navbar } from "../components/Navbar"
import { Formats } from "./Formats";
import { RegisterAdmon } from "./RegisterAdmon";
import { RegisterDoc } from "./RegisterDoc";
import { UsersPage } from "./UsersPage";

export const MainHome = ({ page }) => {

    // useState to toggle a dropdown in Navbar
    const [toggle, setToggle] = useState([
        {id_listItem: 1, status: false},
        {id_listItem: 2, status: false},
    ])

    const item1 = toggle[0];
    const item2 = toggle[1];

    const handleToggle = ({id_listItem, status}) => {
        const values = [...toggle]
        values[id_listItem - 1] = {id_listItem: id_listItem, status: !status}
        setToggle(values)
    }
  return (
    <>
        <div className="main-section">

            {/* Navbar Component */}
            <Navbar handleToggle={ handleToggle } item1={ item1 } item2={ item2 } />

            <div className="container-section">
                {/* Registers Docentes */}
                { page === 1 && <UsersPage /> } 
                
                {/* Registers Docentes */}
                { page === 2 && <RegisterDoc /> }

                {/* Registers Docentes */}
                { page === 3 && <RegisterAdmon /> }

                {/* Registers Docentes */}
                { page === 4 && <Formats /> }
            </div>

        </div>
    </>
  )
}
