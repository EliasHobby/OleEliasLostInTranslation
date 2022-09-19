import { useContext, createContext, useState } from "react";

//context  -> exposing state
const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}

//provider -> managing state
const UserProvider = (props) => {

    const [user, setUser] = useState(null)

    const state = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider


