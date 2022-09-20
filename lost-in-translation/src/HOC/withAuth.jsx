import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext"

//Checks if there is a user in session storage. If not redirected to login page
const withAuth = Component => props => {
    const {user} = useUser()
    if(user!== null){
        return <Component {...props}/>
    }
    else{
        return <Navigate to="/" />
    }
}
export default withAuth