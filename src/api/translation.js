import { createHeaders } from "."

const apiUrl = process.env.REACT_APP_API_URL

//Adding a translation to the logged in user
//Returns error message or json response
export const addTranslation = async (user, translation) => {
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH', //Update part of the record
            headers: createHeaders(),
            body: JSON.stringify({ //JSON doesn't handle objects. Needs to be stringifyed
                translations: [...user.translations , translation] //Appending current translation to existing translations array
            })
        })
        if (!response.ok){
            throw new Error('Could not add Order')
        }
        const result = await response.json()
        return [ null, result]
    }
    catch(error){
        return [ error.message, null]
    }

}

//Empties the array, thereby deleting the translations for the logged in user.
//Returns error message or json response
export const clearTranslationHistory = async (user) => {
    try{
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [] //setting empty
            })
        })
        if (!response.ok){
            throw new Error('Could not update')
        }
        const result = await response.json()
        return [ null, result]
    }
    catch(error){
        return [ error.message, null]
    }

}