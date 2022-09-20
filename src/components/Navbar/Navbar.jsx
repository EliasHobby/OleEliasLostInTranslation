import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import { navigation } from "../../styles/navbar.css"

const Navbar = () => {

    const { user } = useUser()

    return (
        <div className="Navigation">
            <nav className="Navigation-container">
                <h1 class="PageTitle">Lost In Translation</h1>
                {user !== null &&
                    <ul>
                        <li>
                            <NavLink to="translation">Translation</NavLink>
                        </li>
                        <li>
                            <NavLink to="profile">Profile</NavLink>
                        </li>
                    </ul>
                }
            </nav>
        </div>
    )
}

export default Navbar