import { Link } from "react-router-dom"
import { clearTranslationHistory } from "../../api/translation"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"

import {  } from "../../styles/Profile.css"



const ProfileActions = () => {
    const {user, setUser} = useUser()

    const handleLogOut = () => {
        if( window.confirm('Are you sure?')){
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const handleClearHistory = async () => {
        if( !window.confirm('Are you sure?')){
            return
        }
        const[clearError, clearResult] = await clearTranslationHistory(user)

        const updatedUser = {
            ...user,
            translations: []
        }

        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
    }

    return (
    <ul>
        <li><button className="ClearHistoryButton" onClick={handleClearHistory}>Clear History</button></li>
        <li><button className="LogoutButton" onClick={handleLogOut}>Log Out</button></li>
    </ul>
    )
}

export default ProfileActions

