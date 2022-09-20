import { createHeaders } from "."
const apiUrl = process.env.REACT_APP_API_URL

//Checks if user exist. 
//Returns error or user data. [null, null] if no user exist
const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if (!response.ok){
            throw new Error('Could not complete request.')
        }
        const data = await response.json()
        return [ null, data] //null,null if no user exist before
    }
    catch(error){
        return [ error.message, []]
    }
}

//Create user by username, and empty translation
//Returns json response or error message
export const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST', //Create a new record
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: [] //generates
            })
        })
        if (!response.ok) {
            throw new Error('Could not create user with username ' + username)
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }
}

//Takes in username and logs in either by getting existing user or by creating a new one
export const loginUser = async username => {
    const [checkError, user] = await checkForUser(username) //user object or null decides if user exist
    
    if(checkError !== null){
        return [checkError, null]
    }
    

    if(user.length !== 0){
        return [ null, user.pop() ] //return existing user
    }
    return await createUser(username) //return new user

}

//fetching a specific user to allow for sync between session storage and api
//returns  error or user object
export const userById = async (userId) => {
    try{
        const response = await fetch(`${apiUrl}/${userId}`)
        if(!response.ok){
            throw new Error('could not fetch user')
        }
        const user = await response.json()
        return [null, user]
    }
    catch(error){
        return [error.message, null]
    }
}