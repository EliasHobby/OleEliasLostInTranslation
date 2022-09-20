import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"
//Display last 10 translations array in a list
const ProfileTranslationHistory = ({translations}) => {

    //creates a list of translations array. taking only 10 elements 
    const translationList = translations.slice(translations.length-10).map(
        (translation, index) => <ProfileTranslationHistoryItem key={index+'-'+translation} translation={translation}/>)

    return (
        <section>
            <h4>Your Translation History</h4>
            <ul>
                {translationList}
            </ul>
        </section>
    )
}

export default ProfileTranslationHistory