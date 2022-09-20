const apiKey = process.env.REACT_APP_API_KEY

//Setting headers to simplify fetching later
export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
}