import { Link } from "react-router-dom"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete } from "../../utils/storage"
import {  } from "../../styles/Profile.css"



const ProfileActions = () => {
    const {setUser} = useUser()

    const handleLogOut = () => {
        if( window.confirm('Are you sure?')){
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    return (
    <ul>
        <li><button className="ClearHistoryButton">Clear History</button></li>
        <li><button className="LogoutButton" onClick={handleLogOut}>Log Out</button></li>
    </ul>
    )
}

export default ProfileActions

