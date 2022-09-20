import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../HOC/withAuth"

const Profile = () => {
    //Hooks
    const { user } = useUser()

    return (
        <>
            <h1>Profile</h1>
            <div className="ProfileActions">
                <ProfileHeader username={user.username} />
                <ProfileActions />
            </div>
            <div className="ProfileContainer">
                <ProfileTranslationHistory translations={user.translations} />
            </div>
        </>

    )
}
export default withAuth(Profile)