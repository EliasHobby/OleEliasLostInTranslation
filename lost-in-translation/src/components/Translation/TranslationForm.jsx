import { useState } from 'react';
import {useForm} from 'react-hook-form'
import { addTranslation } from '../../api/translation.js';
import { STORAGE_KEY_USER } from '../../const/storageKeys.jsx';
import { useUser } from '../../context/UserContext.jsx';
import { storageSave } from '../../utils/storage.js';
import {imagePath} from './imagePath.jsx'

const translateConfig = {
    required:true
}

const TranslationForm = () => {

    //HOOKS
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user, setUser } = useUser()

    //Local State
    const [ images, setImages ] = useState([]);

    //Event handlers
    const onSubmit = async ({ translate }) => {
        const newString = translate.replace(/[^A-Z0-9]/ig, "");
        setImages(newString.split(''))
        
        const [error,updatedUser] = await addTranslation(user,translate)
        if(error !==null){
            return
        }
        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)

        console.log('Error: ' + error)
        console.log('Updated User: ' + updatedUser)

    }



    //Error handlers
    const errorMessage = (() => {
        if (!errors.translate){
            return null
        }
        if(errors.translate.type === 'required'){
            return <span>You need to write something</span>
        }
    })()

    return(
        <>
            <form onSubmit = { handleSubmit(onSubmit) } >
                <fieldset>
                    <input type="text" placeholder="Try to translate something!" 
                    {...register("translate", translateConfig) } />
                    { errorMessage }
                </fieldset>
                <button type="submit">Translate</button>
            </form>
            {
                images.map( (item, index) => {
                    return (
                        <img src={ imagePath(item) } alt={`img${index}`} key={index} />
                    )
                })
            }

        </>
    )

}

export default TranslationForm