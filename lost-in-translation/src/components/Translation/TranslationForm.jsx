import { useState } from 'react';
import {useForm} from 'react-hook-form'
import {imagePath} from './imageMap.jsx'

const translateConfig = {
    required:true
}

const TranslationForm = ({letter,image}) => {

    //HOOKS
    const { register, handleSubmit, formState: { errors } } = useForm()

    //Local State
    const [ images, setImages ] = useState([]);

    //Event handlers
    const onSubmit = ({ translate }) => {
        setImages(translate.split(''))
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