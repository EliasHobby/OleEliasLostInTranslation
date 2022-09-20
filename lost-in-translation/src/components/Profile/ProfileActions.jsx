import { Link } from "react-router-dom"
import { clearTranslationHistory } from "../../api/translation"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"




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
        <li><Link to="/translation">Translation</Link></li>
        <li><button onClick={handleClearHistory}>Clear History</button></li>
        <li><button onClick={handleLogOut}>Log Out</button></li>
    </ul>
    )
}

export default ProfileActions

