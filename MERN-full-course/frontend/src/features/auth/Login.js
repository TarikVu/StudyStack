import { Link } from 'react-router-dom'

// The Welcome component is located under auth along with the login.
// This logical hiearchy makes sense since this page should be secure
const Welcome = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Welcome!</h1>

            <p><Link to="/dash/notes">View techNotes</Link></p>

            <p><Link to="/dash/users">View User Settings</Link></p>

        </section>
    )

    return content
}
export default Welcome