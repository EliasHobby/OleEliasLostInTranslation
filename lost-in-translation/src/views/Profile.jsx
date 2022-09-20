import { useEffect } from "react"
import { userById } from "../api/user"
import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../HOC/withAuth"

const Profile = () => {

    const {user, setUser} = useUser()

    useEffect(() => {

        const findUser = async () => {
            const [error,updatedUser] = await userById(user.id)
            if(error ===null){
                setUser(updatedUser)
            }
        }

        findUser()

    },[setUser, user.id])

    return (
        <>
            <h1>Profile</h1>
            <ProfileHeader username={user.username}/>
            <ProfileActions/>
            <ProfileTranslationHistory translations={user.translations}/>
        </>

    )
}
export default withAuth(Profile)