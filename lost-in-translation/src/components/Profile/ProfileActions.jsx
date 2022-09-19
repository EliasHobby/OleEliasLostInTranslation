import { Link } from "react-router-dom"

const ProfileActions = () => {
    return (
    <ul>
        <li><Link to="/translation">Translation</Link></li>
        <li><button>Clear History</button></li>
        <li><button>Log Out</button></li>
    </ul>
    )
}

export default ProfileActions

