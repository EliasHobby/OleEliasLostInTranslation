import { useContext, createContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import {storageRead} from "../utils/storage";

//context  -> exposing state
const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}

//provider -> managing state
const UserProvider = (props) => {

    const [user, setUser] = useState(storageRead( STORAGE_KEY_USER))

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


