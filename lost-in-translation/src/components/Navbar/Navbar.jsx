import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

//html for Navigation bar
const Navbar = () => {

    const {user} = useUser()

    return (
        <nav>
            { user !==null && //only show if a user is logged in
            <ul> 
                <li>
                    <NavLink to= "translation">Translation</NavLink>
                </li>
                <li>
                    <NavLink to="profile">Profile</NavLink>
                </li>
            </ul>
            }


        </nav>
    )
}

export default Navbar