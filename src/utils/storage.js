//Saves value to session storage
export const storageSave = (key, value) => {
    if(!key){
        throw new Error('No storage key provided')
    }

    if(!value){
        throw new Error('No value provided')
    }

    sessionStorage.setItem(key, JSON.stringify(value)) //stringify object
}

//Reads data in sessionstorage based on key
export const storageRead = key => {
    const data = sessionStorage.getItem(key)
    if(data){
        return JSON.parse(data)
    }
    return null
}

export const storageDelete = key => {
    sessionStorage.removeItem(key)
}