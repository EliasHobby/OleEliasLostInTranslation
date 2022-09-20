import TranslationForm from "../components/Translation/TranslationForm"
import withAuth from "../HOC/withAuth"

const Translation = () => {
    return (
        <>
            <h1>Translation</h1>
            <TranslationForm/>
        </>
    )
}
export default withAuth(Translation)