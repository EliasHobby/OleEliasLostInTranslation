import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user'
import { useState, useEffect } from 'react'
import { storageSave } from '../../utils/storage'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import { STORAGE_KEY_USER } from '../../const/storageKeys'
import { } from '../../styles/Login.css'

//declaring rules for username input
const usernameConfig = {
    required: true,
    minLength: 3
}

//Create html for login page
const LoginForm = () => {
    //Hooks
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user, setUser } = useUser()
    const navigate = useNavigate()

    //Local State
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    //Side effets
    useEffect(() => {
        if (user !== null) {
            navigate('translation')
        }
    }, [user, navigate])

    //Event handlers
    const onSubmit = async ({ username }) => {
        setLoading(true)
        const [error, userResponse] = await loginUser(username)
        if (error != null) {
            setApiError(error)
        }
        if (userResponse != null) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
        setLoading(false)
    }

    //Error handlers
    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }
        if (errors.username.type === 'required') {
            return <span>Username is required</span>
        }
        if (errors.username.type === 'minLength') {
            return <span>Username is too short</span>
        }

    })()

    return (
        <>
            <div className="LoginContainer">
                <h2>What's Your Name?</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <fieldset>
                        <label htmlFor="username">Username:</label>
                        <input type="text"
                            placeholder="johndoe"
                            {...register("username", usernameConfig)}
                        />
                        {errorMessage}
                        <button className="LoginButton" type="submit" disabled={loading}>Continue</button>
                    </fieldset>
                    {loading && <p>Logging in...</p>}
                    {apiError && <p>{apiError}</p>}

                </form>
            </div>
        </>
    )
}

export default LoginForm